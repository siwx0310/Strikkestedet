import { request } from "../../lib/datocms";

export default function Home({ data }) {
  console.log(data);
  return (
    <>
      <h1 className="text-blue-900">{data.content.heading}</h1>
    </>
  );
}

const HOMEPAGE_QUERY = `query HomePage {
  content: homepage {
    heading
    id
    text {
      ... on ImageLinkRecord {
      __typename
        id
        image {
          title
          url
        }
      }
      ... on TextblockRecord {
      __typename
        id
        text
        heading
      }
    }
  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: HOMEPAGE_QUERY,
  });
  return {
    props: { data },
    notFound: !data?.content,
  };
}
