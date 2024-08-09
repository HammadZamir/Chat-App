import React from 'react'
import { auth } from '../FirebaseConfig/firebase';


const ChatMessage = ({ message }) => {
    // console.log(message)
    const { text, uid,  email} = message;

    // console.log(uid === auth.currentUser.uid)

    const isSentByCurrentUser = uid === auth.currentUser.uid;
    const messageClass = isSentByCurrentUser ? 'ml-[80px] md:ml-[85px] ' : ' mr-[60px] md:mr-[85px]';
    // console.log(email)
    return (
        <>
     
        <div className={`flex flex-col p-1 w-[80%]  ${messageClass} mb-4`}>
        
            {/* <img src={photoURL || 'https://placekitten.com/50/50'} alt="User" className="w-10 h-10 rounded-full mr-2" /> */}
            <p className={`p-1 text-sm mx- rounded-lg ${uid === auth.currentUser.uid ? 'bg-green-200 text-black' : 'bg-gray-300 text-black'}`}>
            <span className='block text-xs font-semibold text-gray-900'>{email}</span> {text}
            </p>
        
        </div>
        
      </>
    );
  };

export default ChatMessage
