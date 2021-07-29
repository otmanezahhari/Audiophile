import "./speaker.scss";
import {Link } from "react-router-dom";
import {scrollToTop} from "components/Healpers";


function Speaker(props){
  return(
    <div id="speaker">
      <div className="box-speaker container center justify-content-around">
          
          <img src = {"/Audiophile/assets/home/desktop/image-speaker-zx7.jpg"}  alt="speaker zx7" />

          <div className="information-speaker">
            <h3 className="h3 heading-speaker">ZX7 speaker</h3>
            <Link to = {{pathname : "/product-detail/zx7-speaker", state:5}} className='btn transparent' onClick ={scrollToTop} >See product</Link>        
          </div>

      </div>
    </div>
  )
}


export default Speaker;