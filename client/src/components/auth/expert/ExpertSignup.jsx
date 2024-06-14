import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

const ExpertSignup = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const avatarInputRef = useRef(null);
  const [error, setError] = useState(null);

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phoneNo: "",
    expertise: "",
    field: "",
    jobTitle: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setError(null);
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (
      [...Object.values(inputs), image].some((input) => !input || input === "")
    ) {
      setError("all fields are required");
      return;
    }
    try {
      const response = await axios.post(
        "http://localhost:5000/api/v1/otp/sendotp",
        { email: inputs.email }
      );
      alert(response.data.message);
      setInputs({
        name: "",
        email: "",
        phoneNo: "",
        expertise: "",
        field: "",
        jobTitle: "",
        password: "",
        confirmPassword: "",
      });
      navigate("/otpverifyexpert", { state: { userData: inputs } });
    } catch (error) {
      alert(error.response.data.message);
    }
  };

  const addAvatar = () => {
    avatarInputRef.current.click();
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center p-5 bg-cover bg-center bg-custom-gradient text-white">
      <motion.div
        className="w-full md:w-[900px] flex flex-col md:flex-row rounded-lg shadow-lg overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="md:flex-[1.5] flex flex-col items-center justify-center bg-white p-10 bg-card-custom-gradient text-white">
          <h1 className="text-4xl font-[serif] mb-5">Create Your Account</h1>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            required
            className=" hidden"
            ref={avatarInputRef}
          />
          {preview && (
            <img
              src={preview}
              alt="Avatar Preview"
              style={{ width: "120px", height: "120px", borderRadius: "50%" }}
            />
          )}
          <button
            onClick={addAvatar}
            type="button"
            className=" mt-6 bg-green-400 w-32 h-12 rounded-lg text-xl border-none hover:bg-green-500 active:bg-green-600"
          >
            Add Avatar
          </button>
          <motion.form
            onSubmit={handleSubmit}
            className="flex flex-col items-center w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
              value={inputs.name}
              required
              className="w-full md:w-[370px] py-4 px-6 mb-8 mt-10 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none transition-all focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
              value={inputs.email}
              required
              className="w-full md:w-[370px] py-4 px-6 mb-8 mt-10 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none transition-all focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
            />
            <input
              type="text"
              placeholder="Phone number"
              name="phoneNo"
              onChange={handleChange}
              value={inputs.phoneNo}
              required
              className="w-full md:w-[370px] py-4 px-6 mb-8 mt-10 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none transition-all focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
            />
            <input
              type="text"
              placeholder="Field"
              name="field"
              onChange={handleChange}
              value={inputs.field}
              required
              className="w-full md:w-[370px] py-4 px-6 mb-8 mt-10 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none transition-all focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
            />
            <input
              type="text"
              placeholder="Job title"
              name="jobTitle"
              onChange={handleChange}
              value={inputs.jobTitle}
              required
              className="w-full md:w-[370px] py-4 px-6 mb-8 mt-10 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none transition-all focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={inputs.password}
              required
              className="w-full md:w-[370px] py-4 px-6 mb-4 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none transition-all focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
            />
            <input
              type="password"
              placeholder="Confirm password"
              name="confirmPassword"
              onChange={handleChange}
              value={inputs.confirmPassword}
              required
              className="w-full md:w-[370px] py-4 px-6 mb-4 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none transition-all focus:border-teal-500 focus:ring focus:ring-teal-500 focus:ring-opacity-50"
            />
            <div className="mb-4 mr-32">
              <div className="mr-40">
                <h3 className="text-md text-gray-700 font-md mb-2">
                  Expertise:
                </h3>
              </div>

              <div className="flex flex-col">
                <div className="flex">
                  <input
                    type="radio"
                    id="bugSolving"
                    name="expertise"
                    value="Bug solving"
                    onChange={handleChange}
                    checked={inputs.expertise === "Bug solving"}
                    className="mr-2"
                  />
                  <label htmlFor="bugSolving" className="mr-4 text-gray-700">
                    Bug solving
                  </label>
                </div>
                <div className=" flex">
                  <input
                    type="radio"
                    id="techCareer"
                    name="expertise"
                    value="Tech career assistance"
                    onChange={handleChange}
                    checked={inputs.expertise === "Tech career assistance"}
                    className="mr-2"
                  />
                  <label htmlFor="techCareer" className="mr-4  text-gray-700 ">
                    Tech career assistance
                  </label>
                </div>
                <div className="flex">
                  <input
                    type="radio"
                    id="academicSupport"
                    name="expertise"
                    value="Academic support"
                    onChange={handleChange}
                    checked={inputs.expertise === "Academic support"}
                    className="mr-2"
                  />
                  <label
                    htmlFor="academicSupport"
                    className="mr-4  text-gray-700"
                  >
                    Academic support
                  </label>
                </div>
              </div>
            </div>
            {error && <p className=" text-red-500 text-sm">{error}</p>}
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
        <div className="md:w-[50%] flex flex-col items-center justify-center bg-teal-500 p-3 bg-card-custom-gradient text-white">
          <h1 className="text-white text-2xl font-[serif]">
            Already a registered expert?
          </h1>
          <Link to="/expertlogin">
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
