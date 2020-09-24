import React from 'react';
import './App.css';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Main from './components/MainComponent';
import { theme } from './shared/theme';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Main /> 
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;