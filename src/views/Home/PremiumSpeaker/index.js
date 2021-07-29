import {Link } from "react-router-dom";
import {scrollToTop} from "components/Healpers";
import "./premiumspeaker.scss";

function PremiumSpeaker(props){
  return(
    <div id="premium-speaker">
      <div className="box-premium-speaker container center justify-content-around">
          <div className="box-img">
            <img src={"/Audiophile/assets/home/desktop/image-speaker-zx9.png"} alt="" />
          </div>
          <div className="information-premium-speaker">
            <h2 className="h1 heading-pemium-speaker">ZX9 speaker</h2>
            <p className=" p description-premium-speaker">
              Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.
            </p>
            <Link to = {{pathname : "/product-detail/zx9-speaker", state:6}} className='btn black ' onClick={scrollToTop}  >See product</Link>
          </div>
          <div className="box-pattern">
            <img src={"/Audiophile/assets/home/desktop/pattern-circles.svg"} alt="patern circle" />
          </div>
      </div>
    </div>
  )
}

export default PremiumSpeaker;