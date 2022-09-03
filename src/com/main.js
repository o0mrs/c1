import '../App.css'
import NavBar from './navbar';
import { useState,useEffect } from "react";
import {Signupa,auth} from './firebase'
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Main = ()=>{
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
                  
                  const uid = user.displayName;
                  setuser(uid)
                } else {
                    navigate("/auth", { replace: true });

                }
              });

        }
    },[])
    return(
<div className="max-w-[100vw] text-white  bg-[#121416] h-[96rem] 
">
<div>

<NavBar />
</div>
<div>

<div className="grid place-items-center md:mt-14 sm:mt-12">
<div className=" rounded-xl sm:w-[85%] md:max-w-[40rem] border h-52 md:h-64 cursor-pointer">
Card Video chat
</div>
<div className=" rounded-xl sm:w-[85%] md:max-w-[40rem] border mt-12 h-52 md:h-64 cursor-pointer">
Tik tac tok
</div>
</div>
        </div>



</div>
    )
}
export default Main;