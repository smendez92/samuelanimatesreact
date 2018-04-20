import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div className="App">
        <Link to={"/projects/after/"}>After, After That</Link>
      </div>
    );
  }
}

export default HomePage;
