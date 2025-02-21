// App.js
import './App.css';
import AppNavbar from './Components/AppNavbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import BiologyArticles from './data/BiologyArticles';
import CategoryPage from './Pages/CategoryPage';
import ArticlePage from './Pages/ArticlePage';
import PhysicsArticles from './data/PhysicsArticles';
import ChemistryArticles from './data/ChemistryArticles';
import HealthArticles from './data/HealthArticles';
import TechnologyArticles from './data/TechnologyArticles';

function App() {
  return (
    <Router>
      <AppNavbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
    
        {/* Category Routes */}
        <Route exact path="/biology" element={<CategoryPage categoryName="biology" articles={BiologyArticles} />} />
        <Route exact path="/physics" element={<CategoryPage categoryName="physics" articles={PhysicsArticles} />} />
        <Route exact path="/chemistry" element={<CategoryPage categoryName="chemistry" articles={ChemistryArticles} />} />
        <Route exact path="/health" element={<CategoryPage categoryName="health" articles={HealthArticles} />} />
        <Route exact path="/technology" element={<CategoryPage categoryName="technology" articles={TechnologyArticles} />} />

        {/* Individual Article Page */}
        <Route exact path="/:categoryName/:slug" element={<ArticlePage />} />
      </Routes>
    </Router>
  );
}

export default App;
