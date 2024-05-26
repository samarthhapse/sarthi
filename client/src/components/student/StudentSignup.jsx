import React , { useState } from "react"
import { register } from "../api/studentapi";
import { useNavigate } from "react-router-dom";

export const StudentSignup = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNo: '',
        password: '',
        confirmPassword: '',
    })

    const nevigate = useNavigate();

    const handlechange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

      try{
        const response = await register(formData);
        alert(response.data.message);

        //reset
        setFormData({
            name: '',
            email: '',
            phoneNo: '',
            password: '',
            confirmPassword: '',
        });
        nevigate("/studentlogin");
       } catch(error) {
        alert(error.response.data.message)
       }
   };

    return <div>

<section className="bg-gray-50 dark:bg-gray-900">

<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
         <h3 className="text-2xl font-semibold leading-none tracking-tight"> Student Signup</h3>
        </div>

    <div className="p-6 pt-6">
       
   <form onSubmit={handleSubmit}>
   <div className="grid w-full item-center gap-4  justify-items-start">

      
      <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="name">Name  </label>
            <input   
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
             type="text"
             name="name"
             placeholder="Name"
             onChange={handlechange}
             value={formData.name}
             required
             />
   
           
     
            <label >Email </label>
            <input 
             className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              type="email"
              name="email"
              placeholder="ur@gmail.com"
              onChange={handlechange}
              value={formData.email}
              required
            />
        

            <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Phone No: </label>
            <input  
             className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
               type="text"
               name="phoneNo"
               placeholder="Phone no"
               onChange={handlechange}
               value={formData.phoneNo}
               required
            />
     

         <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Password</label>
         <input  
           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            type="password"
            name="password"
            placeholder="password"
            onChange={handlechange}
            value={formData.password}
            required
         />
         
         
         <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Confirm Password</label>
         <input 
         className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
           type="password"
           name="confirmPassword"
           placeholder="confirm Password"
           onChange={handlechange}
           value={formData.confirmPassword}
           required
         />

     
       </div>
            <div className="pt-5">
            <button type="submit">Register</button>
          </div>
          
        </form>
   </div>
     
        <div className="pb-5">
            <h3>already have an account -
                 <a href="/studentlogin">sign In</a>
            </h3>
          </div>

          </div>
   </section>
    </div>
}