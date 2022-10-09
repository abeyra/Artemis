import './reset.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar.jsx';
import Stars from './pages/Stars/Stars.jsx';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Navbar /> 
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/stars" element={<Stars />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
