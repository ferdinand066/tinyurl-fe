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
      <div className="h-screen overflow-auto bg-white">
        <div className="relative flex flex-col justify-between h-full">
          <div>
            <Navbar />
            <div className='flex-1'>
              {children}
            </div>
          </div>
          <Footer />
        </div>
      </div>

    </>
  )
}
