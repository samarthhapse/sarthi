
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../api/studentapi";
import {useDispatch} from 'react-redux'
import { setAuthToken } from "../../../redux/studentSlice";
const StudentLogin = () => {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs, [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(inputs);
      if(response.status===200)
      {  
      alert(response.data.message);
      dispatch(setAuthToken(response.data.token))
      setInputs({
        email: '',
        password: '',
      });
      navigate("/studenthome");
      }
      else
      {
        alert('error while logging')
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-5 bg-cover bg-center ">
      <div className="w-[900px] flex rounded-lg shadow-lg overflow-hidden">
        <div className="flex-1 flex flex-col items-center justify-center bg-teal-500 p-3">
          <h1 className="text-white text-2xl font-[serif]">Do not have an account?</h1>
          <Link to='/studentsignup'>
            <button type="button" className="mt-6 bg-white text-teal-500 font-bold text-md py-2 px-6 rounded-full transition-all hover:bg-gray-100">
              Sign up
            </button>
          </Link>
        </div>
        <div className="flex-[1.5] flex flex-col items-center justify-center bg-white p-10">
          <form onSubmit={handleSubmit} className="flex flex-col items-center w-full">
            <h1 className="text-4xl font-[serif] mb-5">Student login</h1>
      
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={inputs.email}
              required
              className="w-[370px] py-4 px-6 mb-8 mt-10  text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none transition-all focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={inputs.password}
              required
              className="w-[370px] py-4 px-6 mb-4 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none transition-all focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
            />
             <a href="/studentforget" className="text-md font-medium text-gray-950 hover:text-gray-700">Forget password?</a>
            <button type="submit" className="mt-4 bg-teal-500 text-white font-bold text-md py-3 px-8 rounded-full transition-all hover:bg-teal-600">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentLogin;