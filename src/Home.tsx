import { useState, useContext } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import { ProductsContext } from './context/productsContext'






function Home() {
  const {products} = useContext(ProductsContext)


  return (
    <>
      <h1>Welcome home. We have {products?.length} products</h1>
    </>
  )
}

export default Home
