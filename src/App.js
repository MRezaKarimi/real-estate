import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="container mx-auto bg-gray-200 rounded-xl shadow-gray-300 shadow-sm border p-8 m-10">
        <p className="text-3xl text-gray-900 font-bold mb-5">Welcome!</p>
        <p className="text-gray-500 text-lg">
          React and Tailwind CSS in action
        </p>
      </div>
    );
  }
}

export default App;
