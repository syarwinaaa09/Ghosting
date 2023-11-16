import React, { useEffect } from 'react';
import './App.css';
import WebcamCapture from './WebcamCapture';
import Preview from './Preview';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Chats from './Chats';
import ChatView from './ChatView';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/appSlice';
import Login from './Login';
import { auth } from './firebase';
import GhostingLogo from "./ghosting-high-resolution-logo-transparent.png"

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          username: authUser.displayName,
          profilePic: authUser.photoURL,
          id: authUser.uid,
        }))
      } else {
        dispatch(logout())
      }
    })
  }, [])
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ): (
          <>
          <img className="app__logo" src={GhostingLogo} alt="" />
          <div className="app__body">
            <div className="app__bodyBackground">
            <Routes>
              <Route path="/chats/view" element={<ChatView />} />
              <Route path="/chats" element={<Chats />} />
              <Route path="/preview" element={<Preview />} />
              <Route path="/" element={<WebcamCapture />} />
            </Routes>
          </div>
        </div>
        </>
      )}
        
      </Router>
    </div>
  );
}

export default App;
