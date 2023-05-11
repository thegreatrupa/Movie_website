import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./Home/Home";
import Details from "./Screens/Details";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/screen2" Component={Details} />
          <React.Fragment to="/" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
