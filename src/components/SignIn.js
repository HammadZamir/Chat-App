// src/components/SignIn.js
import React, { useState } from 'react';
import { auth, googleProvider } from '../FirebaseConfig/firebase';
import { signInWithEmailAndPassword, signInWithPopup  } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; // For navigation


function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const signInWithEmailandPassword = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/chatRoom');

    } catch (err) {
      console.error(err);
      alert('User not found with this Email and Password.');
    }
  };






  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      navigate('/chatRoom');

    } catch (err) {
      console.error(err);
      alert('Error signing in with Google.');

    }
  };




  const goToSignUp = () => {
    navigate('/signUp'); 
  };


  return (

    <div className="border-2 p-5 m-5 w-[95%] md:w-1/2 bg-white rounded shadow-md">
      <h2 className="text-2xl text-center font-bold mb-6">Welcome to ChatApp</h2>

      <div className="flex flex-col m-5 justify-center items-center p-5">
        <input
          className="w-full border-2 rounded text-md p-2 mb-4"
          type="email"
          placeholder="Your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border-2 rounded text-md p-2 mb-4"
          type="password"
          placeholder="Your password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex flex-col items-center">
        <button
          className="w-36 text-md text-center bg-orange-500 text-white font-bold py-2 rounded mt-"
          onClick={signInWithEmailandPassword}
        >
          Sign In
        </button>

        <button
          className="w-52 text-sm text-center bg-blue-500 text-white font-semibold py-2 px-4 rounded mt-4"
          onClick={signInWithGoogle}
        >
          Sign In with <span className='text-xl'>Google</span>
        </button>

      </div>

      <button className='text-sm mt-5 text-blue-700 font-semibold'
        onClick={goToSignUp} >
        Don't have an account? Create one
      </button>

    </div>
  );
}

export default SignIn;




