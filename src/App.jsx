// App.js
import React from "react";
//import TestComponent from "./TestComponent"; // Adjust the import path  // <TestComponent />     
import "./styles/Tailwind.css";
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home'
import Homelayout from "./layout/Homelayout";
import Footer from "./components/Footer"

function App() {
  return (
    <Homelayout>
    <Routes>
      {/* <Route
      path='/'
      element ={<Homelayout/>}/> */}
      {/* // </Homelayout> */}
      <Route index element={<Home/>}/>
      <Route path="/footer" element={<Footer />}/>
      {/* </Route> */}
    </Routes>
</Homelayout>
); 
}  


export default App;

// {/* //  <div className="App">
// // </div>   
// // ); */}


