import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import PreviewCompatibleImage from "./PreviewCompatibleImage"

const BlogRollTemplate = props => {
  const { edges: posts } = props.data.allMarkdownRemark

  return (
    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {posts &&
        posts.map(({ node: post }) => (
          <div
            className="is-parent column is-6 max-w-sm mx-auto group hover:no-underline focus:no-underline bg-primary text-white"
            key={post.id}
          >
            {console.log(posts)}
            <article
              className={`blog-list-item pb-4 tile is-child box notification ${
                post.frontmatter.featuredpost ? "is-featured" : ""
              }`}
            >
              <header className="max-w-[300px] mx-auto mb-10">
                {post?.frontmatter?.featuredimage && (
                  <div className="rounded mb-8 h-[300px]  flex overflow-hidden bg-white">
                    <div className="my-auto ">
                      <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `${
                            post.frontmatter.featuredimagealt
                              ? post.frontmatter.featuredimagealt
                              : ""
                          }`,
                        }}
                      />
                    </div>
                  </div>
                )}
                <p className="post-meta px-6 pb-2 pt-2 space-y-2">
                  <Link
                    className="title has-text-primary is-size-4 text-2xl font-semibold group-hover:underline group-focus:underline pt-4"
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>

                  <span className="block text-xs text-white">
                    {post.frontmatter.date}
                  </span>
                </p>
              </header>

              <section className="px-6">
                <p className="pb-4">{post.excerpt}</p>

                {/* KEEP READING BUTTON */}
                <div className="text-center">
                  <Link
                    className="button bg-secondary p-2 rounded-md border-b-2 border-white hover:bg-primary"
                    to={post.fields.slug}
                  >
                    Keep Reading →
                  </Link>
                </div>
              </section>
            </article>
          </div>
        ))}
    </div>
  )
}

BlogRoll.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export default function BlogRoll() {
  return (
    //  filter: { frontmatter: { tags: { in: "something" } } } allows us to filter the posts sent back by tags

    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { tags: { in: "something" } } }
          ) {
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
                  featuredimagealt
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <BlogRollTemplate data={data} count={count} />}
    />
  )
}
