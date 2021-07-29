import {useEffect} from 'react';
import {BrowserRouter, Switch, Route } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getDataFromDB} from "services/redux/Actions";

import Navbar from "components/Navbar";
import Home from "./Home";
import RenderCategory from './CategoryPage';
import ProductDetail from "views/ProductDetail";
import Checkout from "./Checkout";
import Categories from "components/Categories";
import About from 'components/About';
import Footer from 'components/Footer';

import ProductApi from "services/api/product.js";


function App() {

  const  dispatch = useDispatch();


  useEffect(() => {
    window.scrollTo(0, 0)

    async function fetchData(){

      const request = await ProductApi.getAll()
       .catch((err)=>{
         console.log('Err', err);
       });
       dispatch(getDataFromDB(request));
     }
     fetchData();
  }, [])

  return (
    
    <BrowserRouter>
        
        <Navbar   />
        <Switch>

          <Route path="/Audiophile" exact>   
             <Home />
             <About/>
          </Route>

          <Route path="/checkout" exact>
              <Checkout />
          </Route>

          <Route path="/:id" exact>
              <RenderCategory/>
              <Categories/>
              <About/>
          </Route>

          <Route path="/product-detail/:elemName" exact>
              <ProductDetail  />
              <Categories/>
              <About/>
          </Route>
   
        </Switch>

        
        <Footer/>
    </BrowserRouter>
    
          
  );
}

export default App;
