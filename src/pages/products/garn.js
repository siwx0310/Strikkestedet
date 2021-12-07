
import Sidebar from "../../components/Sidebar";
import {request} from "../../../lib/datocms";


export default function Garn( data ) {

    const sidebarBrand = data.data.sidebar_brand
    const content = data.data.content
    return (
        <>
            <Sidebar data={sidebarBrand}/>
            <h1>{content.title}</h1>
            <p>{content.text}</p>
        </>
    )
}
const GarnData = `query Garn {
  content: productPage(filter: {slug: {eq: "garn"}}) {
    slug
    text
    title
    id
  }
  sidebar_brand: allYarnBrands {
    title
    brand
  } 
}`;

export async function getStaticProps() {
    const data = await request({
        query: GarnData,

    });
    return {
        props: { data },
        notFound: !data?.content,
    };
}