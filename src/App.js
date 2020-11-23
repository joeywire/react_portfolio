import { Switch, Route } from 'react-router-dom';
//Global Styles - Chuck Reset in here b/c why have two pages 
import GlobalStyle from './components/GlobalStyle';
//Import Pages
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork'
import AboutUs from './pages/AboutUs';
import Nav from './components/Nav'; 


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav />
      {/* Switch stops once it matches the first path - so once it detects / its only going to render AboutUs */}
      <Switch>
        <Route exact path="/">
          <AboutUs />
        </Route>
        <Route path="/work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <ContactUs />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
