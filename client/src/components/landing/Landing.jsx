
import { useNavigate } from 'react-router-dom';

export const Landing = () => {
     
const  navigate = useNavigate();
    return <div >

        <div className="flex justify-between p-4  ">
           <h2 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>Chosse your profession</h2> 
        </div>
       <div className="flex justify-between">
        <button onClick={() => navigate('/studenthome')}>Student</button>
        <button onClick={() => navigate('/experthome')}>Expert</button>
       </div>
    </div>
}