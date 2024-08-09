import React from 'react';
import './App.css';
import SignIn from './components/SignIn';
import ChatRoom from './components/ChatRoom';
import { auth } from './FirebaseConfig/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BrowserRouter as Router, Route, Routes ,Navigate } from 'react-router-dom';
import SignUp from './components/SignUp';



function App() {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <div className="flex flex-col items-center min-h-screen bg-gray-100">


        <h2 className="text-xl font-bold p-2 m-5 border-b-2 border-red-600">
          Firebase Project
        </h2>

        <Routes>
          <Route path='/signIn' element={!user ? <SignIn/> : <Navigate to="/chatRoom" />} />
          <Route path='/signUp' element={!user ? <SignUp/> : <Navigate to="/chatRoom" />} />
          <Route path='/chatRoom' element={user ? <ChatRoom/> : <Navigate to="/signIn" />} />
          <Route path='/' element={user ? <Navigate to="/chatRoom" /> : <Navigate to="/signIn" />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;



