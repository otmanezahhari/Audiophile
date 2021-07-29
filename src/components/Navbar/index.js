import {Link } from "react-router-dom";

import {scrollToTop, removeHidden} from "components/Healpers";
import Cart from "./Cart";
import Categories from "components/Categories";
import "./navbar.scss";




function Navbar(props) {



  const displayCart = () =>{
    document.querySelector("#cart").classList.toggle("visible");
    document.querySelector("body").classList.toggle("hidden");

  }





  const displayNavMobile  = () =>{
    document.querySelector("#nav-mobile").classList.toggle("display");
  }
 
  return (
    <nav>
      <Cart />
      <div className="navigation container flex justify-content-between">

        <div className="home-page-icon flex center">
          <div className="humburg-nav" onClick={displayNavMobile}>
            <a href="#" className="link">
              <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fillRule="evenodd"><path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z"/></g></svg>
            </a>
          </div>

          <Link to = "/Audiophile" className="logo" onClick={removeHidden}>
            <img src={"/Audiophile/assets/shared/desktop/logo.svg"} alt="audiophile"/>
          </Link>
        </div>

        <nav id="navbar">
          <ul className="navigation-link flex justify-content-between">
            <li><Link to="/Audiophile" className="link" onClick={removeHidden}>Home</Link></li>
            <li><Link to="/headphones" className="link" onClick={scrollToTop,removeHidden} >Headphones</Link></li>
            <li><Link to="/speakers" className="link" onClick={scrollToTop,removeHidden}>Speakers</Link></li>
            <li><Link to="/earphones" className="link" onClick={scrollToTop, removeHidden}>Earphones</Link></li>
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


export default Navbar;