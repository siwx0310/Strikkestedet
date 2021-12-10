import { request } from "../../../lib/datocms";
import VideoSection from "../../components/VideoSection";

export default function LearnToKnit(data) {
    const blocksArray = data.data.content.blocks;

    return (
        <>
            <section className="grid grid-cols-6 gap-4">
                <article className="col-span-6 lg:col-span-3 lg:col-start-2 p-16">
                    <h1 className="font-serif text-3xl lg:text-5xl mb-4">{data.data.content.title}</h1>
                    <p className="text-black-60">{data.data.content.text}</p>
                </article>
            </section>

            {blocksArray.map(block => {return <VideoSection key={block.id} index={blocksArray.findIndex(item => item.id === block.id)} {...block}></VideoSection>})}
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
        body
        assetnumber
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