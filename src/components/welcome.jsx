import React from "react";
import imageSrc from '../assets/KFUPMtower.png';
function Welcome() {
    return (
        <div className="max-w-[1248px] w-full flex flex-row">
       <img src={imageSrc} className="sm:block hidden" alt="image" />  
        <div className="flex flex-col 
              justify-center items-start       

              font-almarai font-bold text-sakry
              space-y-4"
              id="home"
              >
                <h1 className="text-4xl sm:text-4xl font-extrabold ">Welcome to KFUPM Club Center</h1> 
                <p>Join where you can find Clubs or Activities that matches your interests <br/>
                Or create your own Club or Activity if you are authorized by signing in </p> 
                <button className="px-4 md:px-4 py-2 md:py-2 rounded-md font-medium 
                flex bg-SGreenDark shadow-3xl hover:bg-transparent transition-colors duration-200 sm:py-3 sm:px-6" >Sign in</button>           
                
                
                 </div>
            </div>
    );
}
export default Welcome;