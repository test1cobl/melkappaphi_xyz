import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>IT Interns of world, unite!</h1>
    <p>Through Victory my chains are Broken.</p>
    <p>The Force shall free me.</p>

    <p style="font-style:oblique;font-weight:bold;text-shadow: 1.5px 1.5px #008080;">Eric deserves a raise.</p>

    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
    <br />
    <Link to="/page-3/">Go to page 3</Link>
  </Layout>
)

export default IndexPage
