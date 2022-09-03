// getUserMedia({
//     audio: true,
//     video: {
//       width: { min: 1024, ideal: 1280, max: 1920 },
//       height: { min: 576, ideal: 720, max: 1080 }
//     }
//   })
import '../../App.css'
import ReactLoading from 'react-loading';
import NavBar from '..//navbar';
import { useState,useEffect } from "react";
import {auth} from '../firebase'
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
  };
const Tr = ()=>{
    const [email, setEmail] = useState("");
    const [user, setuser] = useState("");
    const [error, seterror] = useState("");
    const [stage, setstage] = useState(0);
    let navigate = useNavigate();

    useEffect(()=>{
        if(stage===0){
            onAuthStateChanged(auth, (user) => {
                if (user) {
                  console.log(user)
                  setstage(1)
                  const uid = user.displayName;
                  setuser(uid)
                } else {
                    navigate("/auth", { replace: true });

                }
              });

        }
    },[])
    if(stage == 0 ){
return(
    <div className="max-w-[100vw]   bg-[#121416] h-[96rem] 
    ">
    <div>
    
    <NavBar />
    </div>
    <div>
    
    <div className='grid place-items-center mt-[30vh] text-white w-screen'>
    <ReactLoading type={'bubbles'} color={'#ffffff'} height={'3rem'} width={'3rem'} />

    
    </div>
            </div>
    
    
    
    </div>
)
    }else{
        return(
            <div className="max-w-[100vw] text-white  bg-[#121416] h-[96rem] 
            ">
            <div>
            
            <NavBar />
            </div>
            <div className="md:p-10">
            <Webcam
            className='sm:w-full md:max-w-[26rem]'
    audio={false}
    height={1080}
    screenshotFormat="image/jpeg"
    width={1920}
    videoConstraints={videoConstraints}
 />

                    </div>
            
            
            
            </div>
                )
    }

}
export default Tr;