import Link from "next/link"
import styles from "../styles/Navbar.module.scss"
import { useRouter } from 'next/router'
import Image from "next/image"
import { useQuery, gql } from "@apollo/client";


const MENUS = gql`
{
  menu(id: "dGVybTozNQ==") {
    id
    menuItems(where: {location: HEADER}) {
      edges {
        node {
          label
          menuItemId
          path
        }
      }
    }
  }
  acfOptionsPageOptions {
    setingPageApi {
      header {
        logo {
          mediaItemUrl
        }
        phone
      }
    }
  }
}
`

const Navbar = () => {
  const { data, loading, error } = useQuery(MENUS);
  if(data) {
  // console.log( data.acfOptionsPageOptions.setingPageApi.header.phone.replace(/\s/g, '') );
  }
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>
  let navigation = [];
  data.menu.menuItems.edges.map(e => {
      navigation.push({id: e.node.menuItemId , title: `${e.node.label}`, path: e.node.path },)
  })
  const { pathname } = useRouter();
  // console.log(pathname) 

  return(
    <nav className={styles.nav}>
        <div className="logo">
          <Link href="/" >
            <Image  src={data.acfOptionsPageOptions.setingPageApi.header.logo.mediaItemUrl} width="237" height="48" alt="webDev" /></Link>
        </div>
        <div className={styles.links}>
            {navigation.map(({ id, title, path })=> (
              <Link  key={ id } href={ path } className={ pathname === path ? styles.active : null } >{title}</Link>
            )) }
              <Link href={'tel:' + data.acfOptionsPageOptions.setingPageApi.header.phone.replace(/\s/g, '')}>{data.acfOptionsPageOptions.setingPageApi.header.phone}</Link>

        </div>
    </nav>
  )
}
  
export default Navbar