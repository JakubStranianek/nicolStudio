import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/seo"

const NotFoundPage = () => (
     <main className="relative min-h-screen flex items-center bg-[#F7F6F9]">
      <StaticImage src="../images/leaf-404.jpg" className="absolute w-fi h-full right-0 opacity-80" alt="error leaf"/>        
        <div className="relative mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8 z-20">
          <p className="text-base font-semibold leading-8 text-green-800">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-green-800 sm:text-5xl">Stránka sa nenašla</h1>
          <p className="mt-4 text-base text-gray-800 sm:mt-6">Ospravedlňujeme sa, nemôžeme nájsť požadovanú stránku.</p>
          <div className="mt-10 flex justify-center">
            <a href="#" className="text-sm font-semibold leading-7 text-green-800">
              <span aria-hidden="true">&larr;</span> Späť na domovskú stránku
            </a>
          </div>
        </div>
      </main>
)

export const Head = () => <Seo title="404: Not Found" />

export default NotFoundPage
