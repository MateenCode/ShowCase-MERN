import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "./context/context";
import "./css/App.css";

// Imported Components
import Navbar from "./components/layout/Navigation";
import Header from "./components/layout/Header";
import CardList from "./components/CardList";
import Edit from "./components/modal/EditModal";
import Particle from "./components/layout/Particle";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <React.Fragment>
            <Provider>
              <Particle />
              <Navbar />
              <Header />
              <Route path="/" component={CardList} exact />
              <Route path="/edit/:id" component={Edit} />
            </Provider>
          </React.Fragment>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
