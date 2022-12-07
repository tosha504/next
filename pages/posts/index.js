import Head from "next/head"
import Link from "next/link"
import Heading from '../../components/Heading'




const Posts = ({ posts }) => {

   

    
    return(
        <>
            <Head>
                <title>Posts</title>
            </Head>

            <Heading text="Posts list:"/>
            
            {/* { console.log(data.pages.nodes) } */}
            {/* <ul>
                {posts && posts.map(({ id, title }) => (
                    <li key={id}>
                        <Link href={`/posts/${id}`}>{title}</Link>
                    </li>
                ))}
            </ul> */}
        </>
    )    
}
  
export default Posts