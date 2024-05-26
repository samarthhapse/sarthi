import axios from "axios";

const API_URL = 'http://localhost:5000/api/v1/student';

export const register = (data) => 
    axios.post(`${API_URL}/register`, data);

export const login = (data) => 
    axios.post(`${API_URL}/login`, data);

export const changePassword = (data) => 
    axios.post(`${API_URL}/resetpassword`, data);

export const getStudentDetails = (id) =>
     axios.get(`${API_URL}/studentDetails/${id}`);

export const getAllStudents = () => 
    axios.get(`${API_URL}/getAllStudents`);

