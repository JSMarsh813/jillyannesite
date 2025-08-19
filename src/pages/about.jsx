import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import GeneralHeader from "../components/GeneralHeader"
import Image from "../images/landingpage.png"
export default function About() {
  return (
    <Layout>
      <GeneralHeader text="About Me" />

      <section className="max-w-5xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src={Image}
            alt="A photo of me"
            className="rounded-2xl shadow-lg w-64 h-80 object-cover"
          />
        </div>

        {/* Right: Text */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-4">Hey, I'm Jilly👋</h2>
          <p className="text-gray-800 font-semibold leading-relaxed mb-4">
            I’m a mom with 2 boys and a great husband whose on a journey to find
            out what food works best for my body and health.
          </p>
          <p className="text-gray-800 font-semibold leading-relaxed">
            This site is my little corner of the internet where I share recipes,
            talk about my life, experiences and occassionally: product reviews.
            Thanks for stopping by!
          </p>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="About Me" />
