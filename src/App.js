
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.js';
import Header from "./components/Header.js";
import AboutMe from "./components/AboutMe";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <AboutMe></AboutMe>
    </>
  );
}

export default App;
