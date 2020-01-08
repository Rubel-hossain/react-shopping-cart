import React from "react";

const ProductsFilters = (props) => {

   return(
    <>
      <div className="row">
       <div className="col-md-4">
        <label>
        <select className="form-control" onChange={props.productsFilterByPrice}>
            <option value="">Sort By Price</option>
               <option value="lowest">price lowest to highest </option>
               <option value="heigher">price highest to lowest</option>
           </select>
        </label>
       </div>
       <div className="col-md-4">
       <label>
       <select className="form-control" value={props.productSize} onChange={props.productsFilterBySize}>
          <option value="">Sort By Size</option>
          <option value="m">M</option>
          <option value="l">L</option>
          <option value="x">X</option>
          <option value="xl">XL</option>
          <option value="xxl">XXL</option>
        </select>
       </label>
       </div>
       <div className="col-md-4">

       </div>
      </div>
    </>
   );
}

export default ProductsFilters;