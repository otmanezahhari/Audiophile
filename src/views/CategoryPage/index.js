import ActiveDropDown from "./DropDown";
import ProductComponenet from "./ProductComponents";
import { useSelector } from "react-redux";
import {useLocation } from "react-router-dom";



function RenderCategory(){

  let location = useLocation();
  const GetLocation = location.pathname.split('/')[1];

  const AllProduct = useSelector(state => state.Allproducts.products);
  const categoryProduct = AllProduct.filter((elem) => elem.category === GetLocation).reverse()
  

  if(categoryProduct){
    return(
      <>
  
      
         <ActiveDropDown title={GetLocation} />
         {categoryProduct.map((elem)=>{
          
           return(
            <ProductComponenet 
              key               = {elem.id}
              id                = {elem.id}
              elem              = {elem}
              image             = {elem.image.desktop}
              title             = {elem.name}
              order             = {elem.id % 2 === 1? "order" : ""}
              shortDescription  = {elem.description}
              new               = {elem.new}  
            />
           )
         })}
  
    
      </>
    )
  }else{
    return'';
  }


  
}

export default RenderCategory;