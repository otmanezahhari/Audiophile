import {Link } from "react-router-dom";
import "./hero.scss";
function Hero(props){
  return(
    <div className="hero container flex center">
      <div className="description">

        <span className = "overline">new product</span>
        <h1 className="h1">XX99 mark II headphones</h1>
        <p className="p">
          Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
        </p>
        <Link to={{ pathname: "/product-detail/xx99-mark-two-headphones" , state:4}} className="btn brown" >see product</Link>

      </div>
    </div>
  )
}

export default Hero;