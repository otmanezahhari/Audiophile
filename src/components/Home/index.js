import {Navbar, About,Categories, Footer,Hero, Speaker, PremiumSpeaker, EarphonesHome} from "../Healpers";

function Home(props){
  
  return(
    <>
      <header id = "header">
        <Navbar updateQuantityCategory={props.updateQuantityCategory} count={props.count} addQuantity={props.addQuantity} removeAll={props.removeAll} productQuantity={props.productQuantity} cartProduct={props.cartProduct}  Category = {props.Category}/>
        <Hero display  = {props.display}/>
      </header>
    
      <Categories Category = {props.Category}/>
      <PremiumSpeaker display  = {props.display}/>
      <Speaker display  = {props.display}/>
      <EarphonesHome display  = {props.display} />
      <About />
      <Footer Category = {props.Category}/>
    </>
  )
}


export default Home;