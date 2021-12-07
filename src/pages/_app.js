import '/src/styles/globals.css'
import "tailwindcss/tailwind.css"
import Footer from "../Globals/Footer";
import Header from "../Globals/Header";

function MyApp({ Component, pageProps }) {
  return (
    <>
       <Header/>
        <div className="bg-background">
            <div className="max-w-screen-2xl mx-auto grid grid-cols-6 gap-4">
                <Component {...pageProps} />
            </div>
        </div>

      <Footer/>
    </>
)


}

export default MyApp
