import Layout from '../components/layout/layout';
import React from 'react';
import Head from 'next/head';

import HomePage from '../components/pages-content/HomePage/HomePage';
class App extends React.Component {
  render() {
    return (
      <div>
        <Head>
          <title>My page</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;300;400;500&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <Layout>
          <HomePage />
        </Layout>
      </div>
    );
  }
}
export default App;
