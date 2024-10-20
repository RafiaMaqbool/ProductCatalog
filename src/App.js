import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from './components/Layout';


function App() {

  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
