import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Component1 from './props-ls2/Component1.jsx'
import Modal from './props-ls2/modal/Modal.jsx'

//render ()
//re-render - state or props
//companent - (JSX, JS, CSS)
// react props and DRY - Dont Repeat Yourself

const ButtonDanger = () => {
  return <button className='red-btn'>Danger</button>
}
const ButtonInfo = () => {
  return <button className='info-btn'>Info</button>
}

const CommonButton = (props) => {
  /*
props = {
btnName:ok || send,
class: "blue" || "grey"
}
  */
  return <button className={props.class}>{props.btnName}</button>
}

// PROPS VS STATE
// string, number






createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Component1 
    imgUrl={"https://img5.lalafo.com/i/posters/api_webp/7c/0e/36/toyota-id-100354789-814692274.webp"} 
    text="Toyota  RAV4:2019 г.,Автомат,Бензин,Внедорожник"
   price={1848836} 
   />
  </StrictMode>,
)

