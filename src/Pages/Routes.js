import { Route, Routes} from 'react-router-dom';
import React from 'react';
import About from './About'
import Home from './Home'
import Profile from './Profile'
import Resume from './Resume'
import UnderCon from './UnderCon'


const PageRoutes = () =>{
    return(   
<Routes>  
    <Route path="/" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="profile" element={<Profile/>}/>
    <Route path="resume" element={<Resume/>}/>
    <Route path="Building" element={<UnderCon/>}/>
</Routes>

    )
}

export default PageRoutes