
/* 
import Slider from "react-slick";
import "~slick-carousel/slick/slick.css"; 
import "~slick-carousel/slick/slick-theme.css";
*/


import Footer from './Common/Footer';
import Header from './Common/Header';
import About from './Components/About';
import Dishes from './Components/Dishes';
import Home, { Provider } from './Components/Home';
import Menu from './Components/Menu';
import Order from './Components/Order';
import Review from './Components/Review';
import './app.css';


function App() {
  return (
    <div className="app">
      <Header></Header>
      <Home></Home>
      <Dishes></Dishes>
      <About></About>
      <Menu></Menu>
      <Review></Review>
      <Order></Order>
      <Footer></Footer>
    </div>
  );
}

export default App;
