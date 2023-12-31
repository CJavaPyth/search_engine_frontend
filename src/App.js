import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Appbar from './components/Appbar';


function App() {
  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Appbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/page2" element={<Page2 />}/>
          <Route path="/page3" element={<Page3 />}/>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
