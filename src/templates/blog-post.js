import React from "react"
import PropTypes from "prop-types"
import { kebabCase } from "lodash"
import { Helmet } from "react-helmet"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Content, { HTMLContent } from "../components/content"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

// eslint-disable-next-line
export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  date,
  image,
  imagealt,
  helmet,
  fields,
  id,
}) => {
  const PostContent = contentComponent || Content

  const baseUrl = `https-nourishedbyketo-com`

  let disqusConfig = {
    //url: `${baseUrl + fields}`,
    identifier: id,
    title: title,
  }

  return (
    <section className="section bg-primary py-6 text-black">
      {helmet || ""}
      {console.log(disqusConfig)}

      <div className=" px-4 max-w-screen-lg mx-auto">
        <div className="bg-white">
          <div className="border-2 border-secondary">
            <header className="bg-secondary p-2">
              <h1 className="text-5xl font-semibold md:tracking-tight text-center py-4 text-white">
                {title}
              </h1>

              <span className="block text-center text-white">{date}</span>

              <p className="text-2xl text-center text-white">{description}</p>
            </header>

            {image && (
              <div
                className="featured-thumbnail m-auto pt-10 max-w-md
                "
              >
                <LazyLoadImage
                  height="100"
                  width="400"
                  effect="blur"
                  alt={imagealt ? imagealt : ""}
                  src={image} // use normal <img> attributes as props
                />
              </div>
            )}

            <PostContent className="text-xl" content={content} />

            {/* ############## TAGS ##########*/}
            {tags && tags.length ? (
              <div
                className="mt-2 border-t-4 
              border-dashed border-secondary"
              >
                <ul className="taglist flex flex-wrap py-6 space-x-4">
                  {tags.map(tag => (
                    <li key={tag + `tag`}>
                      <Link
                        to={`/tags/${kebabCase(tag)}/`}
                        className="px-3 py-2 rounded-sm  bg-secondary text-white
                        hover:underline"
                      >
                        {`#${tag}`}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
          <CommentCount config={disqusConfig} placeholder={"..."} />
          /* Post Contents */
          <Disqus config={disqusConfig} />
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object,
}

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        date={post.frontmatter.date}
        image={post.frontmatter.featuredimage}
        imagealt={post.frontmatter.featuredimagealt}
        id={post.id}
        fields={post.fields.slug}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
        featuredimage
        featuredimagealt
      }
      fields {
        slug
      }
    }
  }
`
