import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Home';
import Login from "./components/Login"
import SignUp from "./components/SignUp"
import VaccinationData from './context/VaccinationData';
import AddCenter from './components/AddCenter';
import Copyright from './components/Copyright';
import Profile from './components/Profile';
import Bookedslots from './components/Bookedslots';
function App() {
  return (
    
    <>
    <div className="mainapp">
    <Router>
    <VaccinationData>
    
    <Navbar/>
    <Routes>
            <Route exact path='/about' element={<About></About>}></Route>
            <Route exact path='/home' element={<Home></Home>}></Route>
            <Route exact path='/addcenter' element={<AddCenter></AddCenter>}></Route>
            <Route exact path='/' element={<Login></Login>}></Route>
            <Route exact path='/profile' element={<Profile></Profile>}></Route>
            <Route exact path='/bookedslots' element={<Bookedslots></Bookedslots>}></Route>
            <Route exact path='/signup' element={<SignUp></SignUp>}></Route>

          </Routes>
    
    </VaccinationData>
    <Copyright></Copyright>
    </Router></div>
    </>
  );
}

export default App;
