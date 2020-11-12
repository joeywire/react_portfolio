import AboutUs from './pages/AboutUs';
//Global Styles - can i seperate one for reset? 
import GlobalStyle from './components/GlobalStyle'


function App() {
  return (
    <div className="App">
      <h1>Film</h1>
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
