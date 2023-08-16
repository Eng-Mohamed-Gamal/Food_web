import React from 'react'
import { useTypewriter } from 'react-simple-typewriter'

export default function Footer() {

const [text] = useTypewriter({
    words : ["jemy" , "front-end-developer"],
    loop : {},
})

  return (
<div className="footer">
    <div className="container">
        <div className="col">
            <h2>location</h2>
            <p>india</p>
            <p>japan</p>
            <p>russia</p>
            <p>usa</p>
            <p>france</p>
        </div>
        <ul className='col'>
            <h2>quick links</h2>
            <li> <a href="#Home"  > Home </a>   </li>
            <li> <a href="#Desert"  > Dishes </a>   </li>
            <li> <a href="#About"  >About </a>   </li>
            <li> <a href="#Menu"  > Menu </a>   </li>
            <li> <a href="#Review"  > Review </a>   </li>
            <li> <a href="#Order"  > Order </a>   </li>
        </ul>
        <div className="col">
            <h2>contact info</h2>
            <p>+123-456-789</p>
            <p>+111-222-333</p>
            <p>dfsdfsdf@fgfg.com</p>
            <p>mohamedfd@dfd.org</p>
            <p>fdfdfdd@gamil.com</p>
        </div>
        <div className="col">
            <h2>follow us</h2>
            <p>facebook</p>
            <p>twitter</p>
            <p>instagram</p>
            <p>linkedin</p>
        </div>
    </div>
    <h3 className='cen'>made by {text}</h3>
</div>
  )
}
