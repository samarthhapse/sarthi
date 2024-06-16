import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { studentLogin } from "../../api/studentapi";
import { useDispatch } from "react-redux";
import { setAuthToken, setStudentData } from "../../../redux/studentSlice";
import { motion } from "framer-motion";
import { useTheme } from "../../providers/ThemeProvider";
const StudentLogin = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await studentLogin(inputs);
      if (response.status === 200) {
        alert(response.data.message);
        dispatch(setAuthToken(response.data.token));
        dispatch(setStudentData(response.data));
        setInputs({
          email: "",
          password: "",
        });
        navigate("/studenthome");
      } else {
        alert("Error while logging in");
      }
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div
      className={`w-full min-h-screen flex items-center justify-center p-4 bg-cover bg-center ${
        isDarkMode ? "bg-custom-gradient text-black" : " bg-white "
      } `}
    >
      <motion.div
        className="w-[900px] flex rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className={`flex-[1.5] flex flex-col  p-10 ${
            isDarkMode ? " bg-card-custom-gradient " : " bg-teal-500 text-black"
          }`}
        >
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl font-[serif] mb-5">Student login</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={inputs.email}
              required
              className="w-[370px] py-4 px-6 mb-8 mt-10 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none transition-all focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
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
            <a
              href="/studentforget"
              className="text-md font-medium text-white hover:text-green-700"
            >
              Forget password?
            </a>
            <motion.button
              type="submit"
              className="mt-4 bg-teal-500 text-white font-bold text-md py-3 px-8 rounded-full transition-all hover:bg-teal-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sign in
            </motion.button>
          </motion.form>
        </div>
        <div
          className={`flex-1 flex flex-col items-center justify-center bg-card-custom-gradient p-3 ${
            isDarkMode ? "bg-card-custom-gradient" : " bg-teal-500 text-white"
          }`}
        >
          <h1 className="text-white text-2xl font-[serif]">
            Do not have an account?
          </h1>
          <Link to="/studentsignup">
            <motion.button
              type="button"
              className="mt-6 bg-white text-teal-500 font-bold text-md py-2 px-6 rounded-full transition-all hover:bg-gray-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Sign up
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default StudentLogin;
