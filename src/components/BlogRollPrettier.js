import React from "react"
import PropTypes from "prop-types"
import { Link, graphql, StaticQuery } from "gatsby"
import PreviewCompatibleImage from "./PreviewCompatibleImage"
import PostPreview from "./PostPreview"
import backgroundImage from "../images/funkyLines.jpg"
import { StaticImage } from "gatsby-plugin-image"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"

const BlogRollPrettierTemplate = props => {
  let posts = props.props

  return (
    <div className="flex flex-wrap ">
      {posts &&
        posts.map(({ node: post }) => (
          <div className="relative w-full md:w-1/2 lg:w-1/3  pt-6 mb-6">
            <StaticImage
              src="../images/funkyLines.webp"
              alt=""
              loading="eager"
              objectfit="cover"
              placeholder="blurred"
              style={{
                position: "absolute",
                zIndex: "1",
                width: "100%",
                height: "25%",
              }}
            />
            {/* className="absolute z-0 w-full h-1/4" */}

            <div className="max-w-[300px] mx-auto mb-8">
              {post?.frontmatter?.featuredimage ? (
                <div className="rounded h-[300px]  flex overflow-hidden ">
                  <div className="my-auto z-20 ">
                    {/* my-auto is key to have the post image move down the bg image */}

                    <LazyLoadImage
                      height="100"
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
                <div className="rounded mb-2 h-[300px]  flex overflow-hidden"></div>
              )}
              <article className="">
                <span
                  className="
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
                <p className="text-base text-body-color h-64">{post.excerpt}</p>

                <div className="text-center">
                  <Link
                    className="button bg-secondary p-2 rounded-md border-b-2 border-white hover:bg-primary text-white"
                    to={post.fields.slug}
                  >
                    Keep Reading →
                  </Link>
                </div>
              </article>
            </div>
            {/* KEEP READING BUTTON */}
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

export default BlogRollPrettierTemplate

// BlogRoll.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// }

// export default function BlogRoll() {
//   return (
//     // sort so the newest are first
//     // limit to showing 3 of them
//     <StaticQuery
//       query={graphql`
//         query BlogRollQuery {
//           allMarkdownRemark(
//             sort: { order: DESC, fields: [frontmatter___date] }
//             filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
//             limit: 3
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
