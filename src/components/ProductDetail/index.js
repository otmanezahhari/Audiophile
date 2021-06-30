import {Navbar, Categories, About, Footer} from "../Healpers";
import "./details.scss";
import {Link} from "react-router-dom";
import {useState} from "react";
import Cart from "../Cart";

function ProductDetail(props){
  const {product} = props;
  const newlocation = window.location.href.split('/');
  const [count, SetCount] = useState(1);

  
  
  window.onload = ()=>{
    props.display(newlocation[newlocation.length - 1])
  }

  const addQuantity = (elem) => {   
     
        if ( count > 0){
          SetCount(count + elem)
        
        }else{
          SetCount(1)
        }  
  }
  
  const formatPrice = (price) =>{
    if(price){
      const NewPrice = price.toString();
      if(NewPrice.length>3){
        return NewPrice[0]+','+ NewPrice.slice(1)
      }else{
          return price;
      }  
    }
  }
  
  const titleFormat = (title)=>{
    if(title){
      
      const newArray = title.split(' ');
      const newArraym = newArray.slice(0,newArray.length-1).join(' ');
      return newArraym;
    }else{
      return '';
    }
    
  }

       
  return(
   
      
      <div id="product-display">
        <Cart removeAll={props.removeAll} addCart = {props.addCart} productQuantity={props.productQuantity} cartProduct={props.cartProduct} />
        <Navbar productQuantity={props.productQuantity} cartProduct={props.cartProduct} Category = {props.Category}/>


        <div id="product-details">
          <div className="product-details-content container">
            <div className="link-go-back">
              <Link to={`/${product.category}`} className="link" onClick = {()=> props.Category(product.category)}>Go back</Link>
            </div>

            <div className="product-item flex center justify-content-between">
              <div className="box-img-product">
                <img src={`/Audiophile${product.features? product.image.desktop.slice(1) : ''}`} alt="" />
              </div>
              
              <div className="product-item-description">
                <div className="new-product overline">New product</div>
                <h1 className="title-product h2">{titleFormat(product.name)} <br/> {product.category}</h1>
                <p className="description-product p">
                  {product.description}
                </p>
                <div className="price-product">
                  $ {formatPrice(product.price)}
                </div>
                <div className="quantity-item-product flex ">
                  <div className="quantity-box center">
                    <input className="quantity" value = {count > 0 ? count : 1}/>    
                    <div className="plus" onClick = {() => addQuantity(+1)} >+</div>
                    <div className="minus" onClick = {() => addQuantity(-1)} >-</div>
                  </div>
                  <button className="btn link-add-cart" onClick={()=>props.addCart(product,count)} >Add to cart</button>
                </div>
                
              </div>
            </div>

            <div className="features-product flex justify-content-between">
              <div className="product-features">
                <h2 className="h3 title-heading">Features</h2>
                <div className="description-features">
                    {product.features? product.features.split('\n').map( str => <p className='p'>{str}</p>) : '' }            
                </div>
              </div>

              <div className="in-the-box">
                <h2 className="title-heading h3">in the box</h2>
                <ul className="quantity-item-box">

                  {product.features?  product.includes.map((elem,index)=><li key={index} className = "p"><span>{elem.quantity + "x"}</span> {elem.item}</li>) : ''}
                
                </ul>
              </div>
            </div>

            <div className="box-img-product-category grid">
              <div className="grid-box-50">
                <img src={`/Audiophile${product.features? product.gallery.first.desktop.slice(1) : ''}`} alt={product.name} />
              </div>
              <div className="grid-box-50">
                <img src={`/Audiophile${product.features? product.gallery.second.desktop .slice(1) : ''}`}  alt={product.name} />
              </div>
              <div className="grid-box-100">
                <img src={`/Audiophile${product.features? product.gallery.third.desktop.slice(1) : ''}`}  alt={product.name} />
              </div>
            </div>

            <div className="you-also-like">
              <h3 className = "h3">you may also like</h3>
              <div className="product-suggestion">
                <div className="box-products flex justify-content-between">
                  
                  {product.features? product.others.map((elem,index)=>{
                    return(
                      <div key={index} className="product">
                        <div className="box-img-product">
                          <img src={`/Audiophile${elem.image.desktop.slice(1)}`} alt={elem.name} />
                        </div>
                        <div className="description-product">
                          <div className="title">{elem.name}</div>
                          <Link to={`/${elem.slug}`} className="btn link-see-product" onClick = {() => props.display(elem.slug) }>See product</Link>
                        </div>
                        
                      </div>
                    )
                  }) : ''}

                </div>
              </div>
            </div>
          </div>
        </div>
        
        
        <Categories Category = {props.Category}/>
        <About />
        <Footer Category = {props.Category}/>
      </div>
 )
      
} 

export default ProductDetail;