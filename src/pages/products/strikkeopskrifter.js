import { request } from "../../../lib/datocms";

export default function Strikkeopskrifter(data) {
  return (
    <>
      <h1></h1>
      <p></p>
    </>
  );
}
const StrikkeopskriftSide = `query Strikkeopskrifter {
  content: productPage(filter: {slug: {eq: "strikkeopskrifter"}}) {
    slug
    text
    title
    id
  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: StrikkeopskriftSide,
  });
  return {
    props: { data },
    notFound: !data?.content,
  };
}
