
import Sidebar from "../../components/Sidebar";
import {request} from "../../../lib/datocms";


export default function Garn( data ) {

    const sidebarBrand = data.data.sidebar_brand
    const sidebarFiber = data.data.sidebar_fiber
    const sidebarNeedles = data.data.sidebar_needles
    const content = data.data.content
    return (
        <>
            <Sidebar brand={sidebarBrand} fiber={sidebarFiber} needles={sidebarNeedles}/>
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
  sidebar_fiber: allYarnFibers {
    title
    id
  }
  sidebar_needles: allYarnIndicativeKnittingNeedles {
    id
    title
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