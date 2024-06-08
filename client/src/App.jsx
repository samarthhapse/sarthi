import "./App.css";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useContext } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import ExpertForget from "./components/auth/expert/ExpertForget";
// import Navbar from './components/Basic/Navbar'
import ExpertLogin from "./components/auth/expert/ExpertLogin";
import ExpertSignup from "./components/auth/expert/ExpertSignup";
import StudentForget from "./components/auth/student/StudentForget";
import StudentLogin from "./components/auth/student/StudentLogin";
import StudentSignup from "./components/auth/student/StudentSignup";
import StudentHome from "./components/home/StudentHome";
import ExpertHome from "./components/home/ExpertHome";
import Landing from "./components/auth/Landing";
import HomePage from "./components/Landing/HomePage";
import OtpVerifyStudent from "./components/auth/student/OtpVerify-student";
import OtpVerifyExpert from "./components/auth/expert/OtpVerify-expert";
import { ThemeContext } from "./components/context/theme";
import PageNotFound from "./components/Basic/PageNotFound";
import Navbar from "./components/Basic/Navbar";

function App() {
  // const { theme } = useContext(ThemeContext);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Landing" element={<Landing />} />
        <Route path="/studenthome" element={<StudentHome />} />
        <Route path="/experthome" element={<ExpertHome />} />
        <Route path="/studentsignup" element={<StudentSignup />} />
        <Route path="/studentlogin" element={<StudentLogin />} />
        <Route path="/studentforget" element={<StudentForget />} />
        <Route path="/expertsignup" element={<ExpertSignup />} />
        <Route path="/expertlogin" element={<ExpertLogin />} />
        <Route path="/expertforget" element={<ExpertForget />} />
        <Route path="/otpverifystudent" element={<OtpVerifyStudent />} />
        <Route path="/events" element={<OtpVerifyExpert />} />
        <Route path="/pricing" element={<OtpVerifyExpert />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
