import {Link } from "react-router-dom";
import {scrollToTop} from "components/Healpers";
import "./earphoneshome.scss";


function EarphonesHome(props){
  return(
    <div id="earphones-home" >
      <div className="content container flex justify-content-between center">
        <div className="box-image-earning">
          <img src={"/Audiophile/assets/home/desktop/image-earphones-yx1.jpg"} alt="earphones" />
        </div>
        <div className="description-earning-proudct center">
            <div className="box-center">
              <h1 className="h3 title">yx1 earphones</h1>
              <Link to = {{pathname : "/product-detail/yx1-earphones", state : 1}} className='btn transparent' onClick={scrollToTop} >See product</Link>
            </div>
        </div>
      </div>
    </div>
  )

}

export default EarphonesHome;