// src/components/ChatRoom.js
import React, { useState, useEffect, useRef } from 'react';
import ChatMessage from './ChatMessage';
import { database, auth } from '../FirebaseConfig/firebase';
import { ref, push, onValue, serverTimestamp } from 'firebase/database';
import { signOut } from 'firebase/auth'; // Import signOut function
import { useNavigate } from 'react-router-dom'; // For navigation



const ChatRoom = () => {
  
  const User = auth.currentUser.email;
  // console.log(auth.currentUser.email)

  const dummy = useRef();
  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState('');
  const navigate = useNavigate();


  // console.log("1 : " ,messages);

  const messagesRef = ref(database, 'messages');
  // console.log(messagesRef);
 
  useEffect(() => {
    
    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      // console.log(data);
      const messageList = [];
      for (let id in data) {
      // console.log(data[id]);
        messageList.push({ id, ...data[id] });
      }
      setMessages(messageList);
      // console.log("2 : " ,messages);
      // dummy.current.scrollIntoView({ behavior: 'smooth' });
    });

    return () => unsubscribe();
  }, [messagesRef]);

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL , email } = auth.currentUser;
    // console.log(email)
    await push(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL,
      email,
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };
// console.log("Message : " , messages)
  // Handler to log out the user
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/signIn');
      // User is signed out, and the SignIn component will be shown automatically
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };


  return (
    <>
    <p className='text-sm text-gray-500 md:text-md font-bold '>User: {User}</p>

    <div className="flex m-3 w-full flex-col justify-center items-center max-w-lg p-5 md:p-1 mx-auto ">
      <header className=" border-2 flex justify-between w-full  items-center bg-white mb-5 p-2 rounded-t shadow">
        <h2 className="text-sm font-bold">Chat Room</h2>
        
        <button
          onClick={handleLogout}
          className="bg-red-500 text-white text-sm font-bold px-2 py-1  rounded hover:bg-red-600"
        >
          Log Out
        </button>
      </header>

      <main  className=" bg-custom-image border-2 flex overflow-y-auto h-96 flex-col items-center w-full  mx-auto bg-white p-5 rounded shadow-md  ">
        {messages.map((msg) => (
          <ChatMessage key={msg.id} message={msg}  />
        ))}
        <div ref={dummy}></div>
      </main>

      <form onSubmit={sendMessage} className=" flex mt-2 w-full mx-auto">
        <input
          className="flex-grow border-2  rounded-t shadow  rounded p-2 text-sm"
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Say something nice"
        />
        <button
          type="submit"
          disabled={!formValue}
          className="border-2 text-sm font-bold rounded-full shadow ml-2 bg-blue-500 text-white py px-4  disabled:opacity-50"
        >
          send
        </button>
      </form>
    </div>

    </>
    
  );
};



export default ChatRoom;



