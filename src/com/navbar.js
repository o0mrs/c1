import { Logouta } from "./firebase";
import { useState,useEffect } from "react";
import {Signupa,auth} from './firebase'
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const NavBar = ()=>{
  const [a, seta] = useState(0);
  const [pfp, setpfp] = useState('https://skyex.me/logo.png')
  let navigate = useNavigate();
  useEffect(()=>{

        onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log(user)
              
              const pg = user.photoURL;
              setpfp(pg)
              seta(1)
            } else {
                // navigate("/auth", { replace: true });

            }
          });

    
},[])
    return(
        <header>
    <div className=" pt-[1rem] pl-[1rem] sm:pt-[0.3rem] ">
      {a == 1&& <div className="">
<i className="fa-solid mt-5 mr-4 text-xl text-white float-right fa-bars"></i>
</div>}
 <div>
    {/* logo */}


    <div className="dropdown">
    <img tabindex="0" className="md:h-[2.6rem] md:w-[2.6rem] md:mt-2 sm:h-[2.6rem] sm:mt-2 float-right  sm:w-[2.6rem] rounded-full" alt='logo' src={pfp}></img>

  <ul tabindex="0" className="dropdown-content menu p-2 shadow bg-base-300 text-white rounded-box mt-16 ml-6 w-52">
    <li onClick={()=>{navigate('/home',{replace:true})}}><a>home</a></li>
    <li onClick={Logouta} className='text-red-600'><a>Log out</a></li>
  </ul>
</div>
 </div>
 <div >

{a == 0 &&(
<>
<div className="md:hidden">
<i className="fa-solid -mt-10 mr-4 text-xl text-white float-right fa-bars"></i>
</div>
<div className="md:flex	 -mt-12 float-right  sm:hidden">
<div className="text-md p-3 mr-3 cursor-pointer text-white " onClick={()=>{navigate('/auth',{replace:true})}}>
    Sign in
    </div>
    <div className=" border rounded-lg cursor-pointer p-3 mr-4 text-md text-white " onClick={()=>{navigate('/auth',{replace:true})}}>
    Sign up
    </div>

</div>
</>

)}
 </div>
  </div>
</header>
    )
}
export default NavBar;