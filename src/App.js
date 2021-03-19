
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.js';
import Header from "./components/Header.js";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import Timeline from "./components/Timeline"

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <AboutMe></AboutMe>
      <Services></Services>
      <Timeline></Timeline>
      <Portfolio></Portfolio>
      <Contacts></Contacts>
      <Footer></Footer>
    </>
  );
}

export default App;
