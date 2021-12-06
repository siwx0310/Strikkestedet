
import { request } from "../../lib/datocms";

export default function Home({ data }) {
  console.log(data)
  return <div className="">

    <h1 className="">{data.content.heading}</h1>
    <p>{data.content.text}</p>
  </div>
}

const HOMEPAGE_QUERY = `query MyQuery {
  content: homepage {
    id
    heading
   
  }
}`;
export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,

  });
  return {
    props: { data }
  };
}



