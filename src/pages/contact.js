import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import flowerpattern from "../images/connected.png"
export default function Contact() {
  return (
    <Layout>
      <div
        className="py-8 lg:py-16 px-4 bg-primary"
        style={{
          backgroundImage: `url(${flowerpattern})`,
        }}
      >
        <h1 className="text-center text-white bg-secondary max-w-screen-md mx-auto py-6 rounded-full text-2xl font-semibold border-2 border-white">
          Lets Chat!
        </h1>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="space-y-8 bg-white rounded-md my-10 p-6 max-w-screen-md  mx-auto "
        >
          <div className="text-black text-base ">
            <label
              htmlFor="email"
              className="block mb-2 font-black text-primary"
            >
              Your email
            </label>

            <input
              type="email"
              id="email"
              className="shadow-sm border border-secondary rounded-lg block w-full p-2.5 placeholder:text-black"
              placeholder="kuzcoisthebestllama@gmail.com"
              style={{ backgroundColor: "#F3FCFD" }}
              required
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block mb-2 font-black text-primary"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="block p-3 w-full rounded-lg border  border-secondary shadow-sm placeholder:text-black"
              placeholder="Let's start a chat"
              style={{ backgroundColor: "#F3FCFD" }}
              required
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block mb-2 font-black text-primary"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="6"
              className="block p-2.5 w-full rounded-lg shadow-sm border border-secondary placeholder:text-black"
              placeholder="Enter your message here!"
              style={{ backgroundColor: "#F3FCFD" }}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="py-3 px-5 font-semibold text-center text-white rounded-lg bg-secondary sm:w-fit"
          >
            Send message
          </button>
        </form>
      </div>
    </Layout>
  )
}

export const Head = () => <Seo title="Contact" />
