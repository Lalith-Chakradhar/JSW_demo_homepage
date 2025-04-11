import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroComponent from "./components/HeroComponent/HeroComponent";
import Stepper from './components/Stepper/Stepper';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <>
      <Navbar/>
      <HeroComponent/>
      <Stepper/>
      <Footer/>
    </>
  )
}

export default App
