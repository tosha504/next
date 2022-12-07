import Heading from '../components/Heading'
import { useEffect } from "react"
import { useRouter } from 'next/router'
import Head from 'next/head';

const Error = () => {
  // const router = useRouter();
  // useEffect(() => {
  //     setTimeout(() => {
  //         router.push('/')
  //     }, 3000);
  // }, [router])
  return (
    <>
      <Head>
        <title>404</title>
      </Head>
      <Heading text="404" />
      <p>Something is going wrong</p>
    </>
  )
}
  
export default Error