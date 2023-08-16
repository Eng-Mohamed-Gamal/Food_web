import React, { createContext, useRef } from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



export default function Home() {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay : true ,
        autoplaySpeed : 2000
      };

  return (
<div className="home" id='Home'>
    <div className="container" id='in'>

<Slider {...settings} >
<div className="box">
                <div className="con">
                    <h3>Our Special Dish</h3>
                    <h1>Pizza</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta excepturi doloribus iste distinctio, modi odio!</p>
                    <button>Order Now</button>
                </div>
                <div className="img"><img src="images/slide-1.jpg" alt="" /></div>
        </div>
        <div className="box">
                <div className="con">
                    <h3>Our Special Dish</h3>
                    <h1>African Desert</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta excepturi doloribus iste distinctio, modi odio!</p>
                    <button>Order Now</button>
                </div>
                <div className="img"><img src="images/slide-2.jpg" alt="" /></div>
        </div>
        <div className="box">
                <div className="con">
                    <h3>Our Special Dish</h3>
                    <h1>Turkey Desert</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta excepturi doloribus iste distinctio, modi odio!</p>
                    <button>Order Now</button>
                </div>
                <div className="img"><img src="images/slide-3.jpg" alt="" /></div>
        </div>
</Slider>
    </div>
</div>
  )
}


