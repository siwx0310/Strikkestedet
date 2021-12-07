
import {request} from "../../lib/datocms";

export default function Header(data) {
    console.log(data.content)
    return (
        <div className="bg-gray-header">
        <div className="max-w-screen-2xl mx-auto">
            <div className="max-w-screen-2xl mx-auto grid grid-cols-8 gap-4" >
            <h1>This is the header</h1>
            </div>
        </div>
        </div>
    )
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
        props: { data }
    };
}


