
import React, { useState,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [Errors,setErrors] = useState("");
  const [emailserror,setemailserror] = useState('');
  const [passerror,setpasserror] = useState('');

  const userLogin = useSelector((state) => state.auth);
  const { loading, error, userInfo } = userLogin; // Destructure userInfo from userLogin

  const handleLogin = (e) => {
    e.preventDefault();
    

    if(!email || !password){
      setErrors('All fields are required.');
    }

    if(!email){
      setemailserror("email is required");
    }

    if(!password){
      setpasserror("password is required")
    }
    
    

    dispatch(login(email, password));
   
    
  };

  useEffect(() => {
    if (userInfo && userInfo.token) {
      // If user is logged in, navigate to the completed page
      navigate('/completed');
    }
  }, [userInfo, navigate]);
  return (
    <div className="bg-grey-lighter h-full my-[5%]  flex flex-col">
      {Errors ?<div className="text-red-500 text-center">{Errors}</div> :error && <div className="text-red-500 text-center">{error}</div>}
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign In</h1>
        {}
          <form onSubmit={handleLogin}>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailserror && <div className="text-red-500 text-center">{emailserror}</div>}
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
              {passerror && <div className="text-red-500 text-center">{passerror}</div>}
            <button
              type="submit"
              className="w-full text-center py-3 bg-blue-400 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1 text-cyan-50"
            >
              {loading ? 'Loading...' : 'LogIn'}
            </button>
            <button className="w-full text-center py-3 bg-blue-400 rounded bg-green text-black hover:bg-green-dark focus:outline-none my-1 text-cyan-50"   onClick={() => {navigate("/signup"); setErrors(" ");}}>
            
            Register
          
            </button>
          </form>
        </div>

        
      </div>
    </div>
  );
};

export default Signin;
