import React from 'react';
import logo from './logo.svg';
import './App.css';
import Monday_1 from './components/Monday_1';
import Monday_2 from './components/Monday_2';
import Monday_3 from './components/Monday_3';
import Monday_4 from './components/Monday_4';
import Monday_TOTAL from './components/Monday_TOTAL';
import Tuesday_1 from './components/Tuesday_1';
import Tuesday_2 from './components/Tuesday_2';
import Tuesday_3 from './components/Tuesday_3';
import Tuesday_4 from './components/Tuesday_4';

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
            <Monday_3/>
            <Monday_4/>
            <Monday_TOTAL/>

            <Tuesday_1/>
            <Tuesday_2/>
            <Tuesday_3/>
            <Tuesday_4/>
        </div>
    );
}

export default App;
