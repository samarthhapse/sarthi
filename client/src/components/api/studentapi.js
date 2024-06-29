import axios from "axios";
import { useSelector } from "react-redux";

const API_URL = "http://localhost:5000/api/v1/student";

export const studentRegister = (data) =>
    axios.post(`${API_URL}/register`, data, {
        headers: {
            "Content-Type": "application/json",
        },
    });

export const studentLogin = async (data) => {
    try {
        const response = await axios.post(
            "http://localhost:5000/api/v1/student/login",
            data
        );
        return response;
    } catch (error) {
        if (error.response) {
            return error.response;
        } else {
            throw new Error("Network Error");
        }
    }
};

export const studentChangePassword = (data) =>
    axios.post(`${API_URL}/resetpassword`, data);

export const getStudentDetails = (id) => axios.get(`${API_URL}/${id}`);

export const getAllStudents = () => axios.get(`${API_URL}/`);
