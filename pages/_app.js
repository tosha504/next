import Layout from '../components/Layout';
import '../styles/globals.scss'
import test from "../public/test.png"
import Image from 'next/image'
import Head from 'next/head';

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";



const client = new ApolloClient({
  uri: "http://headless/graphql/",
  cache: new InMemoryCache()
});

export default function MyApp({ Component, pageProps }) {
  return (
  <ApolloProvider client={client}> 
    <Layout>
      <Head>
        
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
    </Layout>
    </ApolloProvider>
  ) 
}

