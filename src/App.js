import React from 'react';
import './App.css';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import Main from './components/MainComponent';
import { theme } from './shared/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main /> 
    </ThemeProvider>
  );
}

export default App;