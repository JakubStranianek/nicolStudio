import React from 'react'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from 'gatsby'

const products = [
    {
      id: 1,
      name: 'Brazílsky keratín',
      href: 'brazilsky-keratin',
      price: 'od 35 €',
      imageName: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Jahodový & kokosový vlasový botox',
      href: 'vlasovy-botox',
      price: 'od 35 €',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-02.jpg',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Hĺbková rekonštrukcia vlasov',
      href: 'rekonstrukcia-vlasov',
      price: 'od 30 €',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-03.jpg',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'Split - Ender PRO ošetrenie',
      href: 'split-ender',
      price: 'od 23 €',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Balíček LUX',
      href: 'baliček-lux',
      price: 'od 25 €',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 6,
      name: 'Nanoplastia',
      href: 'nanoplastia',
      price: 'od 50 €',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 7,
      name: 'Bomby do kúpeľa',
      href: 'bomby-do-kupela',
      price: 'od 3.30 €',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-04.jpg',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
  ]

export default function Services() {   
    const data = useStaticQuery(graphql`
      query {
      allFile(filter: { relativeDirectory: { eq: "services" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData (
              width: 280,
              height: 320
            )
          }
        }
      }
      }
    `)

    const images = data.allFile.nodes;

  return (
    <div className="bg-white"> 
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <p className="text-base font-semibold leading-7 text-green-800">Postaráme sa o vás</p>
          <h2 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Ponuka naších služieb</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Svojou odbornosťou sa zameriavam na techniky, ako je brazilský keratín, 
          jahodový a kokosový vlasový botox a hlboká rekonštrukcia vlasov. 
          S precíznym detailom a láskou k vlasom, sa snažím priniesť vašim vlasom nový život, lesk a vitalitu.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => {
            const imageFind = images.find((img) => img.name.includes(product.href));
            return (
              <a key={product.id} href={product.href} className="group">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">                
                <GatsbyImage image={getImage(imageFind)} alt={product.imageAlt} className="h-full w-full object-cover object-center group-hover:opacity-75" />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
            </a>
           )
          })}
        </div>
      </div>
    </div>
  )
}