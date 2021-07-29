import "./about.scss"

export function About(){
  return(
    <div id="about-us">
      <div className="container flex justify-content-between about-us-box center">
       <div className="box-description-about-us">
         <h2 className="about-us-heading h2" >
           Bringing you the <span>best</span> audio gear
         </h2>
         <p className = "about-us-description">
           Located at the heart of New York City, 
           Audiophile is the premier store for high end headphones, 
           earphones, speakers, and audio accessories. We have a large 
           showroom and luxury demonstration rooms available for you to 
           browse and experience a wide range of our products. Stop by our 
           store to meet some of the fantastic people who make Audiophile 
           the best place to buy your portable audio equipment.
         </p>
       </div>
 
       <div className="box-img-about-us">
         <img src = {"/Audiophile/assets/shared/desktop/image-best-gear.jpg"} alt="" />
       </div>
      </div>
    </div>
  )
 }


 export default About;