import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';
import Home from './pages/Home';
import ProductList from './pages/ProductList';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          <Route path="/product-list" element={<ProductList />} />            
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
