import React from "react"
import { Disqus, CommentCount } from "gatsby-plugin-disqus"

export default function Disquis({ id, title, fields }) {
  const baseUrl = `http://nourishedbyketo.com`

  let disqusConfig = {
    url: `${baseUrl + fields}`,
    identifier: id,
    title: title,
  }

  return (
    <div>
      <CommentCount config={disqusConfig} placeholder={"..."} />
      <Disqus config={disqusConfig} />
    </div>
  )
}
