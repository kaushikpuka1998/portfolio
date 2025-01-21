import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from './components/context/ThemeContext';
import App from './app/App';
import Themetoggle from './components/themetoggle';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider>
            <App />
    </ThemeProvider>
);

export default App;
