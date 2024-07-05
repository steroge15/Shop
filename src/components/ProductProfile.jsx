import React from "react";
import NavBar from "./NavBar";
import {useLocation} from "react-router-dom"

const ProductProfile = () => {
    const location = useLocation()
    const product = location.state
    // Logic goes here

    return (
        <>
        <NavBar/>
        <div className="card">
            <img src={product.images} alt="" />
            <h1 style={{color: '#0e27c7'}}>{product.title}</h1>
            <h2 style={{color: '#0ec73f'}}>PRICE: {product.price}</h2>
            <h3 style={{color: '#9c0ec7'}}>IN STOCK: {product.stock}</h3>
            <h1 style={{color: '#2f464d'}}>AVAILABILITY: {product.availabilityStatus}</h1>
            <h4 style={{color: '#bd112e'}}>{product.description}</h4>
        </div>
        </>
    )
}

export default ProductProfile