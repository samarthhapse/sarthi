
import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Landing } from './components/landing/Landing'
import { StudentHome } from './components/home/StudentHome';
import { StudentSignup } from './components/student/StudentSignup';
import { StudentLogin } from './components/student/StudentLogin';
import { StudentForget } from './components/student/StudentForget';
import { ExpertHome } from './components/home/ExpertHome';
import { ExpertSignup } from './components/expert/ExpertSignup';
import { ExpertLogin } from './components/expert/ExpertLogin';
import { ExpertForget } from './components/expert/ExpertForget';






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
       </Routes>
    </BrowserRouter>
  )
}

export default App
