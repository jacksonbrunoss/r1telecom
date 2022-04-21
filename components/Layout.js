import Head from "next/head"

import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({children}) {
  return (
    <>
      <Head>
        <link rel="shotcut icon" href="../public/favicon.ico" />
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