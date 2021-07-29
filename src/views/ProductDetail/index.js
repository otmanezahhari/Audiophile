import { useSelector, useDispatch } from "react-redux";
import {useLocation ,Link} from "react-router-dom";
import { useState } from "react";

import {addProductToCart} from "services/redux/Actions";

import MayAlsoLike from "./MayAlsoLike";
import { titleFormat,formatPrice, scrollToTop} from "components/Healpers";
import "./details.scss";


function ProductDetail(){

  const AllProduct = useSelector(state => state.Allproducts.products);
  let location = useLocation();
  const GetState = location.state;
  const specificProduct = AllProduct.filter((elem)=>elem.id ===GetState)[0];
  const [quantity,setQuantity] = useState(1);
  const  dispatch = useDispatch();

  const updateQuantity = (add)=>{
    setQuantity(quantity+add);
  }
  if(quantity<1){
    setQuantity(1);
  }

  if(specificProduct){
    return(
   

      <div id="product-display">

        <div id="product-details">
          <div className="product-details-content container">
            <div className="link-go-back">
              <Link to={`/${specificProduct.category}`} className="link" onClick = {scrollToTop}>Go back</Link>
            </div>

            <div className="product-item flex center justify-content-between">
              <div className="box-img-product">
                <img src={`/Audiophile${specificProduct.features? specificProduct.image.desktop.slice(1) : ''}`} alt="" />
              </div>
              
              <div className="product-item-description">
                <div className="new-product overline">New product</div>
                <h1 className="title-product h2">{titleFormat(specificProduct.name)} <br/> {specificProduct.category}</h1>
                <p className="description-product p">
                  {specificProduct.description}
                </p>
                <div className="price-product">
                  $ {specificProduct.features? formatPrice(specificProduct.price):''}
                </div>
                <div className="quantity-item-product flex ">
                  <div className="quantity-box center">
                    <input className="quantity" value = {quantity}  />    
                    <div className="plus" onClick = {() => updateQuantity(+1)} >+</div>
                    <div className="minus" onClick = {() => updateQuantity(-1)} >-</div>
                  </div>
                  <button className="btn link-add-cart" onClick={()=>dispatch(addProductToCart(specificProduct,quantity))} >Add to cart</button>
                </div>
                
              </div>
            </div>

            <div className="features-product flex justify-content-between">
              <div className="product-features">
                <h2 className="h3 title-heading">Features</h2>
                <div className="description-features">
                    {specificProduct.features? specificProduct.features.split('\n').map( (str,index) => <p key={index} className='p'>{str}</p>) : '' }            
                </div>
              </div>

              <div className="in-the-box">
                <h2 className="title-heading h3">in the box</h2>
                <ul className="quantity-item-box">

                  {specificProduct.features?  specificProduct.includes.map((elem,index)=><li key={index} className = "p"><span>{elem.quantity + "x"}</span> {elem.item}</li>) : ''}
                
                </ul>
              </div>
            </div>

            <div className="box-img-product-category grid">
              <div className="grid-box-50">
                <img src={`/Audiophile${specificProduct.features? specificProduct.gallery.first.desktop.slice(1) : ''}`} alt={specificProduct.name} />
              </div>
              <div className="grid-box-50">
                <img src={`/Audiophile${specificProduct.features? specificProduct.gallery.second.desktop .slice(1) : ''}`}  alt={specificProduct.name} />
              </div>
              <div className="grid-box-100">
                <img src={`/Audiophile${specificProduct.features? specificProduct.gallery.third.desktop.slice(1) : ''}`}  alt={specificProduct.name} />
              </div>
            </div>

            <MayAlsoLike AllProduct={AllProduct} specificProduct={specificProduct}/>
         
         
          </div>
        </div>      
      </div>
 )
  }else{
    return ''
  }
      
} 

export default ProductDetail;