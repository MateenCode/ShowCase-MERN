import React, { Component } from "react";
import "./css/App.css";
import { Provider } from "./context/context";

// Imported Components
import Navbar from "./components/layout/Navigation";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import AddModal from "./components/modal/AddModal";
import CardList from "./components/CardList";

class App extends Component {
  render() {
    return (
      <Provider>
        <Navbar />
        <Header />
        <AddModal />
        <CardList />
        <Footer />
      </Provider>
    );
  }
}

export default App;
