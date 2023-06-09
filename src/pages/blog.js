import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import BlogRoll from "../components/BlogRoll"

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
export default function Blog() {
  return (
    <Layout>
      <h1 className="text-center bg-primary text-white py-6 text-3xl">
        Welcome to my blog
      </h1>

      <section className="flex flex-wrap gap-4 justify-center">
        {tags.map(item => (
          <Link to="" className="hover:bg-highlights hover:rounded-full py-8">
            <img
              className="max-w-xs h-60  h-40 rounded-3xl relative -bottom-4"
              //moving image down so the circle that shows on hover is centered
              src={item.imageLink}
            ></img>
            <h3 className="relative text-center w-24 mx-auto bg-primary text-white py-2 font-semibold ">
              {item.name}
            </h3>
          </Link>
        ))}
      </section>

      <h2 className="text-center bg-primary text-white py-4 text-xl">
        The Latest and Greatest
      </h2>

      <section className="text-primary " style={{ backgroundColor: "#d8ebed" }}>
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
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
          </a>

          <BlogRoll />

          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline bg-secondary text-white"
            >
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}
