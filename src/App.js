// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          
          <Navbar />
          <Routes>
            <Route exact path="/"  element={ <News key="general" pagesize={6} category="general" />}></Route>
            <Route exact path="/Business"  element={<News key="Business"  pagesize={6} category="Business" />}> </Route>
            <Route exact path="/entertainment"  element={<News key="entertainment"  pagesize={6} category="entertainment" />}> </Route>
            <Route exact path="/Health" element={<News key="Health"pagesize={6} category="Health" />} > </Route>
            <Route exact path="/Science"  element={ <News key="Science"  pagesize={6} category="Science" />}></Route>
            <Route exact path="/Sports"  element={<News key="Sports" pagesize={6} category="Sports" />}> </Route>
            <Route exact path="/Technology" element={ <News key="Technology" pagesize={6} category="Technology" />} ></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}




