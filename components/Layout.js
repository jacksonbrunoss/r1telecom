import Head from "next/head"

import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({children}) {
  return (
    <>
      <Head>
      <link rel="icon" type="imagem/png" href="/favicon.ico" />
        <title>R1 Telecom | Entregando Qualidade.</title>
      </Head>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}