import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { useTheme } from "../../providers/ThemeProvider";
const ExpertSignup = () => {
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phoneNo: '',
    expertise: '',
    field: '',
    jobTitle: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/v1/otp/sendotp',{email:inputs.email})
      alert(response.data.message);
      setInputs({
        name: '',
        email: '',
        phoneNo: '',
        expertise: '',
        field: '',
        jobTitle: '',
        password: '',
        confirmPassword: '',
      });
      navigate("/otpverifyexpert",{ state: { userData: inputs } });
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className={`w-full min-h-screen flex items-center justify-center p-4 bg-cover bg-center ${isDarkMode ? 'bg-custom-gradient text-white' :' bg-white '} `} >
      <motion.div 
        className="w-[900px] flex rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
       
       <div className={ `flex-[1.5] flex flex-col  p-10 ${isDarkMode ? ' bg-card-custom-gradient ' : ' bg-teal-500 text-white' }` }>
          <motion.form 
            onSubmit={handleSubmit} 
            className="flex flex-col items-center w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl font-[serif] mb-5">Create Your Account</h1>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={inputs.name}
              required
              className="w-[370px] py-4 px-6 mb-4 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none transition-all focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={inputs.email}
              required
              className="w-[370px] py-4 px-6 mb-4 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none transition-all focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
            />
            <input
              type="text"
              placeholder="Phone number"
              name="phoneNo"
              onChange={handleChange}
              value={inputs.phoneNo}
              required
              className="w-[370px] py-4 px-6 mb-4 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none transition-all focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
            />
            <input
              type="text"
              placeholder="Field"
              name="field"
              onChange={handleChange}
              value={inputs.field}
              required
              className="w-[370px] py-4 px-6 mb-4 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none transition-all focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
            />
            <input
              type="text"
              placeholder="Job title"
              name="jobTitle"
              onChange={handleChange}
              value={inputs.jobTitle}
              required
              className="w-[370px] py-4 px-6 mb-4 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none transition-all focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
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
            <input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              onChange={handleChange}
              value={inputs.confirmPassword}
              required
              className="w-[370px] py-4 px-6 mb-4 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none transition-all focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
            />
            <div className="mb-4 mr-32">
              <div className="mr-40">
                <h3 className="text-md font-md mb-2">Expertise:</h3>
              </div>
              <div className="flex flex-col">
                <div className="flex">
                  <input
                    type="radio"
                    id="bugSolving"
                    name="expertise"
                    value="Bug solving"
                    onChange={handleChange}
                    checked={inputs.expertise === 'Bug solving'}
                    className="mr-2"
                  />
                  <label htmlFor="bugSolving" className="mr-4">Bug solving</label>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    id="techCareer"
                    name="expertise"
                    value="Tech career assistance"
                    onChange={handleChange}
                    checked={inputs.expertise === 'Tech career assistance'}
                    className="mr-2"
                  />
                  <label htmlFor="techCareer" className="mr-4">Tech career assistance</label>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    id="academicSupport"
                    name="expertise"
                    value="Academic support"
                    onChange={handleChange}
                    checked={inputs.expertise === 'Academic support'}
                    className="mr-2"
                  />
                  <label htmlFor="academicSupport">Academic support</label>
                </div>
              </div>
            </div>
            <motion.button 
              type="submit" 
              className="mt-4 bg-teal-500 text-white font-bold text-md py-3 px-8 rounded-full transition-all hover:bg-teal-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign up
            </motion.button>
          </motion.form>
        </div>
        <div className={`flex-1 flex flex-col items-center justify-center bg-card-custom-gradient p-3 ${isDarkMode ? 'bg-card-custom-gradient' :' bg-teal-500 text-white'}`}>
          <h1 className="text-white text-2xl font-[serif]">Already a registered expert?</h1>
          <Link to='/expertlogin'>
            <motion.button 
              type="button" 
              className="mt-6 bg-white text-teal-500 font-bold text-md py-2 px-6 rounded-full transition-all hover:bg-gray-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Sign in
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ExpertSignup;