import React from 'react'

export default function About() {
  return (
    <div className="about" id="About">
      <h2 className="cen">About us</h2>
      <h1 className='cen'>why choose us</h1>
<div className="container">
        <div className="img">
          <img src="./images/about.png" alt="" />
        </div>
        <div className="con">
          <h2>best food in the country</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            distinctio incidunt repellendus quod consectetur! Voluptates magni
            ut doloremque modi laboriosam.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
            distinctio incidunt repellendus quod consectetur! Voluptates magni
            ut doloremque modi laboriosam.
          </p>
       
          <div className="all">
            <div className="go">
            <i class="fa-solid fa-truck"></i>
              <p>free delivery</p>
            </div>
            <div className="go">
            <i class="fa-solid fa-dollar-sign"></i>
              <p>easy payments</p>
            </div>
            <div className="go">
            <i class="fa-solid fa-headset"></i>
              <p>24/7 service</p>
            </div>
          </div>
          <button>learn more</button>
        </div>
      </div>
    </div>
  )
}
