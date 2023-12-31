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

  const tags = [
    {
      name: "life",
      imageLink:
        "https://images.freeimages.com/images/large-previews/447/young-llama-1370811.jpg",
    },
    {
      name: "recipes",
      imageLink:
        "https://healthhomeandhappiness.com/wp-content/uploads/2019/06/IMG_0299.jpg",
    },
    {
      name: "reviews",
      imageLink:
        "https://assets.entrepreneur.com/content/3x2/2000/20190128144410-GettyImages-1074272374.jpeg",
    },
    {
      name: "Wellness",
      imageLink:
        "https://www.thewholepetvet.com/blog/wp-content/uploads/2022/06/iStock-1129449588-2000x1285.jpg",
    },
  ]

  return (
    <Layout>
      <GeneralHeader text="Welcome To My Blog" />

      <section className="flex flex-wrap gap-4 justify-center">
        <LifeTag></LifeTag>
        <RecipesTag></RecipesTag>
        <ReviewsTag></ReviewsTag>
        <WellnessTag></WellnessTag>
        {/* {tags.map(item => (
          <Link
            key={`Link ${item.name}`}
            to={`/tags/${item.name}`}
            //change so it goes to /tags/item.name
            className="hover:bg-highlights hover:rounded-full py-8"
          >
            <img
              key={`img ${item.name}`}
              className="max-w-xs h-24 rounded-3xl relative -bottom-4 md:h-32 xl:h-44 "
              //moving image down so the circle that shows on hover is centered
              src={item.imageLink}
            ></img>
            <h3
              className="relative text-center w-24 mx-auto bg-primary text-white py-2 font-semibold "
              key={`h3 ${item.name}`}
            >
              {item.name}
            </h3>
          </Link>
        ))} */}
      </section>

      <GeneralHeader text="The Latest and Greatest" />

      <section className="text-primary " style={{ backgroundColor: "#d8ebed" }}>
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          {/* <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-white"
          >
            <img
              src="https://i.ebayimg.com/images/g/jWEAAOSwiHFdESyU/s-l1600.jpg"
              alt=""
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Noster tincidunt reprimique ad pro
              </h3>
              <span className="text-xs text-primary">February 19, 2021</span>
              <p>
                Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est
                in graece fuisset, eos affert putent doctus id.
              </p>
            </div>
          </a> */}
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
