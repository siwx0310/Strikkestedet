import { request } from "../../../lib/datocms";

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

            {blocksArray.map(block => {return <BlockSection key={block.id} index={blocksArray.findIndex(item => item.id === block.id)} {...block}></BlockSection>})}
        </>
    )
}

function BlockSection(props) {
    return (
        <>
        <section className="w-full mb-4">
            <article className="grid grid-cols-6 gap-4 flex flex-wrap">
                <img loading="lazy" src={props.mediaasset.url} alt={props.mediaasset.alt} className={"col-span-6 lg:col-span-3 " + ((props.index % 2 > 0) ? "lg:order-2" : "lg:order-1")}></img>
                <div className={"col-span-6 lg:col-span-3 p-16 self-center " + ((props.index % 2 > 0) ? "lg:order-1" : "lg:order-2")}>
                    <span className="font-sans text-sm text-black-60">{props.assetnumber}.</span>
                    <h2 className="font-serif text-xl lg:text-3xl mb-4">{props.header}</h2>
                    <p className="text-black-60">{props.body}</p>
                </div>
            </article>
        </section>
        </>
    );
}

const learnData = `query learnPage {
    content: learnPage(filter: {slug: {eq: "forstaa-opskrifter"}}) {
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
          alt
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