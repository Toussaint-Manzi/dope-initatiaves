import '@/styles/globals.css'
import Head from '../components/Head'
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
