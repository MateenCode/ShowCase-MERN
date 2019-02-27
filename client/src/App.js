import React, { Component } from "react";
import { Provider } from "./context/context";
import { BrowserRouter, Route } from "react-router-dom";
import "./css/App.css";

// Imported Components
import Navbar from "./components/layout/Navigation";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CardList from "./components/CardList";
import Edit from "./components/modal/EditModal";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Provider>
          <Navbar />
          <Header />
          <Route path="/" component={CardList} exact />
          <Route path="/edit/:id" component={Edit} />
          <Footer />
        </Provider>
      </BrowserRouter>
    );
  }
}

export default App;
