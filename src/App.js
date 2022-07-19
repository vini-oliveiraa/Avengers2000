import './App.css';
//Components
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
//Pages
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
  
    </div>
  );
}

export default App;
