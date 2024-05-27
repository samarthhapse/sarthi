import React ,{useState,useEffect} from 'react';
import pre from '../../assets/pre.json';
import Lottie from 'lottie-react';
import App from '../../App';
function Preloader() {
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        setLoading(true);
        setTimeout(() =>{
            setLoading(false)
        },2000)
    },[])

    loading? document.body.style.backgroundColor = "#213547" : document.body.style.backgroundColor = "#fff";
    return(         
    <div>
            {
                loading ?
                <div className="bg-[ #213547]">
                    
                    <Lottie animationData={pre}/>
                </div>
                
                 :
                //Rest Code
                    <App/>
            }
        </div>
     
            
        
  );
}
export default Preloader;