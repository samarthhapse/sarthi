import React from 'react'
import Lottie from 'lottie-react';
import err from '../../assets/err.json'
function Error(){
    return(
        <div>
            <div className="flex justify-center relative top-[8.5rem]">
                  <div className='w-80 h-80'><Lottie animationData={err}/> </div> 
                </div>   
        </div>
    )
}

export default Error;