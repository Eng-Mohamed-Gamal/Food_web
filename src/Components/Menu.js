import React from 'react'


const arr = [
    "images/Menu/menu (1).jpg",
    "images/Menu/menu (2).jpg",
    "images/Menu/menu (3).jpg",
    "images/Menu/menu (4).jpg",
    "images/Menu/menu (5).jpg",
    "images/Menu/menu (6).jpg",
  ];

export default function Menu() {
  return (
<div className="menu" id='Menu'>
    <h2 className='cen'>our menu</h2>
    <h1 className='cen'>today’s speciality</h1>
    <div className="container">
    {arr.map((src , index)=> {
            return (
                <div className="box" key={index}>
                    <div className="img"><img src={src} alt="" /></div>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star-half-stroke"></i>
                    <h2>delicious food</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis mollitia dolores quae illo nemo tempora.</p>

                    <div className="flex">
                        <h3>$15.99</h3>
                        <button>add to cart</button>
                    </div>
                </div>
              
            )
        })}
    </div>
</div>
  )
}
