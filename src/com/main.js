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
<div className=" rounded-2xl sm:w-[85%] p-6 bg-gradient-to-r to-[#0f1113] from-[#16191c] md:max-w-[40rem]  h-52 md:h-64 cursor-pointer">
{/* Card Video chat */}
<div class="text-3xl mt-[1.5rem] md:text-4xl font-bold">
TRUTH <br />OR DARE
</div>
<div class="float-right">
<button type="button" onClick={()=>{navigate("/play/t", { replace: true });}} class="mt-[1.2rem] md:mt-14 mr-2 btn btn-outline btn-accent text-white" >START</button>
</div>
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