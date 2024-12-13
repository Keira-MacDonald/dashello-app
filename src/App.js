import React from 'react';
import './App.css';
import SvgFrame from './SvgFrame';
import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom';

//adding components
import LoginPage from './components/loginPage/login';


function App() {
  // debugger
  const element = document.getElementById('id')
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/login" element=
          {
            <div className="App">
              <header className="App-header">
                <LoginPage />
              </header>
            </div>
          }
        />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
