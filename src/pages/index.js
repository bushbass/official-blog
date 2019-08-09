import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

export default function index() {
  return (
    <div>
      <Layout>
        <Head title="Home" />
        Checking auto deploy from git push
      </Layout>
    </div>
  )
}
