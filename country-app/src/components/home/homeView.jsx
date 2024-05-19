import * as React from "react";
import { useEffect,useState } from "react";
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { useSelector,useDispatch } from "react-redux";
import {getCountryDetail} from './homeViewReducer';
import TextField from '@mui/material/TextField';
import SearchIcon from "@mui/icons-material//Search";
import Box from '@mui/material/Box';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import DetailView  from "./detailView";
import {useNavigate} from 'react-router-dom';

const HomeView =() =>{
  const navigate = useNavigate();
   const [searchValue,setSearchValue]=useState('');
   const [drpDownValue,setDrpDwnValue]=useState('')
   const [drpDown,setDrpDwn]=useState([
                    {value:'asia',displayName:'Asia'},
                    {value:'america',displayName:'America'},
                    {value:'europe',displayName:'Europe'},
                    {value:'africa',displayName:'Africa'},
                    {value:'oceania',displayName:'Oceania'},            
                  ]);
    const dispatch=useDispatch()
    const countryData = useSelector(state=>state.home.homeViewReducer)
   
    useEffect(()=>{   
        dispatch(getCountryDetail())
    },[])

    function cardClick(data){
      console.log("hello");
      navigate('/Detail',{state:data})
      return  <DetailView data={data}/>
    }

   return (
    <>
     <Box sx={{ display: 'flex',flexDirection:'row',  }}>
       <Box > 
         <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5,marginLeft:'20px' }} />
         <TextField id="searchInput" label="search by country" variant="standard"  onChange={e=>{setSearchValue(e.target.value);}}/>
        </Box>
        <Box sx={{ minWidth: 220,marginLeft:'900px' }}>
           <FormControl fullWidth>
             <InputLabel id="regionSelect-label">Filter By Region</InputLabel>
             <Select
               labelId="regionDropDown"
               id="regionSelect"
               value={drpDownValue}
               label="Age"
               onChange={e=>{console.log(e.target.value,"yyy"); setDrpDwnValue(e.target.value)}}
             >{drpDown.map((val)=>{
                return (<MenuItem value={val.value}>{val.displayName}</MenuItem>)
              
              })
             }
             </Select>
           </FormControl>
        </Box>
      </Box>
    <Box style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
      {  countryData?.countryData?.filter((filData)=>{ 
        if(searchValue ){
            if (filData?.name?.common.toLowerCase().includes(searchValue.toLowerCase()) ){     
               return filData
            }           
        } 
        else if (drpDownValue){
          if (filData?.region.toLowerCase().includes(drpDownValue) ){       
             return filData
          }
        }
        else{       
        return filData
        }
        
      }).map((data)=>{
        return(
          <Card  class="displayCard" sx={{ maxWidth: 345, flex:'1 1 21%' ,margin:'5px'}} >
              <CardHeader>
        
              </CardHeader>
              <CardMedia
                component="img"
                height="194"
                onClick={e=>{cardClick(data)}}
                image={data?.flags[1]}
                alt="flag"/>

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