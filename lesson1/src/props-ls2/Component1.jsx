


// rafce
//props - eto js object
// 

import React from 'react'



const Component1 = (props) => {
 console.log(props)
  return (
    <div>
    <img style={{marginRight:'500px'}} src={props.imgUrl} alt="" />
    <h4 style={{color: "blue"}}>{props.text}</h4>
    <h3>{props.price} KGS</h3>
    <a href="">Позвонить</a>
   </div>
  )
}

export default Component1