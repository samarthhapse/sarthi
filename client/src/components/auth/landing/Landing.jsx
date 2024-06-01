import { useNavigate } from 'react-router-dom';


const Landing = () => {
    const navigate = useNavigate();
    return( 
    <div  >
        <div className="flex justify-between p-4  ">
           <h2 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>Choose your profession</h2> 
        </div>
       <div className="flex justify-between">
        <button onClick={() => navigate('/studentlogin')}>Student</button>
        <button onClick={() => navigate('/expertlogin')}>Expert</button>
       </div>
    </div>
    )
}

export default Landing;