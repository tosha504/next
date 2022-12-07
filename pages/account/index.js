import Heading from '../../components/Heading'
import Head from 'next/head';

const Account = () => {
  return (
    <>
      <Head>
        <title>account</title>
      </Head>
      <Heading text="Your account" />
      <p>Some iNFo for you </p>
    </>
  )
}
  
export default Account