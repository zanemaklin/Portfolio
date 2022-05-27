import React from 'react'
import { BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import './App.css'
import PageRoutes from './Pages/Routes';
import NavBar from './Components/NavBar';

const App = () => {

  return (
<BrowserRouter>
    <div>
    <NavBar/>
    <PageRoutes/>
    </div>
</BrowserRouter>
  )
}
export default App

