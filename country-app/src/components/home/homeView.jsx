import * as React from "react";
import { useEffect } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useSelector,useDispatch } from "react-redux";
import {getCountryDetail} from './homeViewReducer';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';

import Box from '@mui/material/Box';

const HomeView =() =>{
    const dispatch=useDispatch()
    const countryData = useSelector(state=>state.home.homeViewReducer)
    console.log(countryData,"cou");
    useEffect(()=>{
       
        dispatch(getCountryDetail())
        console.log("6788");

    },[])
   return (
    <>
     <Box sx={{ display: 'flex',  }}>
        <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
        <TextField id="searchInput" label="search by country" variant="standard" />
      </Box>
    <Box style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
      {  countryData?.countryData?.map((data)=>{
        return(
          <Card sx={{ maxWidth: 345, flex:'1 0 21%' ,margin:'5px'}}>
              <CardHeader>
        
              </CardHeader>
              <CardMedia
                component="img"
                height="194"
                image={data?.flags[1]}
                alt="Paella dish"/>

              <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    {data?.name?.common}
                   </Typography>       
                <Typography variant="body2" color="text.secondary">
                  <span style={{fontWeight:'bold'}}>Population : </span>{data?.population}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <span style={{fontWeight:'bold'}}>Region : </span>{data?.region}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <span style={{fontWeight:'bold'}}>Captial : </span>{data?.capital?.toString()}
                </Typography>
            </CardContent>
           
         </Card>
        )
        })
}
   

    </Box>
    </>
   )

}

export default HomeView;