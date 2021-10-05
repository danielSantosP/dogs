import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import LoginCreate from './Components/Login/LoginCreate';
import LoginForm from './Components/Login/LoginForm';
import LoginPasswordLost from './Components/Login/LoginPasswordLost';
import LoginPasswordReset from './Components/Login/LoginPasswordReset';
import { UserStorage } from './UserContext';
function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />}>
              <Route path="" element={<LoginForm />}/>
              <Route path="criar" element={<LoginCreate />} />
              <Route path="perdeu" element={<LoginPasswordLost />} />
              <Route path="resetar" element={<LoginPasswordReset />} />
            </Route>
          </Routes>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
}

export default App;
