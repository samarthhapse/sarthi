import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import image1 from "../../../assets/img1.png";
import { useTheme } from "../../providers/ThemeProvider";
import { account } from "../../utils/appwrite";
import { studentRegister } from "../../api/studentapi";
import { useDispatch } from "react-redux";
import { setAuthToken } from "../../../redux/studentSlice";

const StudentSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isDarkMode } = useTheme();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);
  const [isGoogleLogin, setIsGoogleLogin] = useState(false);

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (inputs.password !== inputs.confirmPassword) {
        alert("Confirm password does not match.");
        return;
      }
      const response = await axios.post(
        "http://localhost:5001/api/v1/otp/sendotp",
        { email: inputs.email }
      );
      alert(response.data.message);
      setInputs({
        name: "",
        email: "",
        phoneNo: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/otpverifystudent", { state: { userData: inputs } });
    } catch (error) {
      alert(error.response.data.message);
   
