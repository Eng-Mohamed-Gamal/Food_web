
/* 
import Slider from "react-slick";
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";
*/


import Header from './Common/Header';
import Home, { Provider } from './Components/Home';
import './app.css';


function App() {
  return (
    <div className="app">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
