import { request } from "../../../lib/datocms";

export default function LearnToKnit(data) {
    console.log(data);
    return (
        <>
            <h1>Lær at strikke</h1>
        </>
    )
}

const learnData = `query learnPage {
    content: learnPage(filter: {slug: {eq: "laer-at-strikke"}}) {
      title
      text
      slug
      blocks {
        id
        header
        mediaasset {
          id
          url
        }
      }
    }
  }`;

export async function getStaticProps() {
    const data = await request({
        query: learnData,
    });
    return {
        props: { data },
        notFound: !data?.content,
    }
}