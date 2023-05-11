import './App.css';
import { Routes,Route } from 'react-router-dom';
import { SignIn2 } from './SignIn2.js';
import { Home } from "./Home.js";
import { Home2 } from "./Home2.js";
import { Charts } from "./Chart.js";

function App() {
  return (
    //define routes
    <Routes>
        <Route path="/" element={<SignIn2></SignIn2>}></Route>
        {/* <Route path="/home" element={<Home></Home>}></Route> */}
        <Route path="/home" element={<Home2></Home2>}></Route>
        <Route path="/chart" element={<Charts></Charts>}></Route>
    </Routes>
  );
}

export default App;
