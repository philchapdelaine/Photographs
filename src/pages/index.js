import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import * as styles from "../components/index.module.css"
import Header from "../components/header"
import Content from "../components/content"

const IndexPage = () => (
  <Layout>
    <Content />
  </Layout>
)
export default IndexPage

export function Head() {
  return (
    <title>Comfy</title>
  )
}
