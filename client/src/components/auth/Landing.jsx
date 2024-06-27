import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import backgroundImage from "../../assets/main.jpg";

const Landing = () => {
    const navigate = useNavigate();

    return (
        <div
            className="w-full min-h-screen bg-cover bg-center flex items-center justify-center p-0"
            style={{ backgroundImage: `url(${backgroundImage})` }}>
            <motion.div
                className="bg-gray-900 bg-opacity-50 p-8 rounded-lg max-w-lg w-full mx-4" // Added max-w-lg for responsiveness
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}>
                <div className="text-center mb-8">
                    <motion.h2
                        className="text-2xl md:text-4xl font-bold leading-tight tracking-tight text-white"
                        initial={{ y: -50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}>
                        Choose your profession
                    </motion.h2>
                </div>
                <div className="flex flex-col md:flex-row justify-center md:space-x-4">
                    {" "}
                    {/* Adjusted flex and spacing for responsiveness */}
                    <motion.button
                        className="bg-white text-gray-900 font-bold py-2 px-4 rounded shadow-md hover:bg-gray-100 w-full md:w-auto mb-4 md:mb-0" // Added w-full for full width on mobile
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => navigate("/studentlogin")}>
                        Student
                    </motion.button>
                    <motion.button
                        className="bg-white text-gray-900 font-bold py-2 px-4 rounded shadow-md hover:bg-gray-100 w-full md:w-auto" // Added w-full for full width on mobile
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => navigate("/expertlogin")}>
                        Expert
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
};

export default Landing;
