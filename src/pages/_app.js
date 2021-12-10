import "/src/styles/globals.css";
import "tailwindcss/tailwind.css";
import Footer from "../Globals/Footer";
import Header from "../Globals/Header";
import { request } from "../../lib/datocms";

function MyApp({ Component, pageProps, data }) {
  console.log();
  return (
    <>
      <Header />
      <div className="bg-background">
        <div className="max-w-screen-2xl mx-auto grid grid-cols-6 gap-4">
          <Component {...pageProps} />
        </div>
      </div>

      <Footer />
    </>
  );
}

const HEADER_QUERY = `query Header {
    allHeaders {
    id
    navLinks {
      ... on AboutUsPageRecord {
        id
        slug
        title
      }
      ... on LearnPageRecord {
        id
        title
        slug
      }
      ... on ProductOverviewRecord {
        id
        heading
      }
      ... on ProductPageRecord {
        id
        slug
        title
      }
      ... on HomepageRecord {
        id
        heading
      }
    }
  }
}`;

export async function getStaticProps() {
  const data = await request({
    query: HEADER_QUERY,
  });
  return {
    props: { data },
    notFound: !data?.content,
  };
}

export default MyApp;
