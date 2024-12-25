

// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar"
import HomePage from "./components/Home"
import About from "./components/About"
import Footer from "./components/Footer"
import Technology from "./components/Technology"
import PostSection from "./components/Post"
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";

import { useState } from 'react';


function App() {
  let [isLit,setLit] = useState(true)

  function changeTheme() {
      setLit(!isLit)
      console.log(isLit)
  }


  return (
    <>
   <div
        className={`min-h-screen flex justify-center items-center transition-all duration-500 ${
          isLit ? "bg-white text-black" : "bg-gray-900 text-white"
        }`}
      >
        <div className="text-center">
          
          <label>
            <input
              onClick={changeTheme}
              className="hidden"
              type="checkbox"
            />
            {isLit ? <GoSun size={30} /> : <FaMoon size={30} />}
          </label>
     
    <Navbar/>
    <HomePage/>
    <About/>
    <Technology/>
    <PostSection/>
   
   
    <Footer/>
    </div>
    </div>
    </>
  )
}

export default App
