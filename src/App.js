import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutPage from "./Components/AboutPage/AboutPage";
import BlogPage from "./Components/BlogPage/BlogPage";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import ServicePage from "./Components/ServicePage/ServicePage";
// Context API to load service options on all page 
export const ServiceContext = createContext([]);

function App() {
  // fetch service
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch('./fakeFood.json')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])
  return (
    <>
      <ServiceContext.Provider value={services}>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/blogs">
              <BlogPage />
            </Route>
            <Route exact path="/about-us">
              <AboutPage />
            </Route>
            <Route exact path="/services">
              <ServicePage />
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </ServiceContext.Provider>
    </>
  );
}

export default App;
