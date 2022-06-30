import React from "react";
import Navigation from "./components/navigation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Modal from "./components/modal";
import Notification from "./components/notification";
import Announcement from "./components/announcement";
import Slider from "./components/slider";
import Footer from "./components/footer";

// Pages
import Home from "./pages/home";
import ProductDetails from "./pages/product-details";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Modal /> */}
        {/* <Notification /> */}
        <Announcement />
        <Navigation />
        <Slider />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:product-details" component={ProductDetails} />
          <Route component={() => 404} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
