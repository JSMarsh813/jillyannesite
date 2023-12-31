import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

export default function LifeTag() {
  let tag = "life"
  return (
    <Link
      key={`Link ${tag}`}
      to={`/tags/${tag}/`}
      //change so it goes to /tags/item.name
      className="hover:bg-highlights hover:rounded-full py-8"
    >
      <StaticImage
        key={`img ${tag}`}
        src={"../../images/llama.webp"}
        alt=""
        loading="eager"
        placeholder="blurred"
        className="aspect-[4/3] h-24 rounded-3xl relative -bottom-4 md:h-32 xl:h-44 "
        //moving image down so the circle that shows on hover is centered
      />

      <h3
        className="relative text-center w-24 mx-auto bg-primary text-white py-2 font-semibold "
        key={`h3 ${tag}`}
      >
        {tag}
      </h3>
    </Link>
  )
}
