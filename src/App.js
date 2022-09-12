import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./stores/configStore";
import BuyHome from "./components/buyHome";
import Home from "./components/home";
import NavBar from "./components/navbar";
import "./App.css";
import SellHome from "./components/sellHome";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/buy" element={<BuyHome />}></Route>
            <Route path="/sell" element={<SellHome />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
