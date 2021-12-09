import { request } from "../../lib/datocms";
import Button from "../Globals/Button";

export default function Home({ data }) {
  console.log(data.content)

  const patternsBgImage = {
    backgroundImage: "url('" + data.content.text[1].image.url + "');"
  };
  const yarnBgImage = {
    backgroundImage: "url('" + data.content.text[0].image.url + "');"
  };
  const knitBgImage = {
    backgroundImage: "url('" + data.content.text[3].image.url + "');"
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
      <>
        <section className="grid grid-cols-6 gap-4">
          <div className="col-span-6 md:col-span-4 bg-cover bg-center min-h-80 flex flex-wrap items-center justify-center" style={patternsBgImage}>
            <Button href="/products/knittingpatterns" fullWidth={false}>Opskrifter</Button>       
          </div>
          <div className="col-span-6 md:col-span-2 bg-cover bg-center min-h-80 flex flex-wrap items-center justify-center" style={yarnBgImage}>
            <Button href="/products/yarn">Garn</Button>
          </div>
        </section>

        <section className="grid grid-cols-6 gap-4">
          <article className="col-span-6 lg:col-span-3 lg:col-start-2 p-16">
            <h2 className="font-serif text-3xl lg:text-5xl mb-4">{data.content.text[2].heading}</h2>
            <p className="text-black-60">{data.content.text[2].text}</p>
          </article>
        </section>

        <section className="grid grid-cols-6 md:gap-4">
          <div className="col-span-6 md:col-span-2 bg-white p-16 md:p-8 flex flex-wrap content-center">
            {/* TODO: Use real content here */}
            <h2 className="font-serif text-3xl lg:text-5xl mb-4">Tilmeld nyhedsbrev</h2>
            <p className="text-black-60 mb-16">{data.content.text[2].text.slice(0, 99)}</p>
            <form className="w-full" onSubmit={handleSubmit}>
              <div className="w-full mb-16">
                <label htmlFor="newsletterEmail" className="block">Indtast din e-mail</label>
                <input type="email" id="newsletterEmail" autoComplete="email" className="block w-full p-2 bg-gray-input outline-none border border-solid border-gray-input transition focus:bg-white focus:outline-none focus:border-black" required/>
                <span className="text-black-40 text-sm mb-16">Vi benytter kun din e-mail til at sende dig gode tilbud og nyheder.</span>
              </div>
              <Button type="submit" href={false} fullWidth={true}>Tilmeld</Button>
            </form>
          </div>
          <div className="col-span-6 md:col-span-4 bg-cover bg-center min-h-80 flex flex-wrap items-center justify-center" style={knitBgImage}>
            <Button href="#">Lær at strikke</Button>
          </div>
        </section>

        <section className="grid grid-cols-6 gap-4">
        <article className="col-span-6 lg:col-span-3 lg:col-start-3 p-16">
            <h2 className="font-serif text-3xl lg:text-5xl mb-4">{data.content.text[4].heading}</h2>
            <p className="text-black-60">{data.content.text[4].text}</p>
          </article>
        </section>

        <section className="grid grid-cols-6 md:gap-4">
          <div className="col-span-6 md:col-span-2 bg-white p-16 md:p-8 flex flex-wrap content-center">
            {/* TODO: Use real content here */}
            <h2 className="font-serif text-3xl lg:text-5xl mb-4">Udvalgte produkter</h2>
            <p className="text-black-60 mb-4">{data.content.text[2].text.slice(0, 99)}</p>
            <h3 className="font-sans text-xl lg:text-2xl font-bold mb-4">Filtrer mellem udvalgte produkter</h3>
            <div className="flex items-center w-full mb-2">
              <input type="radio" id="yarnRadio" name="selectedProducts" value="yarn" checked></input>
              <label htmlFor="yarnRadio" className="pl-4 text-base">Garn</label>
            </div>
            <div className="flex items-center w-full">
              <input type="radio" id="knittingPatternsRadio" name="selectedProducts" value="knittingPatterns"></input>
              <label htmlFor="knittingPatternsRadio" className="pl-4 text-base">Strikkeopskrifter</label>
            </div>
          </div>
          <div className="col-span-1">

          </div>
        </section>

        <section className="grid grid-cols-6 gap-4">
          <h2 className="font-serif text-3xl lg:text-5xl m-16 mb-4 md:m-8 md:mb-4 col-span-6">Kunderne siger</h2>
          <div className="col-span-6 md:col-span-2 bg-white p-16 md:p-8">
            <h3 className="font-serif text-xl lg:text-3xl mb-4">Navn</h3>
            <p className="text-black-60">{data.content.text[2].text.slice(0, 99)}</p>
          </div>
          <div className="col-span-6 md:col-span-2 bg-white p-16 md:p-8">
            <h3 className="font-serif text-xl lg:text-3xl mb-4">Navn</h3>
            <p className="text-black-60">{data.content.text[2].text.slice(0, 99)}</p>
          </div>
          <div className="col-span-6 md:col-span-2 bg-white p-16 md:p-8">
            <h3 className="font-serif text-xl lg:text-3xl mb-4">Navn</h3>
            <p className="text-black-60">{data.content.text[2].text.slice(0, 99)}</p>
          </div>
        </section>

      </> )
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



