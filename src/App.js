import React,{useState,useEffect,useRef} from 'react';
import './App.css';
import Products from "./Pages/Products";
import ProductsFilters from "./Components/ProductsFilters";
function App() {
  
  const [productsData, setProductsData] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState(false);
  const [productSize, setProductsSize] = useState("");
  const productSizeRef = useRef("");
  productSizeRef.current = productSize;
  const getData = () =>{
    const products_db_url = "http://localhost:8080/products/";
    const products_data = fetch(products_db_url).then(res => res.json())
      .catch(err => fetch('db.json').then(res => res.json()).then(data => data.products))
      .then(data => {
        setProductsData({ filterProducts: data })
      });
  }

  useEffect(()=>{
    getData()
  }, []);

  const productsFilterByPrice = (e) => {
   
    const value = e.target.value;
      if(value !== ""){
        const filtersProducts = productsData.filterProducts.sort((a, b) => value === 'lowest' ? (a.price > b.price ? 1 : -1) : (a.price < b.price ? 1 : -1 ));
        setSelectedPrice(value);
      }else {
        return getData();
      }
  }

  const productsFilterBySize = (e) => {

    const value = e.target.value;
    setProductsSize(value);
    
   
    let filterProducts = productsData.filterProducts.filter(products => products.availableSizes.indexOf(value.toUpperCase()) >=0 );
     
      setProductsData({ filterProducts: filterProducts });
      
      setProductsSize(value);
      console.log("inner " + productSizeRef.current);
    
  }
  console.log("Outer " + productSizeRef.current);

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-2">
            <h2>Shopping Cart Application</h2>
          </div>
        </div>
        <ProductsFilters productsFilterByPrice={productsFilterByPrice} productsFilterBySize={productsFilterBySize}/>
        <div className="row">
          {console.log()}
          {productsData.filterProducts ? productsData.filterProducts.map(productsInfo=>(
              <Products key={productsInfo.id} productsInfo={productsInfo} />
            )) : "No Products Found"}
        
        </div>
      </div>
    </div>
  );
}

export default App;
