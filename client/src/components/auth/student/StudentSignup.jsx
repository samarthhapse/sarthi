import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import image1  from "../../../assets/img1.png";
const StudentSignup = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    phoneNo: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs, [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if(inputs.password !== inputs.confirmPassword) {
        alert('Confirm password does not match.');
        return;
      }
      const response = await axios.post('http://localhost:5000/api/v1/otp/sendotp', { email: inputs.email });
      alert(response.data.message);
      setInputs({
        name: '',
        email: '',
        phoneNo: '',
        password: '',
        confirmPassword: '',
      });
      navigate("/otpverifystudent", { state: { userData: inputs } });
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-5 bg-cover bg-center bg-custom-gradient text-white">
      <motion.div
        className="w-full md:w-[900px] flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        
        <div className="md:flex-[1.5] flex flex-col items-center justify-center bg-white p-10 bg-card-custom-gradient text-black">
        <div className="flex justify-start items-start pb-2 md:pb-6 text-xl md:text-2xl font-bold"><h1 className=" text-green-400 md:text-2xl">Sarthi</h1></div>
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            
            <h1 className="text-4xl font-[serif] mb-5 ">Create Your Account</h1>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={inputs.name}
              required
              className="w-full md:w-[370px] py-4 px-6 mb-5 mt-8 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none transition-all focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
              />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={inputs.email}
              required
              className="w-full md:w-[370px] py-4 px-6 mb-5 mt-8 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none transition-all focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
              />
            <input
              type="text"
              placeholder="Phone number"
              name="phoneNo"
              onChange={handleChange}
              value={inputs.phoneNo}
              required
              className="w-full md:w-[370px] py-4 px-6 mb-5 mt-8 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none transition-all focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
              />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={inputs.password}
              required
              className="w-full md:w-[370px] py-4 px-6 mb-5 mt-8 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none transition-all focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
              />
            <input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              onChange={handleChange}
              value={inputs.confirmPassword}
              required
              className="w-full md:w-[370px] py-4 px-6 mb-5 mt-8 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none transition-all focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
              />
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
        <div className="md:w-[50%] flex flex-col items-center justify-center bg-teal-500 p-3 bg-card-custom-gradient text-black">
          <img src={image1}alt="Hello" height={300} width={300}/>
          <h1 className="text-white text-2xl font-[serif]">
            Already a registered student?
          </h1>
          <Link to="/studentlogin">
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

export default StudentSignup;
