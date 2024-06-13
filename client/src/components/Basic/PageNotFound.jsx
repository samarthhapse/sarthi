import Lottie from 'lottie-react';
import err from '../../assets/err.json'
function Error(){
    return(
        <div>
            <div className="p-0 [overflow-x:hidden] bg-black">
            {/* <div className='flex justify-center'>
                        <div><a href='/'><button className='absolute z-10 bg-[#213547] p-2 rounded-md text-white'>Return To Home Page</button> </a> </div>
                    </div> */}
                    <div className='flex justify-center items-center w-[100vw] h-[100vh] absolute z-10'>
                <div><a href='/'><button className='b bg-[#213547]  p-2 rounded-md text-white hover:bg-[white] hover:text-[#213547]'>Return To Home Page</button> </a> </div>
                </div>
                  <div><Lottie animationData={err}/> </div> 
                    
                </div>   
        </div>
    )
}

export default Error;