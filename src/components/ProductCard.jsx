import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({product, index}) => {
    // Logic goes here

    return (
        <>
        <div className="col-md-3 card" style={{ width: '18rem', margin:'5px'}} key={index}>
  <img className="card-img-top"src={product.images[0]}  alt="Card image cap"/>
  <div className="card-body">
    <h5 className="card-title" style={{color: '#0e27c7'}}>{product.title}</h5>
    <h5 className="dollars" style={{color: '#0ec73f'}}> $ {product.price}</h5>
    <p className="card-text" style={{color: '#bd112e'}}>{product.description}</p>
    <Link to="/productprofile" state={product} className="btn btn-primary" style={{ backgroundColor: '#9B0FDB', padding: '15px' }}>View</Link>
  </div>
</div>
        </>
    )
}

export default ProductCard