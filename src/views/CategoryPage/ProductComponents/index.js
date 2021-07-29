import "./productcomponents.scss";
import {titleFormat, scrollToTop} from "components/Healpers";
import {Link } from "react-router-dom";

function ProductComponenet(props){
  return(
    <div className="product-component">
        <div className="content-product container flex center justify-content-between">
          <div className="image-product-box">
            <img src={`/Audiophile/${props.image}`} alt="" />
          </div>
          <div className={ "description-product " + props.order }>
            <h3  style ={{order : props.order,display : props.new === true ? "block":"none"}} className="  new-product overline">New product</h3>
            <h2 className=" h2 title-product">{titleFormat(props.title)} <br/> {props.elem.category} </h2>
            <p className="p short-description">
              {props.shortDescription}
            </p>
            <Link to ={{pathname:`/product-detail/${props.elem.slug}` , state :props.id}} className="btn brown" onClick={scrollToTop} >see product</Link>
          </div>
        </div>
    </div>
  )
}

export default ProductComponenet;
