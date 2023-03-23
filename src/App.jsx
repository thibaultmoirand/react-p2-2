import { useState } from 'react'
import './App.css'
import Liste_product from './liste_product.jsx'


const products = [
  {
    id: 1,
    name: 'sinple',
    href: '#',
    imageSrc: '/src/01.jpg',
    price: '45€',
    color: 'noir',
    categorie: 'TOP-VENTE',
  },
  {
    id: 2,
    name: 'sinple',
    href: '#',
    imageSrc: '/src/01.jpg',
    price: '37€',
    color: 'noir',
    categorie: 'TOP-VENTE',
  },
  {
    id: 3,
    name: 'sinple',
    href: '#',
    imageSrc: '/src/01.jpg',
    price: '75€',
    color: 'noir',
    categorie: 'TOP-VENTE',
  },
  {
    id: 4,
    name: 'sinple',
    href: '#',
    imageSrc: '/src/01.jpg',
    price: '34€',
    color: 'noir',
    categorie: 'TOP-VENTE',
  },
  {
    id: 5,
    name: 'sinple',
    href: '#',
    imageSrc: '/src/01.jpg',
    price: '455€',
    color: 'noir',
    categorie: 'TOP-VENTE',
  },
  {
    id: 6,
    name: 'sinple',
    href: '#',
    imageSrc: '/src/01.jpg',
    price: '35€',
    color: 'noir',
    categorie: 'TOP-VENTE',
  },
  {
    id: 7,
    name: 'sinple',
    href: '#',
    imageSrc: '/src/01.jpg',
    price: '85€',
    color: 'noir',
    categorie: 'TOP-VENTE',
  },
  {
    id: 8,
    name: 'sinple',
    href: '#',
    imageSrc: '/src/01.jpg',
    price: '39€',
    color: 'noir',
    categorie: 'TOP-VENTE',
  },
  
  
]

function App() {

  const [] = useState(0)
  return (
    
    <div className="bg-white">
      <div className="mt-6 grid grid-cols-1 gap-x-10 lg:grid-cols-3">

        <div className="w-full overflow-hidden rounded-md lg:h-80">
          <img
               src= '/src/01.jpg'
          />
          <a className='text-2xl font-bold text-gray-900'>test</a>
        </div>

        <div className="w-full overflow-hidden rounded-md lg:h-80">
          <img
            src= '/src/01.jpg'
          />
        </div>

        <div className="w-full overflow-hidden rounded-md lg:h-80">
        <img
          src= '/src/01.jpg'
        />
        </div>

      </div>
      
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">produit</h2>

    <Liste_product products={products}/>


  </div>
  )
}

export default App
