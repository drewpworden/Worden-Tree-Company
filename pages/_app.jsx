//Import Packages
import Head from "next/head"

//Import Components
import Header from "components/header"

//Import Styles
import "styles/pages/_app.css"

//App Component
export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Worden Tree Company</title>
                <link
                    rel="icon"
                    href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌳</text></svg>"
                ></link>
            </Head>
            <Header/>
            <Component {...pageProps} />
        </>
    )
}
