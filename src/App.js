import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Screen1 from "./Screens/Screen1";
import Screen2 from "./Screens/Screen2";
import React from "react";

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path="/" Component={Screen1} />
        <Route exact path="/screen2" Component={Screen2}/>
        <React.Fragment to="/"/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
