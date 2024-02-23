import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a3/helloWorld";
import Kanbas from "./Kanbas";
import {HashRouter} from "react-router-dom";
import {Routes, Route, Navigate} from "react-router";


function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/"         element={<Navigate to="/Labs"/>}/>
          <Route path="/Labs/*"   element={<Labs/>}/>
          <Route path="/Kanbas/*" element={<Kanbas/>}/>
          <Route path="/HelloWorld/*" element={<HelloWorld/>}/>
        </Routes>

        {/* <Labs/>
        <Kanbas/>
        <HelloWorld/> */}
      </div>  
    </HashRouter>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <h1>Web Devlopment Couse - Mili Parikh</h1>
    //     <a
    //       className="App-link"
    //       href="/labs/a1/index.html"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Assignment 1
    //     </a>
    //     <a
    //       className="App-link"
    //       href="/labs/a2/index.html"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Assignment 2
    //     </a>
    //     <a
    //       className="App-link"
    //       href="/Kanbas/Dashboard/screen.html"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Kanbas project
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
