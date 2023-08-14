import React, { useRef, useState } from 'react'

export default function Header() {
    const barsRef = useRef()
    const [tog , setTog] =useState(false)
    const Bars = () =>{
        setTog(!tog)
        barsRef.current.classList.toggle("translate")
        if(barsRef.current.classList.contains("translate")){
            barsRef.current.classList.add("trans")
        }else{
            setTimeout(()=>{
                barsRef.current.classList.remove("trans")
            },300)
        }
    }
  return (
<div className="header">
    <div className="container">
        <div className="logo"><img src="images/logo.png" alt="" /></div>
        <ul ref={barsRef}>
            <li> <a href="#Home"  > Home </a>   </li>
            <li> <a href="#Dishes"  > Dishes </a>   </li>
            <li> <a href="#About"  >About </a>   </li>
            <li> <a href="#Menu"  > Menu </a>   </li>
            <li> <a href="#Review"  > Review </a>   </li>
            <li> <a href="#Order"  > Order </a>   </li>
        </ul>
        <div className="icons">
        <i class={tog ? "fa-solid fa-times" : "fa-solid fa-bars"} onClick={Bars} ></i>
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
</div>
  )
}
