import React from 'react';
import './App.css';
import SvgFrame from './SvgFrame';

function App() {
  const element = document.getElementById('id')
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-column">
          {/*<SvgFrame />*/}
          <p>
            Welcome to Dashello!
          </p>
          {/* adding links */}
          {/*<a*/}
          {/*  className="App-link"*/}
          {/*  href="https://reactjs.org"*/}
          {/*  target="_blank"*/}
          {/*  rel="noopener noreferrer"*/}
          {/*>*/}
          {/*  Learn React*/}
          {/*</a>*/}
        </div>
      </header>
    </div>
  );
}

export default App;
