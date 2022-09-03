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
<i class="fa-solid mt-5 mr-4 text-xl text-white float-right fa-bars"></i>
</div>}
 <div>
    {/* logo */}


    <div class="dropdown">
    <img tabindex="0" className="md:h-[3.2rem] md:w-[3.2rem] sm:h-[3.3rem] sm:mt-2 md:mt-0 float-right  sm:w-[3.1rem] rounded-full" alt='logo' src={pfp}></img>

  <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-300 text-white rounded-box mt-16 ml-6 w-52">
    <li><a>Item 1</a></li>
    <li onClick={Logouta} className='text-red-600'><a>Log out</a></li>
  </ul>
</div>
 </div>
 <div >

{a == 0 &&(
<>
<div className="md:hidden">
<i class="fa-solid -mt-10 mr-4 text-xl text-white float-right fa-bars"></i>
</div>
<div className="md:flex	 -mt-12 float-right  sm:hidden">
<div className="text-md p-3 mr-3 cursor-pointer text-white ">
    Sign in
    </div>
    <div className=" border rounded-lg cursor-pointer p-3 mr-4 text-md text-white ">
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