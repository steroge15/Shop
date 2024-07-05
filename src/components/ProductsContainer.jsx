import React, {useState, useEffect} from "react";
import ProductCard from "./ProductCard";
import NavBar from "./NavBar";

const ProductsContainer = () => {
    // Logic gies here
    // Have an array to store our products - useState
    const [products, setProducts] = useState([])
    
    // useEffect -> Queries data as we load
    useEffect(() => {
        fetch("https://dummyjson.com/products").then((response)=>{
            response.json().then((resp)=>{
                console.log(resp)
                setProducts(resp.products)
            })
        }).catch((err)=>{
            console.log(err)
        })

    }, [])

    return (
        <>
        <NavBar/>
        <div className="container">
            <h1>BUY NOW</h1>
            <div className="row justify-content-around">
                {
                    products.map((prod, index)=>{
                        return(
                            <div className="col-md-3 mb-4" key={index}>
                   <ProductCard  product = {prod}/>
                </div>
                        )
                    })
                }

            </div>

        </div>
        </>
    )
}

export default ProductsContainer