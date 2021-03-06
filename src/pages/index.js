import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Home" />
        <h1>Hello. 你好</h1>
        <h2>I'm Urbano from sunny Miami, FL. I love web dev and I'm also trying to learn Chinese (Mandarin).</h2>
        <p>Need a developer <Link to="/contact">Contact me.</Link></p>
        <p>Follow me on <a href="https://twitter.com/ubaz_3">Twitter</a></p>
      </Layout>
    </div>
  )
}

export default IndexPage;