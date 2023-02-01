import Head from 'next/head'
import { ReactNode } from 'react'
import Footer from './_footer'
import Navbar from './_navbar'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Head>
        <title>Fege Shortener</title>
        <meta name="description" content="Easily make your link shorter" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white">
        <div className="relative overflow-hidden">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </div>

    </>
  )
}
