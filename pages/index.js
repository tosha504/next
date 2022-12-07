import Head from 'next/head'
import Heading from '../components/Heading'
import styles from "../styles/Home.module.scss"
import { useQuery, gql } from "@apollo/client";

// const FILMS_QUERY = gql`
// {
//   page(id: "cG9zdDoxNA==") {
//     id
//     test {
//       builder {
//         ... on Page_Test_Builder_Main {
//           fieldGroupName
//           testowePoleMain
//         }
//         ... on Page_Test_Builder_SubMain {
//           fieldGroupName
//           testSubMain
//         }
//       }
//     }
//   }
// }
// `


const Home = () => {
  // const { data, loading, error } = useQuery(FILMS_QUERY);
  // if(data) {
  //   console.log( data.page.test.builder);
  // }
  // if (loading) return "Loading...";
  // if (error) return <pre>{error.message}</pre>
  return (
    <> 
    <Head>
      <title>Home</title>
    </Head>
    <div className={styles.wrapper} >
      {/* {
        data.page.test.builder.map(e => {

          return <>
          <Heading text={ e.testowePoleMain }/>
           <Heading tag="h2" text={e.testowePoleMain} /> 
           </>
        })
      } */}
       
    GREETTTENG
    
  </div>
 </>
)}

export default Home