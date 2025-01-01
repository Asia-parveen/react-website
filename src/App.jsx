import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from "./components/Navbar";
import HomePage from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Technology from "./components/Technology";
import PostSection from "./components/Post";
import { GoSun } from "react-icons/go";
import { FaMoon } from "react-icons/fa";
import moment from 'moment/moment';

import { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes  // Correct import
} from "react-router-dom";



function App() {
  let [isLit, setLit] = useState(true);

  function changeTheme() {
    setLit(!isLit);
    console.log(isLit);
  }
const myTime = moment().format('MMMM Do YYYY, h:mm:ss a');
  return (
    <>
   <div><p>{myTime}</p></div>
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

          <Router>
            <Navbar /> {/* Navbar har page par dikhai dega */}

            <Routes> {/* Use Routes component */}
              <Route path="/" element={<HomePage />} /> {/* HomePage ke liye route */}
              <Route path="/about" element={<About />} /> {/* About ke liye route */}
              <Route path="/technology" element={<Technology />} /> {/* Technology ke liye route */}
              <Route path="/posts" element={<PostSection />} /> {/* PostSection ke liye route */}
            </Routes>
          </Router>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;


