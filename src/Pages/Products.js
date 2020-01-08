import React from "react";
import SingleProduct from "../Components/SingleProduct";
const Products = (props) => {

  return(
   <>
     <div className="col-md-4 my-3">
        <SingleProduct products={props.productsInfo} />
     </div>
   </>
  );
}

export default Products;