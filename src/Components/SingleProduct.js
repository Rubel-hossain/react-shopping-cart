import React from "react";
import { currencyFormat } from "../Helpers";
const SingleProduct = (props) => {
   const {products} = props;
   return (
    <>
     <div className="card">
      <img src={`/products/${products.sku}_2.jpg`} className="card-img-top product-img" alt={products.title}/>
       <div className="card-body">
        <h5 className="card-title">{products.title}</h5>
        <p className="card-text">{products.description}</p>
               <p><b>Price {currencyFormat(products.price)}</b></p>
        <a href="#" className="btn btn-primary">Add To Cart</a>
       </div>
      </div>
    </>
   )
}

export default SingleProduct;