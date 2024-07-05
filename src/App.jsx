import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar' 
import ProductCard from './components/ProductCard'
import ProductsContainer from './components/ProductsContainer'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ProductsContainer />
    </>
  )
}

export default App
