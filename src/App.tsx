import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import io from "socket.io-client";

import "./App.css";
import Header from "./components/common/header";
import Home from "./containers/home";
import Shipping from "./containers/shipping/shippingContainer";
import CartModal from "./components/common/cartPopup";

const socket = io(
  "https://test.ejam.com?applicantAuth=cV874bxX9TmbBp2H8vsZkFaZ"
);

function App() {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected");
    });
    socket.on("event", function (data) {
      console.log(data);
    });
    socket.on("disconnect", function () {
      console.log("disconnected");
    });

    socket.on("UPDATE_VIEWERS", (xxx: any) => {
      console.log(xxx); // x8WIv7-mJelg7on_ALbx
    });
    debugger;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <CartModal />
        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
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
