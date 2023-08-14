
/* 
import Slider from "react-slick";
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";
*/


import Header from './Common/Header';
import './app.css';
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Header></Header>
      </BrowserRouter>
    </div>
  );
}

export default App;
