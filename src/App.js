import logo from './logo.svg';
import './App.css';
import User from './components/Home/business/user';
import Money from './components/Home/business/money';
import Billing from './components/Home/business/billing';
import Nav from './components/Home/header/nav';
import Body from './components/Home/header/body';
import Analysis from './components/Home/business/analysis';
import Testimonial from './components/Home/business/testimonial';
import Footer from './components/Home/footer/footerdetails';

function App() {
  return (
    <div className="App md:mx-36 md:my-8 mx-6 my-6  ">
         <Nav/>
         <Body/>
         <User/>
         <Money/>
         <Billing/>
         <Analysis/>
         <Testimonial/>
         <Footer/>
    </div>
  );
}

export default App;
