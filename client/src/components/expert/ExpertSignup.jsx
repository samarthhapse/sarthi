import { useState } from "react"
import { register } from "../api/expertapi"
import { useNavigate } from "react-router-dom"

export const ExpertSignup = () => {
    
    const[formData, setFormData] = useState({
          name: '',
          email: '',
          phoneNo: '',
          expertise: '',
          field: '',
          college: '',
          jobTitle: '',
          password: '',
          confirmPassword: '',
    })
 const navigate = useNavigate();
    const handleChange = (e) => {
        setFormData({
            ...formData, 
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
           const response = await register(formData);
            alert(response.data.message)

            setFormData({
                name: '',
                email: '',
                phoneNo: '',
                expertise: '',
                field: '',
                college: '',
                jobTitle: '',
                password: '',
                confirmPassword: '',
            })
            navigate('/expertlogin')
        } catch(e) {
            alert(e.response.data.message)
        }
       
    }

    return <div>

<section className="bg-gray-50 dark:bg-gray-900">

<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
         <h3 className="text-2xl font-semibold leading-none tracking-tight"> Expert signup</h3>
        </div>

    <div className="p-6 pt-6">

        <form action="" onSubmit={handleSubmit}>
        <div className="grid w-full item-center gap-4  justify-items-start">

                <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                <input 
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                type="text" 
                name="name"
                placeholder="name"
                onChange={handleChange}
                value={formData.name}
                required
                />
         
             <label htmlFor="">Email</label>
             <input
                 className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              type="email"
              name="email"
              placeholder="name@gmail.com"
              onChange={handleChange}
              value={formData.email}
              required
              />

              <label >Phone No</label>
              <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
               type="text" 
               name="phoneNo"
               placeholder="97******35"
               onChange={handleChange}
               value={formData.phoneNo}
               required
               />

               <label htmlFor="">Expertise</label>
               <input 
                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
               type="text"
               name="expertise"
               placeholder="Expertise"
               onChange={handleChange}
               value={formData.expertise}
               required
               />

               <label htmlFor="">Field</label>
               <input 
                   className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
               type="text" 
               name="field"
               placeholder="web technology.."
               onChange={handleChange}
               value={formData.field}
               required
               />

            <label htmlFor="">College</label>
            <input 
                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            type="text"
            name="college"
            placeholder="IIT kanpur.."
            onChange={handleChange}
            value={formData.college}
            required
            />

         <label htmlFor="">JobTitle</label>
          <input 
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          type="text" 
          name="jobTitle"
          placeholder="senior software engineer"
          onChange={handleChange}
          value={formData.jobTitle}
          required
          />

          <label htmlFor="">Password</label>
          <input 
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          type="password"
           name="password"
           placeholder="••••••••"
           onChange={handleChange}
           value={formData.password}
           required
          />

          <label htmlFor="">Confirm Password</label>
          <input 
              className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          type="password" 
           name="confirmPassword"
           placeholder="••••••••"
           onChange={handleChange}
           value={formData.confirmPassword}
          />

            </div>

            <div className="pt-5">
                <button type="submit">Register</button>
            </div>
        </form>
        </div>
        
        <div className="pb-6">
            Already have an account - <a href="/expertlogin">Login</a>
        </div>
        </div>
        
        </section>

    </div>
}