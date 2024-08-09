import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth} from '../FirebaseConfig/firebase';


// import { signInWithEmailAndPassword} from 'firebase/auth';




function SignUp() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();



    const createUserWithEmailandPassword = async () => {

        if(password !== confirmPassword && password.length >= 6 ){
            alert("Password do not match");
            return;
        }

        try {
          await createUserWithEmailAndPassword(auth, email, password);
          navigate('/chatRoom');
    
        } catch (err) {
          console.error(err);
          alert('Password lenght should be greater then 5');
        }
      };



    const goToSignIn = ()=>{
        navigate("/signIn")
    }

  return (
    <div className="border-2 p-5 m-5 w-[95%] md:w-1/2 bg-white rounded shadow-md">
      <h2 className="text-2xl text-center font-bold mb-6">Create A New Account</h2>

      <div className="flex flex-col m-5 justify-center items-center p-5">
        <input
          className="w-full border-2 rounded text-md p-2 mb-4"
          type="email"
          placeholder="Set email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="w-full border-2 rounded text-md p-2 mb-4"
          type="password"
          placeholder="Set password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          className="w-full border-2 rounded text-md p-2 mb-4"
          type="password"
          placeholder="Confirm your password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      <div className="flex flex-col items-center">

        <button className="w-36 text-md text-center bg-orange-500 text-white font-bold py-2 rounded mt-"
            onClick={createUserWithEmailandPassword}>
            Sign Up
        </button>

      </div>

        <button className='text-sm mt-5 text-blue-700 font-semibold'
            onClick={goToSignIn} >
            Already Have an Account? Sign In
        </button>

    </div>
  )
}

export default SignUp
