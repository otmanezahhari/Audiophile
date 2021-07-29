import {Link } from "react-router-dom";
import {scrollToTop} from "components/Healpers";
import "./categories.scss";


function Categories(props){
  
  
  
  const ItemCategorie = () =>{
    const Items = [
      {
        name :'headphones',
      },
      {
        name :'speakers',
      },
      {
        name :'earphones',
      },
  ]

  const removeDisplayFromMTNavigation = (ev)=>{
    console.log(ev.target.className)
 
    document.querySelector('#nav-mobile').classList = "";
  }



  return(
    Items.map((elem,index) => {
      return(
        <Link key={index} to = {"/" + elem.name}  className="categorie-item" onClick={scrollToTop, removeDisplayFromMTNavigation}>
            <div className={`box-img-categorie ${elem.name}`}>
              <img src={"/Audiophile/assets/shared/desktop/image-" + elem.name + ".png"} alt={elem.name}/>
            </div>
            <div className="description-categorie">
              <h3 className ="cart-title" > {elem.name}</h3>
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
    <div className ="categories-items-gnrl">
      <div className="categorie-items flex center container justify-content-between">
        <ItemCategorie/>
      </div> 
    </div>
  )
}

export default Categories;