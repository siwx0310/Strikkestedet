import '/src/styles/globals.css'
import "tailwindcss/tailwind.css"
import '/src/styles/app.css'
import Footer from "../Globals/Footer";
import Header from "../Globals/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header/>
      <main className="2xl:container mx-auto bg-background">
        <Component {...pageProps} />
      </main>
      <Footer/>
    </>
)


}

export default MyApp
