import './App.css';
import AppNavbar from './Components/AppNavbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Biology from './Pages/Biology';

function App() {
  return (
    <Router>
      <AppNavbar/>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/biology" element={<Biology />}/>
        </Routes>
    </Router>
    
  );
}

export default App;
