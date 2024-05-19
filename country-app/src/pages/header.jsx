import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import Box from '@mui/material/Box';




const Header =({darkMode,setDarkMode})=>{
    

    const handleMode =()=>{
        setDarkMode(!darkMode)
    }

    return (
        <>
         <Box sx={{ flexGrow: 1, margin:'20px' }}>
        <AppBar  position="static" color="inherit">
            <Toolbar >
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Where in the world?
                </Typography>
                
                
                  <button onClick={handleMode}><NightlightRoundIcon></NightlightRoundIcon> Dark Mode</button>
                
            </Toolbar>
        </AppBar>
        </Box>
        {/* <Box sx={{ flexGrow: 1, margin:'20px' }}> 
            <Home></Home>
        </Box> */}
        </>
    )


}

export default Header;