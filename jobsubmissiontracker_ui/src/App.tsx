import React from 'react';

import './App.css';
import Container from '@mui/material/Container';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import MyDashboard from './views/MyDashboard';
import JobSubmissions from './views/JobSubmissions';
import MyInfo from './views/MyInfo';
import NavBar from './components/NavBar';


import logo from "./logo.svg";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react";


// @ts-ignore
function App({ signOut }) {
  console.log('signOut', signOut);
  return (
     <View className="App">



    <Router>
      <NavBar signOut={signOut} />
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

    </View>
  );
}

export default withAuthenticator(App);
