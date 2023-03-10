import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Login } from './components/Login'
import { Menu } from './components/Menu'

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
       <Routes>
          <Route exact path="/" element={<Login/>} />
       </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
