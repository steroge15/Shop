import React, {useState, useEffect} from "react";
import ProductCard from "./ProductCard";

const ProductsContainer = () => {
    // Logic gies here
    // Have an array to store our products - useState
    const [products, setProducts] = useState([])
    
    // useEffect -> Queries data as we load
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products").then((response)=>{
            response.json().then((resp)=>{
                console.log(resp)
                setProducts(resp)
            })
        }).catch((err)=>{
            console.log(err)
        })

    }, [])

    return (
        <>
        <div className="container">
            <h1>BUY NOW</h1>
            <div className="row justify-content-around">
                {/* <div className="col-md-3">
                   <ProductCard />
                </div>
                <div className="col-md-3">
                   <ProductCard />
                </div>
                <div className="col-md-3">
                   <ProductCard />
                </div> */}
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