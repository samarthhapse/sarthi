import { useNavigate } from 'react-router-dom';

import backgroundImage from '../../assets/main.jpg';


const Landing = () => {
    const navigate = useNavigate();
    return( 
        <div className="w-full min-h-screen bg-cover bg-center flex items-center justify-center p-0" style={{ backgroundImage: `url(${backgroundImage})` }}>
            
            <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg">
                <div className="text-center mb-8">
                    <h2 className='text-2xl md:text-4xl font-bold leading-tight tracking-tight text-white'>
                        Choose your profession
                    </h2> 
                </div>
                <div className="flex justify-center space-x-4">
                    <button 
                        className="bg-white text-gray-900 font-bold py-2 px-4 rounded shadow-md hover:bg-gray-100"
                        onClick={() => navigate('/studentlogin')}
                    >
                        Student
                    </button>
                    <button 
                        className="bg-white text-gray-900 font-bold py-2 px-4 rounded shadow-md hover:bg-gray-100"
                        onClick={() => navigate('/expertlogin')}
                    >
                        Expert
                    </button>
                </div>
            </div>
        </div>
   

    )
}

export default Landing;