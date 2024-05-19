import { Route, Routes } from "react-router-dom";
import DetailView  from "../components/home/detailView";
import HomeView from "../components/home/homeView";


const Router =()=>{

    return (
        
        <Routes>
         <Route path="/" element={< HomeView/>}></Route>
          <Route path="/Detail" element={< DetailView/>}></Route>
        </Routes>
      
    )
}

export default Router;