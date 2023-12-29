import React, { useState, useEffect } from "react"
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import BlogRoll from "../components/BlogRoll"
import GeneralHeader from "../components/GeneralHeader"

const TagRoute = props => {
  const posts = props.data.allMarkdownRemark.edges
  //accesses array of node objects

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

  // const postLinks = posts.map(post => (
  //   <li key={post.node.fields.slug}>
  //     <Link to={post.node.fields.slug}>
  //       <h2 className="is-size-2">{post.node.frontmatter.title}</h2>
  //     </Link>
  //   </li>
  // ))

  const { tag } = props.pageContext
  const { title } = props.data.site.siteMetadata
  const { totalCount } = props.data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged under “${tag}”`

  return (
    <Layout>
      <GeneralHeader text={`${tag} Posts`} />

      <section className="section">
        <Helmet title={`${tag} | ${title}`} />
        <div className="container content mx-auto">
          <div>
            <div className="my-4">
              <span className="flex justify-between">
                <h3 className="text-primary font-semibold text-lg my-2 text-center left-0 bg-slate-200 px-2 border-r-2 border-b-2 border-primary">
                  {tagHeader}
                </h3>

                <Link
                  className="button bg-secondary p-2 rounded-md border-b-2 border-white text-white font-semibold hover:bg-primary"
                  to="/tags/"
                >
                  Browse all tags
                </Link>
              </span>

              <BlogRoll props={list} />

              <div className="flex justify-center mt-2">
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
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
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
