import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { withPrefix } from "gatsby"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
		<h1>hi i'm <strong>tricia</strong>!</h1>
		<p class="description">i am a full-stack web developer.
			i enjoy making <strong>experiences</strong> &mdash;
			things that are not only aesthetically pleasing, but also fun and rewarding to interact with.
		</p>
    <p>please excuse the construction!</p>
    <a href={withPrefix('/tricia.pdf')} target="_blank" rel="noopener noreferrer">resume</a>
  </Layout>
)

export default IndexPage
