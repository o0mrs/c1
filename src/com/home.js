import '../App.css'
import NavBar from './navbar';
import { useReadChannelState } from '@onehop/react';

import { useChannelMessage } from '@onehop/react';
import { useEffect,useState } from 'react';
import { useNavigate } from "react-router-dom";
const Home = ()=>{
     const { state } = useReadChannelState('dd');
     let navigate = useNavigate();
	const [chatMessages, setChatMessages] = useState([useReadChannelState('dd')]);

	// in this example, USER_MESSAGE is an event that you'd send to the channel from your backend
    useChannelMessage('dd', 'MSG', (message)=> {
        if(message.subscription)
        setChatMessages([...chatMessages, message]);
    });


    return(
<div className="max-w-[100vw] bga h-[96rem] ">

<NavBar />
<div>
    {chatMessages.map((message, index) => {
        
        console.log(chatMessages)
    })}
    <div className="flex items-center justify-center text-white sm:mt-16 md:mt-36
    +">
        <div className="sm:max-w-[90vw] md:max-w-[90rem] text-5xl md:text-7xl text-center font-bold roboto">Your new <br className='md:hidden'/> way to Chat</div>

    </div>
            <div className="flex items-center justify-center text-[#8B949E] mt-5 ">
                <div className="sm:max-w-[90vw] md:max-w-[45rem] roboto text-lg text-center roboto">
some random text with alot and alot and alot of texttex ttexttext  texttexttext texttext
                </div>

        </div>
        <div className="grid place-items-center mt-7">
        <button className="btn  hover:shadow-md b border-0 hover:bg-white hover:shadow-[#ffffff6a] btn-md bg-white focus:text-black focus:bg-white outline-0 text-black text btn-lg md:mt-6 roboto" onClick={()=>{
            navigate('/auth',{replace:true})
        }}>Start</button>
                </div>
                <div className="grid place-items-center mt-14 ">
                    <div className="sm:max-w-[91vw] md:max-w-[45rem]">

                    </div>
                </div>
</div>
</div>
    )
}
export default Home;