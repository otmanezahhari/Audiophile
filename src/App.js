import {useState,useEffect} from 'react';
import Home from "./components/Home";
import Headphones from "./components/Headphones";
import Speakers from "./components/Speakers";
import Earphones from "./components/Earphones";
import ProductDetail from "./components/ProductDetail";
import Checkout from "./components/Checkout";
import "./styles/styles.scss";
import {BrowserRouter, Switch, Route, useHistory } from "react-router-dom";
import ProductApi from "./api/product";


function App() {


  const [data, SetData] = useState([]);
  const [categoryProduct, SetCategroryProducts]     = useState([]);
  const [productDescription, SetProductDiscription] = useState([]);
  const [cartProduct, SetCartProduct]               = useState([]);
  
 

  useEffect(() => {
    ProductApi.getAll()
    .then(data => SetData(data));
  }, [])

 



  const updateCategory = (category) =>{
    const NewCategories = data.filter((elem) => elem.category === category).reverse();
    SetCategroryProducts(NewCategories);
    document.querySelector("body").classList = '';
  }

  const displayProductDiscription = (slug) =>{
    const NewProduct = data.filter((elem) => elem.slug === slug)[0];
    SetProductDiscription(NewProduct);
    
  }

  const addproductToCart = (product,count) =>{
    const newProduct = [...cartProduct];
    
    const existOrNot =  newProduct.filter(elem => elem.product.id ===product.id)
    
    if(existOrNot.length === 0){
      
      const newProductCart={
        product,
        count
      }
      newProduct.push(newProductCart);
      SetCartProduct(newProduct);
    }else{
      existOrNot[0].count = count;
      const NewArray =  newProduct.filter(elem => elem.product.id !==product.id);  
      
      const newProductCart={
        product:existOrNot[0].product,
        count :existOrNot[0].count
      }
      NewArray.push(newProductCart)
      SetCartProduct(NewArray);
    }

  }

  const removeAll = ()=>{
    SetCartProduct([])
  }

  return (
    
    <BrowserRouter>
        
        
        <Switch>
          <Route path="/Audiophile" exact>   

             <Home removeAll={removeAll} Category = {updateCategory} cartProduct={cartProduct} display = {displayProductDiscription} />

          </Route>
          <Route path="/product-detail/:elemName" exact>

              <ProductDetail removeAll={removeAll} cartProduct={cartProduct}  product={productDescription} Category = {updateCategory} display = {displayProductDiscription} addCart = {addproductToCart} />

          </Route>

          <Route path="/headphones" exact>
            
              <Headphones removeAll={removeAll} cartProduct={cartProduct} display = {displayProductDiscription} ProductList ={categoryProduct}  Category = {updateCategory} />
            
          </Route>

          <Route path="/speakers" exact>
            
              <Speakers removeAll={removeAll} cartProduct={cartProduct}  display = {displayProductDiscription} ProductList ={categoryProduct}    Category = {updateCategory} />
                      
          </Route>

          <Route path="/earphones" exact>

              <Earphones removeAll={removeAll} cartProduct={cartProduct} display = {displayProductDiscription} ProductList ={categoryProduct}   Category = {updateCategory} />
          
          </Route>
          <Route path="/checkout" exact>

              <Checkout removeAll={removeAll} cartProduct={cartProduct}  Category = {updateCategory} display = {displayProductDiscription}/>

          </Route>
          <Route path="/Thanks" exact>

              <Checkout removeAll={removeAll} cartProduct={cartProduct}  Category = {updateCategory} display = {displayProductDiscription}/>

          </Route>
          
          

        </Switch>
    </BrowserRouter>
    
          
  );
}

export default App;
