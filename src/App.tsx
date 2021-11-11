import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Header from "./components/common/header";
import Home from "./containers/home";
import Shipping from "./containers/shipping/shippingContainer";
import CartModal from "./components/common/cartPopup";
import WatchingPeople from "./components/watchingPeople/watchingPeople";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <CartModal />
        <WatchingPeople />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={true}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          draggable
          pauseOnHover
        />
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/eCommerceDemo">
            <Home />
          </Route>
          <Route exact path="/eCommerceDemo/shipping">
            <Home />
          </Route>
          <Route exact path="/shipping">
            <Shipping />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
