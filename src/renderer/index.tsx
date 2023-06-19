import React from "react";
import './global.css';
import { createRoot } from 'react-dom/client';
import { store } from './store'
import { Provider } from 'react-redux'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Wizard from './components/wizard/Wizard';
import Header from './components/Header';
import theme from './theme';
import { ThemeProvider } from '@mui/material/styles';

// TODO:  Support of Zowe Configuration and Saved Installation actions.
//        - Add and use state saving
//        - Implement previos installtaion installation parts
//        BE validation of fields
//        Create help component
//        Add localization support
//        Get rid of routing

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Header/>}>
              <Route index element={<Home />} />
              <Route path="wizard" element={<Wizard/>}/>  
            </Route>
            <Route path="*" element={<Home />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

const container = document.getElementById('zen-root-container');
const root = createRoot(container!);

root.render(<React.StrictMode><App/></React.StrictMode>);
