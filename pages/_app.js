import Head from "next/head"
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/app.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>MyFx Assessment</title>
        <meta name="description" content="This is MyFx Assessment" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
