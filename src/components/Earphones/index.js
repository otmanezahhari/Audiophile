import {Navbar , About, Categories, Footer,ActiveDropDown, ProductComponenet} from "../Healpers";



function Earphones(props){
  const {ProductList} = props;

  const newlocation = window.location.href.split('/');
  
  window.onload = ()=>{
    props.Category(newlocation[newlocation.length - 1])
  }

  return(
    <>
      <Navbar removeAll={props.removeAll}  productQuantity={props.productQuantity} cartProduct={props.cartProduct} Category = {props.Category}/>
       <ActiveDropDown title={'Earphones'} />

       {ProductList.map((elem)=>{
         return(
          <ProductComponenet 
            key               = {elem.id}
            elem              = {elem}
            image             = {elem.image.desktop}
            title             = {elem.name}
            order             = {elem.id % 2 === 0? "order" : ""}
            shortDescription  = {elem.description}
            new               = {elem.new}  
            display           = {props.display}
            
          />
         )
         
       })}

       <Categories Category = {props.Category}/>
       <About />
       <Footer Category = {props.Category}/>   
    </>
  )
}

export default Earphones;