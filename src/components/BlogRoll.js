import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import PreviewCompatibleImage from "./PreviewCompatibleImage"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

const BlogRollTemplate = props => {
  let posts = props.props

  return (
    <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 ">
      {posts &&
        posts.map(({ node: post }) => (
          <div
            className=" is-6 group bg-primary text-white w-sm styling"
            key={post.id}
          >
            <article
              className={`blog-list-item pb-4  ${
                post.frontmatter.featuredpost ? "is-featured" : ""
              }`}
            >
              <header className="w-300px mx-auto mb-10">
                {post?.frontmatter?.featuredimage ? (
                  <div className="rounded mb-8 h-[300px]  flex overflow-hidden">
                    <div className="my-auto ">
                      <LazyLoadImage
                        height="100"
                        width="400"
                        effect="blur"
                        alt={
                          post.frontmatter.featuredimagealt
                            ? post.frontmatter.featuredimagealt
                            : ""
                        }
                        src={post.frontmatter.featuredimage} // use normal <img> attributes as props
                      />
                    </div>
                  </div>
                ) : (
                  //to add empty space if no image was provided for the post, so the posts line up nicely
                  <div className="rounded mb-8 h-[300px]  flex overflow-hidden"></div>
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
                <p className="pb-4 h-80 2xl:h-72">{post.excerpt}</p>
                {/* KEEP READING BUTTON */}
                <div className="text-center mb-2">
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

export default BlogRollTemplate

// export default function BlogRoll() {
//   return (
//     //  filter: { frontmatter: { tags: { in: "something" } } } allows us to filter the posts sent back by tags

//     <StaticQuery
//       query={graphql`
//         query BlogRollQuery {
//           allMarkdownRemark(
//             sort: { order: DESC, fields: [frontmatter___date] }
//           ) {
//             edges {
//               node {
//                 excerpt(pruneLength: 400)
//                 id
//                 fields {
//                   slug
//                 }
//                 frontmatter {
//                   title
//                   templateKey
//                   date(formatString: "MMMM DD, YYYY")
//                   featuredpost
//                   featuredimage
//                   tags
//                   featuredimagealt
//                 }
//               }
//             }
//           }
//         }
//       `}
//       render={(data, count) => <BlogRollTemplate data={data} count={count} />}
//     />
//   )
// }
