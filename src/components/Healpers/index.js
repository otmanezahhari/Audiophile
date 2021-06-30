import "./helpers.scss";
import Cart from "../Cart";
import {Link } from "react-router-dom";

export function ActiveDropDown(props){
  return (
    <div className="heading-drop-dow-active center" >

        <h1 className="h2 heading">{props.title}</h1>
   
    </div>
  )
}


export function ProductComponenet(props){
  const titleFormat = ()=>{
    const newArray = props.title.split(' ');
    const newArraym = newArray.slice(0,newArray.length-1).join(' ');
    return newArraym;
  }
  return(
    <div className="product-component">
        <div className="content-product container flex center justify-content-between">
          <div className="image-product-box">
            <img src={`/Audiophile/${props.image}`} alt="" />
          </div>
          <div className={ "description-product " + props.order }>
            <h3  style ={{order : props.order,display : props.new === true ? "block":"none"}} className="  new-product overline">New product</h3>
            <h2 className=" h2 title-product">{titleFormat()} <br/> {props.elem.category} </h2>
            <p className="p short-description">
              {props.shortDescription}
            </p>
            <Link to ={`/product-detail/${props.elem.slug}`} className="btn brown" onClick = {() => props.display(props.elem.slug)} >see product</Link>
          </div>
        </div>
    </div>
  )
}


export function Navbar(props) {
  const displayCart = () =>{
    document.querySelector("#cart").classList.toggle("visible");
    document.querySelector("body").classList.toggle("hidden");
  }

  const removeHidden = ()=>{
    document.querySelector("body").classList="";
    document.querySelector("#cart").classList = "";
  }

  const displayNavMobile  = () =>{
    document.querySelector("#nav-mobile").classList.toggle("display");
  }
 
  return (
    <nav>
      <Cart removeAll={props.removeAll} FormatName={props.FormatName} cartProduct={props.cartProduct} productQuantity={props.productQuantity}/>
      <div className="navigation container flex justify-content-between">

        <div className="home-page-icon flex center">
          <div className="humburg-nav" onClick={displayNavMobile}>
            <a href="#" className="link">
              <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/></g></svg>
            </a>
          </div>

          <Link to = "/Audiophile" className="logo" onClick={removeHidden}>
            <img src={"/Audiophile/assets/shared/desktop/logo.svg"} alt="audiophile" width = "165"/>
          </Link>
        </div>

        <nav id="navbar">
          <ul className="navigation-link flex justify-content-between">
            <li><Link to="/Audiophile" className="link" onClick={removeHidden}>Home</Link></li>
            <li><Link to="/headphones" className="link" onClick={()=> props.Category('headphones')}>Headphones</Link></li>
            <li><Link to="/speakers" className="link" onClick={()=> props.Category('speakers')}>Speakers</Link></li>
            <li><Link to="/earphones" className="link" onClick={()=> props.Category('earphones')}>Earphones</Link></li>
          </ul>
        </nav>
        <div id="nav-mobile">
          <Categories Category = {props.Category}/>
        </div>

        <div className="chart" onClick = {displayCart}>
          <img src={"/Audiophile/assets/shared/desktop/icon-cart.svg"} alt="cart" width="24"/>
        </div>
        </div>
    </nav>
  )
}

export function About(){
  return(
    <div id="about-us">
      <div className="container flex justify-content-between about-us-box center">
       <div className="box-description-about-us">
         <h2 className="about-us-heading h2" >
           Bringing you the <span>best</span> audio gear
         </h2>
         <p className = "about-us-description">
           Located at the heart of New York City, 
           Audiophile is the premier store for high end headphones, 
           earphones, speakers, and audio accessories. We have a large 
           showroom and luxury demonstration rooms available for you to 
           browse and experience a wide range of our products. Stop by our 
           store to meet some of the fantastic people who make Audiophile 
           the best place to buy your portable audio equipment.
         </p>
       </div>
 
       <div className="box-img-about-us">
         <img src = {"/Audiophile/assets/shared/desktop/image-best-gear.jpg"} alt="" />
       </div>
      </div>
    </div>
  )
 }


export function Categories(props){
  const ItemCategorie = () =>{
    const Items = [
      {
        name :'headphones',
        height : 160,
        width : 123
      },
      {
        name :'speakers',
        height : 146,
        width : 122
      },
      {
        name :'earphones',
        height : 126,
        width : 125
      },
  ]


  return(
    Items.map((elem,index) => {
      return(
        <Link key={index} to = {`/${elem.name}`} onClick={()=> props.Category(elem.name)} className="categorie-item">
            <div className={`box-img-categorie ${elem.name}`}>
              <img src={"/Audiophile/assets/shared/desktop/image-" + elem.name + ".png"} alt={elem.name} width= {elem.width} height = {elem.height} />
            </div>
            <div className="description-categorie">
              <h6 className ="cart-title" > {elem.name}</h6>
              <div  className="link-categorie center">
                <p className="shop">shop</p>
                <img src={"/Audiophile/assets/shared/desktop/icon-arrow-right.svg"} alt="shop" />
              </div>
            </div>
        </Link>
      )
    })
  )
  
  }
  
  return(
    <div id ="categories">
      <div className="categorie-items flex center container justify-content-between">
        <ItemCategorie/>
      </div> 
    </div>
  )
}

export function Footer(props){
  return(
    <div id="footer">
      <div className="container ">
        <div className="top-footer flex justify-content-between">
            <div className="logo-brand">
              <img src={"/Audiophile/assets/shared/desktop/logo.svg"} alt="audiophile" width = "165" />
            </div>   
            <ul className="navigaltion-link flex justify-content-between">
              <li><Link   className = "link-footer" to="/Audiophile">Home</Link></li>
              <li><Link onClick={()=> props.Category('headphones')} className = "link-footer" to="/headphones">Headphones</Link></li>
              <li><Link onClick={()=> props.Category('speakers')} className = "link-footer" to="/speakers">Speakers</Link></li>
              <li><Link onClick={()=> props.Category('earphones')} className = "link-footer" to="/earphones">Earphones</Link></li>
            </ul>

        </div>

        <div className="bottom-footer flex justify-content-between">
          <p className="about-us p">
            Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. 
            Come and visit our demo facility - we’re open 7 days a week.
          </p>
          <div className="social-media flex justify-content-between">
            <a href="#" className="facebook media-link">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z" fill="#FFF" fill-rule="nonzero"/></svg>
            </a>
            <a href="#" className="twitter media-link">
              <svg width="24" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M24 2.557a9.83 9.83 0 01-2.828.775A4.932 4.932 0 0023.337.608a9.864 9.864 0 01-3.127 1.195A4.916 4.916 0 0016.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 011.671 1.149a4.93 4.93 0 001.523 6.574 4.903 4.903 0 01-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 01-2.224.084 4.928 4.928 0 004.6 3.419A9.9 9.9 0 010 17.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0024 2.557z" fill="#FFF" fill-rule="nonzero"/></svg>
            </a>
            <a href="#" className="instagram media-link">
              <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="#FFF" fill-rule="nonzero"/></svg>
            </a>
          </div>

          <p className="copyright">
            Copyright 2021. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  )
}

export function Hero(props){
  return(
    <div className="hero container flex center">
      <div className="description">

        <span className = "overline">new product</span>
        <h1 className="h1">XX99 mark II headphones</h1>
        <p className="p">
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </p>
        <Link to={"/product-detail/xx99-mark-two-headphones"} className="btn brown" onClick = {()=>props.display("xx99-mark-two-headphones")}>see product</Link>

      </div>
    </div>
  )
}

/*----------- Home Products -------------*/
export function PremiumSpeaker(props){
  return(
    <div id="premium-speaker">
      <div className="box-premium-speaker container center justify-content-around">
          <div className="box-img">
            {/* <ImageSrc image = "./assets/home/desktop/image-speaker-zx9.png" /> */}
            <img src={"/Audiophile/assets/home/desktop/image-speaker-zx9.png"} alt="" />
          </div>
          <div className="information-premium-speaker">
            <h2 className="h1 heading-pemium-speaker">ZX9 speaker</h2>
            <p className=" p description-premium-speaker">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <Link to = "/product-detail/zx9-speaker" className='btn black ' onClick = {()=>props.display("xx99-mark-two-headphones")} >See product</Link>
          </div>
          <div className="box-pattern">
            <img src={"/Audiophile/assets/home/desktop/pattern-circles.svg"} alt="patern circle" />
          </div>
      </div>
    </div>
  )
}

export function Speaker(props){
  return(
    <div id="speaker">
      <div className="box-speaker container center justify-content-around">
          
          <img src = {"/Audiophile/assets/home/desktop/image-speaker-zx7.jpg"}  alt="speaker zx7" />

          <div className="information-speaker">
            <h3 className="h3 heading-speaker">ZX7 speaker</h3>
            <Link to = "/product-detail/zx9-speaker" className='btn transparent' onClick = {()=>props.display("xx99-mark-two-headphones")}>See product</Link>        
          </div>

      </div>
    </div>
  )
}


export function EarphonesHome(props){
  return(
    <div id="earphones-home" >
      <div className="content container flex justify-content-between center">
        <div className="box-image-earning">
          <img src={"/Audiophile/assets/home/desktop/image-earphones-yx1.jpg"} alt="earphones" />
        </div>
        <div className="description-earning-proudct center">
            <div className="box-center">
              <h1 className="h3 title">yx1 earphones</h1>
              <Link to = "/product-detail/yx1-earphones" className='btn transparent' onClick = {()=>props.display("xx99-mark-two-headphones")}>See product</Link>
            </div>
        </div>
      </div>
    </div>
  )

}