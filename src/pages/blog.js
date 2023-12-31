import React, { useState, useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import BlogRoll from "../components/BlogRoll"
import PropTypes from "prop-types"
import GeneralHeader from "../components/GeneralHeader"
import LifeTag from "../components/blogTagIcons/LifeTag"
import RecipesTag from "../components/blogTagIcons/RecipesTag"
import ReviewsTag from "../components/blogTagIcons/ReviewsTag"
import WellnessTag from "../components/blogTagIcons/WellnessTag"

const Blog = props => {
  const posts = props.data.allMarkdownRemark.edges

  // State for the list
  const [list, setList] = useState([...posts.slice(0, 3)])

  // State to trigger load more
  const [loadMore, setLoadMore] = useState(false)

  // State of whether there is more to load
  const [hasMore, setHasMore] = useState(posts.length > 3)

  // Load more button click
  const handleLoadMore = () => {
    setLoadMore(true)
  }

  // Handle loading more articles
  useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length
      const isMore = currentLength < posts.length
      const nextResults = isMore
        ? posts.slice(currentLength, currentLength + 3)
        : []
      setList([...list, ...nextResults])
      setLoadMore(false)
    }
  }, [loadMore, hasMore]) //eslint-disable-line

  //Check if there is more
  useEffect(() => {
    const isMore = list.length < posts.length
    setHasMore(isMore)
  }, [list]) //eslint-disable-line

  return (
    <Layout>
      <GeneralHeader text="Welcome To My Blog" />

      <section className="flex flex-wrap gap-4 justify-center">
        <LifeTag></LifeTag>
        <RecipesTag></RecipesTag>
        <ReviewsTag></ReviewsTag>
        <WellnessTag></WellnessTag>
      </section>

      <GeneralHeader text="The Latest and Greatest" />

      <section className="text-primary " style={{ backgroundColor: "#d8ebed" }}>
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <BlogRoll props={list} />

          <div className="flex justify-center">
            {hasMore ? (
              <button
                type="button"
                onClick={handleLoadMore}
                className="px-6 py-3 text-sm rounded-md hover:underline bg-secondary text-white"
              >
                Load more posts...
              </button>
            ) : (
              <p>No more results</p>
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const MainBlogPageQuery = graphql`
  query BlogRollQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            featuredpost
            featuredimage
            tags
            featuredimagealt
          }
        }
      }
    }
  }
`

export default Blog

export const Head = () => <Seo title="Blog" />
