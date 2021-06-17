import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "./js/scroll.js";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import KnowMore from "./components/KnowMore";
import ShowCase from "./components/ShowCase";
import Footer from "./components/Footer";
import ComingSoon from "./pages/ComingSoon";
import Contact from "./pages/Contact"
import Error404 from "./pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Navbar />
          <Hero />
          <ShowCase />
          <KnowMore />
          <Footer />
        </Route>
        <Route exact path="/store">
          <ComingSoon />         
        </Route>
        <Route exact path="/contact" component={ Contact } />
        <Route component={Error404} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
