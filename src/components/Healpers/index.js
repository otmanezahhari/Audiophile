/* -------------- Function ----------------*/
export const formatName = (elem)=>{
  const NewElem = elem.split(' ');
  if(NewElem.length>3){
    const Name = NewElem[1];
    return NewElem[0]+' '+NewElem[1][0]+ NewElem[1][NewElem[1].length -1] + ' ' + NewElem[2] ;
  }else{
   return  NewElem[0];
  }
}

export const titleFormat = (title)=>{
  if(title){
    
    const newArray = title.split(' ');
    const newArraym = newArray.slice(0,newArray.length-1).join(' ');
    return newArraym;
  }else{
    return '';
  }
  
}

export const formatPrice = (price) =>{
  return parseInt(price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,').split('.')[0]
}


export const countPrice = (cartProduct) =>{
  let sum = 0;
  if(cartProduct ){
    cartProduct.map(elem=>{
      sum+= elem.price * elem.quantity;
    });

    return sum
  }
   return '';
 
}


export const scrollToTop = () =>{
  window.scrollTo(0, 0);
}

export const removeHidden = ()=>{
  document.querySelector("body").classList="";
  document.querySelector("#cart").classList = "";
}