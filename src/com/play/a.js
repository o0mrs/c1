import React, { useEffect, useState, useRef } from 'react';
import '../../App.css';
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
import NavBar from '..//navbar';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Video = styled.video`
  border: 1px solid blue;
  width: 50%;
  height: 50%;
`;

function Tr() {
  const [yourID, setYourID] = useState("");
  const [users, setUsers] = useState({});
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);

  const userVideo = useRef();
  const partnerVideo = useRef();
  const socket = useRef();

  useEffect(() => {
    socket.current = io.connect("c1api.hop.sh",{ transports : ['websocket']});
    navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
      setStream(stream);
      if (userVideo.current) {
        userVideo.current.srcObject = stream;
      }
    })

    socket.current.on("yourID", (id) => {
      setYourID(id);
    })
    socket.current.on("allUsers", (users) => {
      setUsers(users);
    })

    socket.current.on("hey", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    })
  }, []);

  function callPeer(id) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream: stream,
    });

    peer.on("signal", data => {
        socket.current.emit("callUser", { userToCall: id, signalData: data, from: yourID })
      })
  
      peer.on("stream", stream => {
        if (partnerVideo.current) {
          partnerVideo.current.srcObject = stream;
        }
      });
      
          socket.current.on("callAccepted", signal => {
            setCallAccepted(true);
            peer.signal(signal);
          })
      


  }

  function acceptCall() {
    setCallAccepted(true);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", data => {
      socket.current.emit("acceptCall", { signal: data, to: caller })
    })

    peer.on("stream", stream => {
      partnerVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    console.log(callerSignal)
  }

  let UserVideo;
  if (stream) {
    UserVideo = (
      <Video playsInline muted ref={userVideo} autoPlay />
    );
  }

  let PartnerVideo;
  if (callAccepted) {
    PartnerVideo = (
      <Video playsInline ref={partnerVideo} autoPlay />
    );
  }

  let incomingCall;
  if (receivingCall) {
    incomingCall = (
      <div>
        <h1>{caller} is calling you</h1>
        <button onClick={acceptCall}>Accept</button>
      </div>
    )
  }
  return(
    <div className="max-w-[100vw] text-white pt-1 bg-[#121416] h-[96rem] 
    ">
    <div className='md:block sm:hidden'>

    <NavBar />
    </div>
    <div></div>
    <div className="md:p-10">
    
    {/* <div className="grid md:hidden place-items-center">
    <div className="rounded-xl sm:w-[99vw] sm:h-[45vh]  border">
    <video className="h-full w-full border border-base-300 rounded-2xl" playsInline muted ref={userVideo} autoPlay></video></div>
<div className="rounded-xl sm:w-[99vw] sm:h-[45vh]  border border-base-300">
<video className="h-full w-full border border-base-300 rounded-2xl" playsInline muted ref={userVideo} autoPlay></video></div>
    </div> */}

    <div className=" md:flex place-items-center">
    <div className="rounded-xl mr-4 sm:w-[99vw] sm:h-[45vh]  ">
    <video className="h-full w-full border-2 rounded-xl border-base-300" playsInline ref={partnerVideo} autoPlay></video>
</div>
<div className="rounded-xl sm:w-[99vw] sm:h-[45vh]  ">
<video className="h-full w-full border border-base-300 rounded-2xl" playsInline muted ref={userVideo} autoPlay></video>
</div>
    </div>
    {Object.keys(users).map(key => {
          if (key === yourID) {
            return null;
          }
          return (
            <button onClick={() => callPeer(key)}>Call {key}</button>
          );
        })}
        {incomingCall}
    {/* <input type='text' onClick={(e)=>{setEmail(e.target.value)}}>
    </input>
    <button className=" mr-3 text-sm text-white btn  btn-outline btn-" onClick={()=>{joinRoomById(email)}}>D</button>
    <button className=" mr-3 text-sm text-white btn  btn-outline btn-" onClick={()=>{camera(email)}}>Dd</button> */}

    {/* <div className="grid text-center font-bold text-4xl mt-24">
    ROUND ONE
    </div> */}
    {/* <div className="sm:hidden md:flex">

<button className=" mr-3 text-sm text-white btn  btn-outline btn-accent rounded-xl">
NEXT
</button>
<button className=" mr-3 text-sm text-white btn  btn-outline btn-error rounded-xl">
STOP
</button>
<button className=" mr-3 text-sm text-white btn  btn-outline btn-primary rounded-xl">
READY
</button>
    </div> */}

            </div>
    
    
    
    </div>
        )
//   return (
//     <Container>
//       <Row>
//         {UserVideo}
//         {PartnerVideo}
//       </Row>
//       <Row>
        // {Object.keys(users).map(key => {
        //   if (key === yourID) {
        //     return null;
        //   }
        //   return (
        //     <button onClick={() => callPeer(key)}>Call {key}</button>
        //   );
        // })}
//       </Row>
    //   <Row>
    //     {incomingCall}
    //   </Row>
//     </Container>
//   );
}

export default Tr;