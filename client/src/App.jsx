
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ExpertForget from './components/auth/expert/ExpertForget'
import ExpertLogin from './components/auth/expert/ExpertLogin'
import ExpertSignup from './components/auth/expert/ExpertSignup'
import StudentForget from './components/auth/student/StudentForget'
import StudentLogin from './components/auth/student/StudentLogin'
import StudentSignup from './components/auth/student/StudentSignup'
import StudentHome from './components/home/StudentHome'
import ExpertHome from './components/home/ExpertHome'
import Landing from './components/auth/Landing'
import OtpVerifyStudent from './components/auth/student/OtpVerify-student'
import OtpVerifyExpert from './components/auth/expert/OtpVerify-expert'

function App() {


  return (
    <BrowserRouter >
       <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/studenthome' element={<StudentHome /> } />
          <Route path='/experthome' element={<ExpertHome/>}/>
          <Route path='/studentsignup' element={<StudentSignup/> }/>
          <Route path='/studentlogin' element={< StudentLogin/>} />
          <Route path='/studentforget' element={<StudentForget/>} />
          <Route path='/expertsignup' element={<ExpertSignup/>}/>
          <Route path='/expertlogin' element={<ExpertLogin/>}/>
          <Route path='/expertforget' element={<ExpertForget/>} />
          <Route path='/otpverifystudent' element={<OtpVerifyStudent/>}/>
          <Route path='/otpverifyexpert' element={<OtpVerifyExpert/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
