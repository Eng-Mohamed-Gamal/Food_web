import React, { useRef } from "react";

const arr = [
  "images/Desert/desert-1.jpg",
  "images/Desert/desert-2.jpg",
  "images/Desert/desert-3.jpg",
  "images/Desert/desert-4.jpg",
  "images/Desert/desert-5.jpg",
  "images/Desert/desert-6.jpg",
];

export default function Desert() {


  return (
    <div className="desert" id="Desert">
        <h2 className="cen">our desert</h2>
        <h1 className="cen">popular deserts</h1>
      <div className="container">
        {arr.map((src , index)=> {
            return (
                <div className="box" key={index}>
                    <div className="img"><img src={src} alt="" /></div>
                    <h2>tasty food</h2>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <div className="flex" >
                        <h3>$15.99</h3>
                        <button>add to cart</button>
                    </div>
                </div>
              
            )
        })}
      </div>
    </div>
  );
}
