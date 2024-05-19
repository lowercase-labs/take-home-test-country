import * as React from "react";
import { useEffect,useState } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { useLocation,useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const DetailView =()=>{
    
    const location = useLocation();
    const navigate =useNavigate();
    console.log(location.state);

    function goBack(){
       navigate(-1);
    }

      return (
        <>
        <Box >
        <Button style={{borderStyle:'ridge'}} onClick={e=>{goBack()}}> <span><ArrowBackIcon/></span> Back</Button>
        </Box>
          <Card sx={{ maxWidth: 1200, flex:'1 0 50%' ,margin:'55px'}}>
            <Box style={{display:'flex', flexDirection:'row' ,flex:'1 0 50%'}}>
             <Box >
              <CardMedia
                component="img"
                height="300"
                image={location?.state?.flags[1]}
                alt="flag"/>
            </Box>
            <Box  >
                <CardContent style={{marginLeft:'40px'}} >
                   <Typography gutterBottom variant="h5" component="div">
                    {location?.state?.name?.common}
                   </Typography> 
                </CardContent>
                <Box style={{display:'flex', flexDirection:'row' }}>
                    <Box>
                  <Typography variant="body2" color="text.secondary">
                      <span style={{fontWeight:'bold',marginLeft:'50px'}}> Native Name: </span>{location?.state?.name?.nativeName?.official}
                    </Typography>
                    </Box>
                    <Box>
                    <Typography variant="body2" color="text.secondary">
                      <span style={{fontWeight:'bold',marginLeft:'200px'}}>Top Level Domain : </span>{location?.state?.region}
                 </Typography>
                 </Box>
                </Box>
                <Box style={{display:'flex', flexDirection:'row' }}>
                    <Box>
                  <Typography variant="body2" color="text.secondary">
                      <span style={{fontWeight:'bold',marginLeft:'50px'}}> Population: </span>{location?.state?.population}
                    </Typography>
                    </Box>
                    <Box>
                    <Typography variant="body2" color="text.secondary">
                      <span style={{fontWeight:'bold',marginLeft:'150px'}}>Currency : </span>{location?.state?.currencies[0]?.name}
                 </Typography>
                 </Box>
                 </Box>
                 <Box style={{display:'flex', flexDirection:'row' }}>
                    <Box>
                  <Typography variant="body2" color="text.secondary">
                      <span style={{fontWeight:'bold',marginLeft:'50px'}}> Region: </span>{location?.state?.region}
                    </Typography>
                    </Box>
                    <Box>
                    <Typography variant="body2" color="text.secondary">
                      <span style={{fontWeight:'bold',marginLeft:'200px'}}>Languages : </span>{location?.state?.region}
                 </Typography>
                 </Box>
                </Box>
                <Box style={{display:'flex', flexDirection:'row' }}>
                    <Box>
                  <Typography variant="body2" color="text.secondary">
                      <span style={{fontWeight:'bold',marginLeft:'50px'}}> Sub Region: </span>{location?.state?.subregion}
                    </Typography>
                    </Box>
                </Box>
                <Box style={{display:'flex', flexDirection:'row' }}>
                    <Box>
                  <Typography variant="body2" color="text.secondary">
                      <span style={{fontWeight:'bold',marginLeft:'50px'}}> Capital: </span>{location?.state?.capital.toString()}
                    </Typography>
                    </Box>
                   
                </Box>
                
            </Box>
           
            </Box>
          </Card>
        </>
      )

}

export default DetailView;