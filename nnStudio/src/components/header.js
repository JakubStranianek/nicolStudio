import * as React from "react"
import { Link } from "gatsby"

function Header ({ siteTitle }) {

  return (
   <div className="">  
      <div className="relative isolate overflow-hidden">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-800 to-white opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl w-10/12 py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-gray-200 hover:ring-white/20">
              Announcing our next round of funding.{' '}
              <Link href="#" className="font-semibold text-green-800">
                <span className="absolute inset-0" aria-hidden="true" />
                Read more <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight py-3 text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-green-200 sm:text-6xl sm:leading-tight">
            Vlasy sú vrcholom<br/> ženskej krásy
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-400">
            Koruna krásy, ktorá rozžiari tvoj svet. Zabudni na starosti s vlasmi a dodaj svojim vlasom
            prirodzenú krásu a lesk.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="#"
                className="rounded-md bg-green-800 no-underline px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-700"
              >
                O mne
              </Link>
              <Link href="#" className="text-sm font-semibold no-underline leading-6 text-green-800">
                Služby <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>       
      </div>
    </div>
    )
}

export default Header