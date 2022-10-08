import React from "react";
import {Route, Routes, BrowserRouter as Router}  from 'react-router-dom'
import Documents from "./pages/Documents";
import Home from "./pages/Home";
import CyberSecurityTips from './pages/CyberSecurityTips'
import AllReportedCrimes from './pages/AllReportedCrimes'
import MyReportedCrimes from "./pages/MyReportedCrimes";
import SocialMediaPrecautions from './pages/SocialMediaPrecautions'
import ReportCrimePage from "./pages/ReportCrimePage";
import LoginRegister from "./pages/LoginRegister"
import ForgetPassword from "./pages/ForgetPassword"
import Footer from "./components/Footer";


const App = () => {
  return (
    <React.Fragment>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login-register" element={<LoginRegister/>}/>
        <Route path="/documents" element={<Documents/>}/>
        <Route path="/reset-password" element={<ForgetPassword/>}/>
        <Route path="/my-reported-crimes" element={<MyReportedCrimes/>}/>
        <Route path="/all-reported-crimes" element={<AllReportedCrimes/>}/>
        <Route path="/cyber-security-tips" element={<CyberSecurityTips/>}/>
        <Route path="/social-media-precaution" element={<SocialMediaPrecautions/>}/>
        <Route path="/report-crime" element={<ReportCrimePage/>}/>
      </Routes>
    
    </Router>
    <Footer/>
    </React.Fragment>
    
  );
}

export default App;
