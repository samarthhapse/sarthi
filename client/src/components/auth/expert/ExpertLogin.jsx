import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { expertLogin } from "../../api/expertapi";
import { useDispatch } from "react-redux";
import { setAuthToken, setExpertData } from "../../../redux/expertSlice";
import { motion } from "framer-motion";
import { useTheme } from "../../providers/ThemeProvider";
import { account } from "../../utils/appwrite";
import Cookies from "js-cookie";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const ExpertLogin = () => {
  const dispatch = useDispatch();
  const { isDarkMode } = useTheme();
  const navigate = useNavigate();

  const [isGoogleLogin, setIsGoogleLogin] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await expertLogin(inputs); // Corrected API call
      console.log("The Response.data.token is: ", response.data.token);

      if (response.status === 200) {
        alert(response.data.message);
        dispatch(setAuthToken(response.data.token));
        dispatch(setExpertData(response.data)); // Corrected dispatch

        // Set cookies
        Cookies.set("authToken", response.data.token, { expires: 7 });
        Cookies.set("expertData", JSON.stringify(response.data), {
          expires: 7,
        }); // Corrected cookie name

        setInputs({
          email: "",
          password: "",
        });
        navigate("/experthome"); // Corrected navigation
      } else {
        alert("Error while logging in");
      }
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  const handleGoogleLogin = async () => {
    try {
      setIsGoogleLogin(true);

      // Authenticating using the AppWrite
      await account.createOAuth2Session(
        "google",
        "http://localhost:5173/expertprofile",
        "http://localhost:5173/fail"
      );
      const user = await getGoogleLoginUser();

      // Checking if we got the User or not from the Google Login
      if (!user || user.message) {
        alert("There was a problem in the Google Auth");
        return;
      }

      // Checking for the Entry in the Database if we have the same user.email or not?
      const data = {
        email: user.email,
        GoogleLogin: true,
      };

      const response = await expertLogin(data); // Corrected API call
      console.log("The Response.data.token is: ", response.data.token);

      if (response.status === 200) {
        alert(response.data.message);
        dispatch(setAuthToken(response.data.token));
        dispatch(setExpertData(response.data.userData)); // Corrected dispatch

        // Set cookies
        Cookies.set("authToken", response.data.token, { expires: 7 });
        Cookies.set("expertData", JSON.stringify(response.data.userData), {
          expires: 7,
        }); // Corrected cookie name

        const authTokenGot = await Cookies.get("authToken");
        console.log("The AuthToken is: ", authTokenGot);
        alert("Testing message for auth token seeing");

        setInputs({
          email: "",
          password: "",
        });
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert(
        "There was an error while handling the Google login: " +
          (error.response?.data?.message || "Google login failed")
      );
    }
  };

  const getGoogleLoginUser = async () => {
    try {
      const user = await account.get();
      renderProfileScreen(user);
      return user;
    } catch (err) {
      renderLoginScreen();
    }
  };

  const renderProfileScreen = async (user) => {
    console.log(user);
  };

  const renderLoginScreen = async () => {
    console.log("Error Have Been caught");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className={`w-full min-h-screen flex items-center justify-center p-4 bg-cover bg-center ${
        isDarkMode ? "bg-custom-gradient text-black" : " bg-white "
      } `}>
      <motion.div
        className="w-[900px] flex rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <div
          className={`flex-[1.5] flex flex-col  p-10 ${
            isDarkMode ? " bg-card-custom-gradient " : " bg-teal-500 text-black"
          }`}>
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}>
            <h1 className="text-4xl font-[serif] mb-5">Expert login</h1>
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={inputs.email}
              required={!isGoogleLogin}
              className="w-[370px] py-4 px-6 mb-8 mt-10 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none transition-all focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
            />
            <div className="relative w-[370px] mb-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                onChange={handleChange}
                value={inputs.password}
                required
                className="w-full py-4 px-6 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none transition-all focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
              />
              <button
                type="button"
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <IoEyeOffOutline size={24} />
                ) : (
                  <IoEyeOutline size={24} />
                )}
              </button>
            </div>
            <a
              href="/expertforget"
              className="text-md font-medium text-gray-950 hover:text-gray-700">
              Forget password?
            </a>
            <div className="flex space-x-4">
              <motion.button
                type="button"
                className="bg-teal-500 text-white font-bold text-md py-3 px-8 rounded-full transition-all hover:bg-teal-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleGoogleLogin}>
                Login in with Google
              </motion.button>
              <motion.button
                type="submit"
                className="bg-teal-500 text-white font-bold text-md py-3 px-8 rounded-full transition-all hover:bg-teal-600"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsGoogleLogin(false)}>
                Sign up
              </motion.button>
            </div>
          </motion.form>
        </div>
        <div
          className={`flex-1 flex flex-col items-center justify-center bg-card-custom-gradient p-3 ${
            isDarkMode ? "bg-card-custom-gradient" : " bg-teal-500 text-white"
          }`}>
          <h1 className="text-white text-2xl font-[serif]">
            Do not have an account?
          </h1>
          <Link to="/expertsignup">
            <motion.button
              type="button"
              className="mt-6 bg-white text-teal-500 font-bold text-md py-2 px-6 rounded-full transition-all hover:bg-gray-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}>
              Sign up
            </motion.button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ExpertLogin;
