import React from 'react'

export default function Order() {
  return (
<div className="order" id='Order'>
    <h2 className='cen'>order now</h2>
    <h1 className='cen'>free and fast</h1>
    <div className="container">
        <form action="">
<div className="all">
<div className="col">
              <div className="part">
              <h3>your name</h3>
              <input type="text" placeholder='enter your name' />
              </div>
              <div className="part">
              <h3>your order</h3>
              <input type="text" placeholder='enter food name' />
              </div>
              <div className="part">
              <h3>how much</h3>
              <input type="text" placeholder='how many orders' />
              </div>
              <div className="part">
              <h3>your address</h3>
              <textarea name="" id="" cols="30" rows="10" placeholder='enter your address'></textarea>
              </div>
            </div>
            <div className="col">
              <div className="part">
              <h3>your number</h3>
              <input type="number" placeholder='enter your number' />
              </div>
              <div className="part">
              <h3>additional food </h3>
              <input type="text" placeholder='extra with food' />
              </div>
              <div className="part">
              <h3>date and time</h3>
              <input type="datetime-local" placeholder='how many orders' />
              </div>
              <div className="part">
              <h3>your message</h3>
              <textarea name="" id="" cols="30" rows="10" placeholder='enter your message'></textarea>
              </div>
            </div>
</div>
            <button>order now</button>
        </form>
    </div>
</div>
  )
}
