import { Switch, Route, useLocation } from 'react-router-dom';
//Global Styles - Chuck Reset in here b/c why have two pages 
import GlobalStyle from './components/GlobalStyle';
//Import Pages
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork'
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav'; 
import MovieDetail from './pages/MovieDetail'; 
//Animations
import { AnimatePresence } from 'framer-motion'


function App() {
  //useLocation hook returns the location objects = which represents the curren url. 
    // Like a useState that retruns a new location whenever the URL changes 
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      {/* Wrapping everything in Animate Presence for exit page transition 
      exitBeforeEnter tells enter transition to wait and only start when exit animation is complete */}
      <AnimatePresence exitBeforeEnter>
        {/* 
          Switch stops once it matches the first path - so once it detects / its only going to render AboutUs.
          Passing in location and key props for page exit transitions/ animations 
        */}
        <Switch location={location} key={location.pathname}>
          <Route exact path="/">
            <AboutUs />
          </Route>
          <Route exact path="/work">
            <OurWork />
          </Route>
          <Route path="/work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <ContactUs />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
