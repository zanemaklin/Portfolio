import { Route, Routes} from 'react-router-dom';
import React from 'react';
import About from './About'
import Home from './Home'
import Projects from './Project'
import Resume from './Resume'
import UnderCon from './UnderCon'
import Gallery from './Gallery';


const PageRoutes = () =>{
    return(   
<Routes>  
    <Route path="/" element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="projects" element={<Projects/>}/>
    <Route path="resume" element={<Resume/>}/>
    <Route path="Building" element={<UnderCon/>}/>
    <Route path="Gallery" element={<Gallery/>}/>
</Routes>

    )
}

export default PageRoutes