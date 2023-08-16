import React from "react";

const arr = [
  "images/Dish/dish-1.jpg",
  "images/Dish/dish-2.jpg",
  "images/Dish/dish-3.jpg",
  "images/Dish/dish-4.jpg",
  "images/Dish/dish-5.jpg",
  "images/Dish/dish-6.jpg",
];

export default function Dishes() {
  return (
    <div className="dishes" id="Dishes">
        <h2 className="cen">our dishes</h2>
        <h1 className="cen">popular dishes</h1>
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
                    <div className="flex">
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
