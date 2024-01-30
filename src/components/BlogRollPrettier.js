import React from "react"
import { Link } from "gatsby"
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
                <div className="rounded mb-2 h-[300px]  flex overflow-hidden"></div>
              )}
              <article className="mt-4">
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
                <p className="text-base text-body-color h-80 2xl:h-72">
                  {post.excerpt}
                  {/* h-64 is what pushes the keep reading button down */}
                </p>

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
        ))}
    </div>
  )
}

export default BlogRollPrettierTemplate
