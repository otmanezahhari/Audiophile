import {scrollToTop} from "components/Healpers";
import {Link} from "react-router-dom";

function MayAlsoLike({specificProduct, AllProduct}){
  
    return(
      <div className="you-also-like">
      <h3 className = "h3">you may also like</h3>
      <div className="product-suggestion">
        <div className="box-products flex justify-content-between">
          
          {specificProduct.features? specificProduct.others.map((elem,index)=>{
            const GetElem = AllProduct.filter((item)=>item.slug === elem.slug)[0];
            return(
              <div key={index} className="product">
                <div className="box-img-product">
                  <img src={`/Audiophile${elem.image.desktop.slice(1)}`} alt={elem.name} />
                </div>
                <div className="description-product">
                  <div className="title">{elem.name}</div>
                  <Link to={{pathname :`/product-detail/${elem.slug}`, state : GetElem.id}} className="btn link-see-product" onClick={scrollToTop} >See product</Link>
                </div>
                
              </div>
            )
          }) : ''}
  
        </div>
      </div>
    </div>
    )

}

export default MayAlsoLike