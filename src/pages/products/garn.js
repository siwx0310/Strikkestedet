
import Sidebar from "../../components/Sidebar";
import {request} from "../../../lib/datocms";


export default function Garn( data ) {
    console.log(data.data.content);
    const content = data.data.content
    return (
        <>
            <Sidebar/>
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