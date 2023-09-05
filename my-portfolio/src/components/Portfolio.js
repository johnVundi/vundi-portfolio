
import React from 'react'
import carSearch from "../assets/portfolio/carSearch.png"
import barberShop from "../assets/portfolio/barberShop .jpg"
import vundiSocial from "../assets/portfolio/vundiSocial.png"
import cart from "../assets/portfolio/cart.png"
import reactSmooth from "../assets/portfolio/reactSmooth.jpg"
import ramenRater from "../assets/portfolio/ramenRater.jpg"
function Portfolio() {
    const portfolios = [
        {
            id: 1,
            src: carSearch,
            href:"https://cars-project-sigma.vercel.app/"
        },
        {
            id: 2,
            src: barberShop,
            href:"https://github.com/Adisia2/barber-shop"
        },
        {
            id: 3,
            src: vundiSocial,
            href:"https://vundi-social.vercel.app/"
        },
        {
            id: 4,
            src: cart,
            href:"https://cart-6gxp.vercel.app/"
        },
        {
            id: 5,
            src: reactSmooth,
            href:"https://github.com/Adisia2/react-hooks-react-router-code-along"
        },
        {
            id: 6,
            src: ramenRater,
            href:"https://github.com/Adisia2/phase-1-mock-cc-ramen-rater"
        },
    ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-700 text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
            <p className="py-6">Check out some of my work</p>
        </div>

           

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-12 sm:px-0">
        {
           portfolios.map(({id, src, href })=>(
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
            <img src={src}
             alt=""
             className="rounde-md duration-200 hover:scale-105"/>
            <div className="flex items-center justify-center">
            <a   href={href}
            className="flex justify-center items-center w-full text-white"
            ><button className="w-1/2 px-6 py-3 m-4 rounded-md duration-200 hover:scale-105 bg-gradient-to-r from-cyan-500 to-blue-500">check out</button></a>
           
            </div>
            </div>
           ))
           
           } 
            
        </div>
      </div>
    </div>
  )
}

export default Portfolio
