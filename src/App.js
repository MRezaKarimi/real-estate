import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./stores/configStore";
import BuyHome from "./components/buyHome";
import Main from "./components/main";
import NavBar from "./components/navbar";
import "./App.css";
import SellHome from "./components/sellHome";
import Login from "./components/login";
import SignUp from "./components/signUp";
import PropertyDetails from "./components/propertyDetails";
import Favorites from "./components/favorites";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/buy" element={<BuyHome />}></Route>
            <Route path="/sell" element={<SellHome />}></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="/property/:id" element={<PropertyDetails />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/sign-up" element={<SignUp />}></Route>
            <Route path="/" element={<Main />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
