import '../App.css'
import NavBar from './navbar';
import { useReadChannelState } from '@onehop/react';

import { useChannelMessage } from '@onehop/react';
import { useEffect,useState } from 'react';

const Home = ()=>{
     const { state } = useReadChannelState('dd');
    
	const [chatMessages, setChatMessages] = useState([]);

	// in this example, USER_MESSAGE is an event that you'd send to the channel from your backend
    useChannelMessage('dd', 'MSG', (message)=> {

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
        <div className="sm:max-w-[90vw] md:max-w-[90rem] text-5xl md:text-7xl text-center font-bold roboto">Your new <br className='md:hidden'/> way to shop</div>

    </div>
            <div className="flex items-center justify-center text-[#8B949E] mt-5 ">
                <div className="sm:max-w-[90vw] md:max-w-[45rem] roboto text-lg text-center roboto">
                A new generation of store software: more features, functionalities and stability with a modern design that can fit to any store needs.

                </div>

        </div>
        <div className="grid place-items-center mt-7">
        <button className="btn  hover:shadow-md b border-0 hover:bg-white hover:shadow-[#ffffff6a] btn-md bg-white focus:text-black focus:bg-white outline-0 text-black text btn-lg md:mt-6 roboto" >REQUEST A DEMO</button>
                </div>
                <div className="grid place-items-center mt-14 ">
                    <div className="sm:max-w-[91vw] md:max-w-[45rem]">
                    <img alt='product showcase' className="img-responsive rounded-xl" src='https://cdn.dribbble.com/users/257709/screenshots/14298975/media/825332be8d7d2649ab8382ce5779622a.png?compress=1&resize=1600x1200&vertical=top '></img>

                    </div>
                </div>
</div>
</div>
    )
}
export default Home;