import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

export default function Facebook() {
  return (
    <a
      href="https://www.facebook.com/NourishedByKeto"
      target="_blank"
      rel="noreferrer"
      className="hover:bg-secondary p-2 rounded-lg text-primary hover:text-white"
    >
      <StaticImage
        src="../../images/facebook.webp"
        alt="facebook logo"
        loading="lazy"
        placeholder="blurred"
        className="w-20 rounded-full mx-auto "
      />

      <p className="text-center font-semibold ">FACEBOOK</p>
    </a>
  )
}
