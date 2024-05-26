import { useState } from "react"
import { changePassword } from "../api/expertapi"
import { useNavigate } from "react-router-dom"


export const ExpertForget = () => {

    const[formData, setFormData] = useState({
        email:'',
        current_password:'',
        new_password :'',
    })
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

       
        try {
            const response = await changePassword(formData);
            alert(response.data.message);     
            navigate('/expertlogin')
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return <div>

<section className="bg-gray-50 dark:bg-gray-900">
    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">

            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h2 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">Reset password</h2>

             <form  onSubmit={handleSubmit} >
                <div className="grid w-full item-center gap-2 justify-items-start"> 
                    
                    <label htmlFor="">Email</label>
                    <input
                         className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            
                     type="email"
                    placeholder="uremail@gmail.com"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    />

                    <label htmlFor="">CurrentPassword</label>
                    <input 
                          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 

                    type="password"
                    name="current_password"
                    placeholder="••••••••"
                    onChange={handleChange}
                    value={formData.current_password}
                     />

                     <label htmlFor="">New Password</label>
                     <input 
                           className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            
                     type="password"
                      name="new_password"
                      placeholder="••••••••"
                      onChange={handleChange}
                      value={formData.new_password}
                     />
                </div>

                <div className="pt-4">
                    <button type="submit">Reset</button>
                </div>
            </form>
        </div>
        </div>
    </section>
    </div>
}