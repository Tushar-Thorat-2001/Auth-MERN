import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Completed from './pages/Completed';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signin" element={<Signin />} /> {/* Route for signin */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </>
  );
};

export default App;
