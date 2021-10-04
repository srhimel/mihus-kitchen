import { BrowserRouter, Switch, Route } from "react-router-dom";
import AboutPage from "./Components/AboutPage/AboutPage";
import BlogPage from "./Components/BlogPage/BlogPage";
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import ServicePage from "./Components/ServicePage/ServicePage";


function App() {
  return (
    <>
      <BrowserRouter>
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
      </BrowserRouter>
    </>
  );
}

export default App;
