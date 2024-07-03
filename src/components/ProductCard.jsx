import React from "react";

const ProductCard = ({product}) => {
    // Logic goes here
    return (
        <>
        <div className="card">
  <img className="card-img-top"src={product.images[0]}  alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title">{product.title}</h5>
    <h5 className="dollars"> $ {product.price}</h5>
    <p className="card-text">{product.description}</p>
    <a href="#" className="btn btn-primary" style={{ backgroundColor: '#9B0FDB', padding: '15px' }}>Add to Shopping Cart</a>
  </div>
</div>
        </>
    )
}

export default ProductCard