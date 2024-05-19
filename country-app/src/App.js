
import './App.css';
import Header from './pages/header';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import  CssBaseline  from '@mui/material/CssBaseline';
import Router from './routing';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const myTheme = createTheme({
    
    palette: {
        mode: darkMode ? 'dark': 'light',
    },
});
  return (
    

        <ThemeProvider theme={myTheme}>
          <CssBaseline/>
          <BrowserRouter>
          <Provider store={store}> 
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          <Router/>
          </Provider>
        </BrowserRouter>
        </ThemeProvider>

  );
}

export default App;
