import React, { useRef, useState } from 'react'
let Handle = document.getElementById("#in")




export default function Header() {
    const barsRef = useRef()
    const searchRef = useRef()

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




    const Search = ()=> {
        searchRef.current.classList.add("vertical")
        barsRef.current.classList.remove("translate")
        setTog(false)
    }
    const Close = ()=> {
        searchRef.current.classList.remove("vertical")
    }

  return (
<div className="header">
    <div className="container">
        <div className="logo"><img src="images/logo.png" alt="" /></div>
        <ul ref={barsRef}>
            <li> <a href="#Home"  > Home </a>   </li>
            <li> <a href="#Desert"  > Dishes </a>   </li>
            <li> <a href="#About"  >About </a>   </li>
            <li> <a href="#Menu"  > Menu </a>   </li>
            <li> <a href="#Review"  > Review </a>   </li>
            <li> <a href="#Order"  > Order </a>   </li>
        </ul>
        <div className="icons">
        <i class={tog ? "fa-solid fa-times" : "fa-solid fa-bars"} onClick={Bars} ></i>
        <i class="fa-solid fa-magnifying-glass"  onClick={Search} ></i>
        </div>
    </div>
    <div className="black" ref={searchRef}>
        <form action="">
            <input type="text" placeholder='Search Here ...' />
            <i class="fa-solid fa-magnifying-glass"></i>
        </form>
        <i className="fa-solid fa-times" onClick={Close} ></i>
    </div>
</div>
  )
}
