
import './App.css';
import Header from './pages/header';
import { useState } from 'react';
import { Provider } from 'react-redux';
import store from './store';

import { createTheme, ThemeProvider } from "@mui/material/styles";
import  CssBaseline  from '@mui/material/CssBaseline';

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
          <Provider store={store}> 
          <Header darkMode={darkMode} setDarkMode={setDarkMode} />
          </Provider>
        </ThemeProvider>

  );
}

export default App;
