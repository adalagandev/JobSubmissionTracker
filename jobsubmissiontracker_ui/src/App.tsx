import React from 'react';

import './App.css';
import JstUiNavBar from './components/JstUiNavBar';
import Container from '@mui/material/Container';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MyDashboard from './views/MyDashboard';
import JobSubmissions from './views/JobSubmissions';
import MyInfo from './views/MyInfo';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      
{/* <JstUiNavBar/> */}
          
    <Router>
      <NavBar />
      <br />
      <Container maxWidth="xl">        
      <Routes>
        <Route path='/' element={<Navigate to='/dashboard'/>} />
        <Route path='/dashboard' element={<MyDashboard/>} />
        <Route path='/jobsubmissions' element={<JobSubmissions />} />
        <Route path='/myinfo' element={<MyInfo />} />
      </Routes>
      </Container>
    </Router>

    </div>
  );
}

export default App;
