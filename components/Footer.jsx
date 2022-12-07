import Heading from '../components/Heading'
import { useQuery, gql } from "@apollo/client";


const FooterItems = gql`
{
  acfOptionsPageOptions {
    setingPageApi {
      footer
      contact {
        adress
        email
        title
        socials {
          image {
            mediaItemUrl
          }
          link {
            url
            title
            target
          }
        }
      }
    }
  }
}
`
const Footer = () => {
  const { data, loading, error } = useQuery(FooterItems);
  if(data) {
  console.log( data.acfOptionsPageOptions.setingPageApi.contact , 'dataFooter' );
  // const {adress, email, title, socials } = data.acfOptionsPageOptions.setingPageApi.contact;
  // console.log(socials);
  }
  if (loading) return "Loading...";
  if (error) return <pre>{error.message}</pre>
  const {adress, email, title, socials} = data.acfOptionsPageOptions.setingPageApi.contact;
  return (
    <footer>
      <div className="preFooter">
        <h2>{title}</h2>
        {adress} {email}
        {socials.map((e) => {
          console.log(e.image.mediaItemUrl);
          
          return  (   <>
            <img src={e.image.mediaItemUrl} alt="" />
          <a href={e.link.url} traget={e.link.target}>ti</a>
          </>)
        
        })}
      </div>
      <Heading tag="h3" text={ data.acfOptionsPageOptions.setingPageApi.footer }/>
  </footer>
  )
}
  
export default Footer