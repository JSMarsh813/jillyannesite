import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import PreviewCompatibleImage from "./PreviewCompatibleImage"
import PostPreview from "./PostPreview"
import Flowers from "../images/flowers.png"

const BlogRollTemplate = props => {
  const { edges: posts } = props.data.allMarkdownRemark

  return (
    <div className="flex flex-wrap">
      {posts &&
        posts.map(({ node: post }) => (
          <div
            className="w-full md:w-1/2 lg:w-1/3 px-4 pt-8 mb-6"
            style={{
              backgroundImage: `url(${Flowers})`,
              backgroundPosition: "top",
              backgroundSize: "100% 190px",
              backgroundRepeat: "repeat-x",
            }}
            key={post.id}
          >
            <div className="max-w-[300px] mx-auto mb-10">
              {post?.frontmatter?.featuredimage && (
                <div class="rounded mb-8 h-[300px]  flex overflow-hidden">
                  <div className="my-auto  ">
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
              <div>
                <span
                  class="
                         bg-primary
                         rounded
                         inline-block
                         text-center
                         py-1
                         px-4
                         text-xs
                         leading-loose
                         font-semibold
                         text-white
                         mb-5
                         "
                >
                  {post.frontmatter.date}
                </span>
                <h3>
                  <Link
                    className="font-semibold
                    text-2xl
                    mb-4
                    inline-block
                    text-primary
                    hover:text-primary
                    "
                    to={post.fields.slug}
                  >
                    {post.frontmatter.title}
                  </Link>
                </h3>
                <p class="text-base text-body-color">{post.excerpt}</p>
              </div>
            </div>
            {/* KEEP READING BUTTON */}
            <div className="text-center">
              <Link
                className="button bg-secondary p-2 rounded-md border-b-2 border-white hover:bg-primary text-white"
                to={post.fields.slug}
              >
                Keep Reading →
              </Link>
            </div>
          </div>

          // <div
          //   className="is-parent column is-6 max-w-sm mx-auto group hover:no-underline focus:no-underline bg-primary text-white"
          //   key={post.id}
          // >
          //   {console.log(posts)}
          //   <article
          //     className={`blog-list-item pb-4 tile is-child box notification ${
          //       post.frontmatter.featuredpost ? "is-featured" : ""
          //     }`}
          //   >
          //     <header>
          //       {post?.frontmatter?.featuredimage && (
          //         <div className="featured-thumbnail ">
          //           <PreviewCompatibleImage
          //             imageInfo={{
          //               image: post.frontmatter.featuredimage,
          //               alt: `${
          //                 post.frontmatter.featuredimagealt
          //                   ? post.frontmatter.featuredimagealt
          //                   : ""
          //               }`,
          //             }}
          //           />
          //         </div>
          //       )}
          //       <p className="post-meta px-6 pb-2 pt-2 space-y-2">
          //         <Link
          //           className="title has-text-primary is-size-4 text-2xl font-semibold group-hover:underline group-focus:underline pt-4"
          //           to={post.fields.slug}
          //         >
          //           {post.frontmatter.title}
          //         </Link>

          //         <span className="block text-xs text-white">
          //           {post.frontmatter.date}
          //         </span>
          //       </p>
          //     </header>

          //     <section className="px-6">
          //       <p className="pb-4">{post.excerpt}</p>

          //       {/* KEEP READING BUTTON */}
          //       <Link
          //         className="button bg-secondary p-2 rounded-md border-b-2 border-white hover:bg-primary"
          //         to={post.fields.slug}
          //       >
          //         Keep Reading →
          //       </Link>
          //     </section>
          //   </article>
          // </div>
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
    <StaticQuery
      query={graphql`
        query BlogRollQuery {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
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
