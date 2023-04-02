import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Liste_product from './liste_product.jsx'


const products = [
  {
    id: 1,
    name: 'sinple',
    href: '/test',
    imageSrc: '/src/01.jpg',
    price: '45€',
    color: 'noir',
     
  },
  {
    id: 2,
    name: 'sinple',
    href: '#',
    imageSrc: '/src/01.jpg',
    price: '37€',
    color: 'noir',
     
  },
  {
    id: 3,
    name: 'sinple',
    href: '#',
    imageSrc: '/src/01.jpg',
    price: '75€',
    color: 'noir',
     
  },
  {
    id: 4,
    name: 'sinple',
    href: '#',
    imageSrc: '/src/01.jpg',
    price: '34€',
    color: 'noir',
     
  },
  {
    id: 5,
    name: 'sinple',
    href: '#',
    imageSrc: '/src/01.jpg',
    price: '455€',
    color: 'noir',
     
  },
  {
    id: 6,
    name: 'sinple',
    href: '#',
    imageSrc: '/src/01.jpg',
    price: '35€',
    color: 'noir',
     
  },
  {
    id: 7,
    name: 'sinple',
    href: '#',
    imageSrc: '/src/01.jpg',
    price: '85€',
    color: 'noir',
     
  },
  {
    id: 8,
    name: 'sinple',
    href: '#',
    imageSrc: '/src/01.jpg',
    price: '39€',
    color: 'noir',
     
  },
  
  
]
// pour faire le switch entre les page en fonction du lien
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/test',
    element: <Liste_product products={products}/>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)