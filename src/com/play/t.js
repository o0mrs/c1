import '../../App.css'
import NavBar from '../navbar';
import { useState,useEffect } from "react";
import {auth,app} from '../firebase'
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { getDatabase, ref,onValue, set,onDisconnect,child, get } from "firebase/database";
import { useList } from 'react-firebase-hooks/database';
import { async } from '@firebase/util';
const database =  getDatabase(app);
const Chat =  ()=> {
  
  useEffect(()=>{
    if(stage===0)
    {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              console.log(user)
              
              const uid = user.displayName;
              setuser(uid)
              set(ref(database, 'rooms/' + auth.currentUser.uid), {name:auth.currentUser.displayName,available:0});
              onDisconnect(ref(database, 'rooms/' + auth.currentUser.uid)).remove().catch((err) => {
                if (err) {
                  console.error("could not establish onDisconnect event", err);
                }
              });
            } else {
                navigate("/auth", { replace: true });

            }
          });

    }
},[])
  // const database =  getDatabase(app);
    const [email, setEmail] = useState();
    const [user, setuser] = useState("");

    const [snapshots, loading, error] = useList(ref(database, 'rooms'));

    const [stage, setstage] = useState(0);

    let msgs = [{from:1, msg:'heys'},{from:0, msg:'hey'}]
    let navigate = useNavigate();
useEffect(()=>{
console.log(error)
},[error])

    return(
<div className="max-w-[100vw] max-h-[100vh] text-white  bg-[#121416] 
">
<div className=' h-[100vh]'>
<div className='flex p-4'>
<i class="fa-solid fa-arrow-left text-2xl mt-1"></i>
<img className='rounded-full w-10 h-10 ml-4' src={"https://lh3.googleusercontent.com/a-/AFdZuco9rmTMGt5Rs-ME7YmQ2_gsvyTmu4VGjPX0VcqmQg=s96-c"}/>
<div className="ml-3 grid"><div>
  Name
  <div className="text-xs">
    Age</div></div></div>
    <div>
      <div className='float-right  top-6 right-4 absolute '>
<div className="float-right  " onClick={console.log(snapshots)}>
Skip
</div>
      </div>
    </div>
</div>
<div className="mb-16  flex">



        {loading && <span>List: Loading...</span>}
<div className=''>
{msgs.map((get)=>{
            if(get.from == 1){
              return(

                <div id='dds' className='float-right'>
                  <div className='w-aut max-w-xs'>
                  <div id='msgg' className=" mt-4 bg-gray-900 grid  h-auto float-left rounded-xl p-2">{get.msg}</div>
                  </div>

                </div>
              //   <div className=' '>
              // <span id='rightmsg' className="float grid mt-4 justify-items-end ">{get.msg}</span>
              //   </div>

              )
            }else{
              return(
                <div id='dds' className='float-right'>

                <div id='msgg' className=" mt-4 mr-2 bg-indigo-900 w-auto max-w-xs grid float-right rounded-xl p-2">{get.msg}</div>
                </div>

                // <span className="float-right mt-4 grid justify-items-start bg-gray-900 rounded-xl p-1 pl-2 w-20">{get.msg}</span>
            )

            }
        })}

</div>



        </div>
        <center>
        <div className="grid place-it">

<textarea type="text" value={'msgin'} className='grid bg bg-[#0e0f11]  place-items-center static rounded-xl my-1 py-2 px-12 ' placeholder='Type...' id='inmsg' />
<span id='inmsgcam' className="absolute fas fa-camera text-xl mb-0.5 ml-3"></span>
<span id='inmsgsend' className="absolute text-blue-600 h-10" >send</span>
        </div>
  </center>

</div>
<div>


        </div>



</div>
    )
}
export default Chat;