import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";


import Home from "./Home/Home";
import Details from "./Screens/Details";
import Profile from "./Profile/Profile";
import Register from "./Register/Register";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/Register" Component={Register} />
          <Route exact path="/screen2" Component={Details} />
          <Route exact path="/profile" Component={Profile} />
          <Route exact path="/" Component={Home} />
          <React.Fragment to="/" />
        </Routes>
      </Router>
    </>
  );
}

export default App;
