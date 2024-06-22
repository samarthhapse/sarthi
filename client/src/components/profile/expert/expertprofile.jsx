import React, { useState, useEffect } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useTheme } from "../../providers/ThemeProvider";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const ExpertProfile = () => {
  const { isDarkMode } = useTheme();
  const authToken = Cookies.get("authToken");
  const [expert, setExpert] = useState(null);
  const [editing, setEditing] = useState(false);
  const [inputs, setInputs] = useState({});

  if (!authToken) {
    return <div>You have to login first</div>;
  }
  console.log("The Auth Token is: ", authToken);

  const decodedToken = jwtDecode(authToken);
  console.log("The decoded Token is: ", decodedToken);

  const TokenData = decodedToken.userId;
  console.log("The Token data is: ", TokenData);

  useEffect(() => {
    const fetchExpert = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/v1/expert/${TokenData}`
        );
        setExpert(response.data.userDetails);
        setInputs(response.data.userDetails);
        console.log("The Expert Set is: ", expert);
        console.log("The inputs Set is: ", inputs);
      } catch (error) {
        console.error("Error fetching expert data:", error);
      }
    };
    fetchExpert();
  }, [TokenData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    try {
      await axios.put(
        `http://localhost:5001/api/v1/expert/update/${TokenData}`,
        inputs
      );
      setExpert(inputs);
      setEditing(false);
    } catch (error) {
      console.error("Error saving expert data:", error);
    }
  };

  if (!expert) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={`w-full min-h-screen flex items-center justify-center p-4 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"
      }`}>
      <motion.div
        className="w-[900px] flex flex-col rounded-lg shadow-lg overflow-hidden bg-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}>
        <div
          className={`flex-1 flex flex-col items-center justify-center p-10 ${
            isDarkMode ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-900"
          }`}>
          <h1 className="text-4xl font-semibold mb-5">Your Expert Profile</h1>
          <img
            src={expert.avatar}
            alt="Avatar"
            className="mb-6 w-32 h-32 rounded-full object-cover border-4 border-gray-300"
          />
          <div className="w-full mb-4">
            <label className="block text-lg font-medium">Name:</label>
            {editing ? (
              <input
                type="text"
                name="name"
                value={inputs.name}
                onChange={handleChange}
                className="w-full py-2 px-4 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none"
              />
            ) : (
              <p className="py-2 px-4 text-sm bg-gray-100 border border-gray-300 rounded-lg">
                {expert.name}
              </p>
            )}
          </div>
          <div className="w-full mb-4">
            <label className="block text-lg font-medium">Email:</label>
            {editing ? (
              <input
                type="email"
                name="email"
                value={inputs.email}
                onChange={handleChange}
                className="w-full py-2 px-4 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none"
              />
            ) : (
              <p className="py-2 px-4 text-sm bg-gray-100 border border-gray-300 rounded-lg">
                {expert.email}
              </p>
            )}
          </div>
          <div className="w-full mb-4">
            <label className="block text-lg font-medium">Phone Number:</label>
            {editing ? (
              <input
                type="text"
                name="phoneNo"
                value={inputs.phoneNo}
                onChange={handleChange}
                className="w-full py-2 px-4 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none"
              />
            ) : (
              <p className="py-2 px-4 text-sm bg-gray-100 border border-gray-300 rounded-lg">
                {expert.phoneNo}
              </p>
            )}
          </div>
          <div className="w-full mb-4">
            <label className="block text-lg font-medium">Field:</label>
            {editing ? (
              <input
                type="text"
                name="field"
                value={inputs.field}
                onChange={handleChange}
                className="w-full py-2 px-4 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none"
              />
            ) : (
              <p className="py-2 px-4 text-sm bg-gray-100 border border-gray-300 rounded-lg">
                {expert.field}
              </p>
            )}
          </div>
          <div className="w-full mb-4">
            <label className="block text-lg font-medium">Job Title:</label>
            {editing ? (
              <input
                type="text"
                name="jobTitle"
                value={inputs.jobTitle}
                onChange={handleChange}
                className="w-full py-2 px-4 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none"
              />
            ) : (
              <p className="py-2 px-4 text-sm bg-gray-100 border border-gray-300 rounded-lg">
                {expert.jobTitle}
              </p>
            )}
          </div>
          <div className="w-full mb-4">
            <label className="block text-lg font-medium">Expertise:</label>
            {editing ? (
              <select
                name="expertise"
                value={inputs.expertise}
                onChange={handleChange}
                className="w-full py-2 px-4 text-sm bg-gray-100 border border-gray-300 rounded-lg outline-none">
                <option value="Bug solving">Bug solving</option>
                <option value="Tech career assistance">
                  Tech career assistance
                </option>
                <option value="Academic support">Academic support</option>
              </select>
            ) : (
              <p className="py-2 px-4 text-sm bg-gray-100 border border-gray-300 rounded-lg">
                {expert.expertise}
              </p>
            )}
          </div>
          <motion.button
            onClick={editing ? handleSave : handleEdit}
            className="mt-4 bg-teal-500 text-white font-bold text-md py-3 px-8 rounded-full transition-all hover:bg-teal-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            {editing ? "Save" : "Edit"}
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default ExpertProfile;
