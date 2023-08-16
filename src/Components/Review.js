import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const arr = [
    "images/Review/review_1.png",
    "images/Review/review_2.png",
    "images/Review/review_3.png",
    "images/Review/review_4.png"
  ];

export default function Review() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1100,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
            },
          },
        ],
      };

  return (
    <div className="review" id='Review'>
        <h2 className='cen'>customer’s review</h2>
        <h1 className="cen"> What they say </h1>
      <div className="container">
        <Slider {...settings}> 
        {arr.map( (src , index) => {
            return (
                <div className="box" key={index}>
                <div className="flex">
                    <div className="flex-in">
                        <img src={src} alt="" />
                        <div className="con">
                            <h2>John Doe</h2>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half-stroke"></i>
                        </div>
                    </div>
                    <i class="fa-solid fa-quote-right"></i>
                </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias, explicabo blanditiis. Ad aliquid totam temporibus natus esse, nostrum harum accusamus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, ab? Officia nisi dignissimos nulla fuga natus! Minima unde, quas consectetur, vero aut, atque non ut accusantium repudiandae impedit debitis corporis?</p>
            </div>
              
            )
        } )}
        </Slider>
      </div>
    </div>
  );
}
