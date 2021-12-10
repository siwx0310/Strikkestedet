import Sidebar from "../../components/Sidebar";
import { request } from "../../../lib/datocms";
import Link from "next/link";

export default function Garn(data) {
  const sidebarBrand = data.data.sidebar_brand;
  const sidebarFiber = data.data.sidebar_fiber;
  const sidebarNeedles = data.data.sidebar_needles;
  const products = data.data.products;
  const content = data.data.content;
  return (
    <>
      <Sidebar
        brand={sidebarBrand}
        fiber={sidebarFiber}
        needles={sidebarNeedles}
      />
      <div className="col-start-3 col-span-4">
        <div className="">
          <h1>{content.title}</h1>
          <p>{content.text}</p>
          <Link href="strikkeopskrifter"> Læs mere om garn </Link>
        </div>
        <section className=" grid grid-cols-4 gap-4">
          {products
            ? products.map((product) => {
                return (
                  <article key={product.id}>
                    <h2>{product.title}</h2>
                  </article>
                );
              })
            : null}
        </section>
      </div>
    </>
  );
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
  products:  allYarnProducts {
    brand
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
