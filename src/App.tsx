import React from 'react';
import logo from './logo.svg';
import './App.css';
import Monday_1 from './components/Monday_1';
import Monday_2 from './components/Monday_2';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>

            <Monday_1/>
            <Monday_2/>

        </div>
    );
}

export default App;
