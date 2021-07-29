import Categories from "components/Categories";
import Hero from "./Hero";
import PremiumSpeaker from "./PremiumSpeaker";
import  Speaker  from "./Speaker";
import EarphonesHome from "./EarphonesHome";

function Home(props){

  return(
    <>
      <header id = "header">
        <Hero />
      </header>
    
      <Categories Category = {props.Category}/>
      <PremiumSpeaker />
      <Speaker />
      <EarphonesHome/>
      
    </>
  )
}


export default Home;