import React from 'react'
import { auth } from '../FirebaseConfig/firebase';
import { format } from 'date-fns';


const ChatMessage = ({ message }) => {
  // console.log(message)
  const { text, uid, photoURL, email, createdAt } = message;

  const time = createdAt ? format(new Date(createdAt), 'p') : "";
  // console.log(createdAt , " : " , time);

  // console.log(uid === auth.currentUser.uid)

  const isSentByCurrentUser = uid === auth.currentUser.uid;
  const messageClass = isSentByCurrentUser ? 'justify-end' : ' justify-start';
  // console.log(email)
  return (
    <>

      <div className={`flex flex-row p-1 w-[98%]  ${messageClass}  mb-4`}>
        {
          !isSentByCurrentUser ? <img src={photoURL || 'https://placekitten.com/50/50'} alt="User" className=" w-8 h-8 rounded-full mr-2" /> : ""}
          <p className={`p-1 text-sm mx-2 rounded-lg flex flex-col ${uid === auth.currentUser.uid ? 'bg-green-200 text-black' : 'bg-gray-300 text-black'}`}>
            <span className='block text-xs font-semibold  text-gray-600'>{email}</span>
            {text}
            <span className="text-xs text-gray-600 text-right self-end">{time}</span>
          </p>
          {isSentByCurrentUser ? <img src={photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRw-0ohQlLBRmCQ-Z5cuka_EriAsUcmyFNR7QejSjc7_O9Fu0vTHcZKUNF-geNd_PT5kw&usqp=CAU/50/50'}
          alt="User" className=" w-8 h-8 rounded-full mr-2" /> : ""
        }
      </div>
    
    </>
  );
};

export default ChatMessage
