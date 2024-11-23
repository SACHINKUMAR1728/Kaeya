import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import App from './App';
import Homepage from './Page/Homepage';
import Login from './Page/Login';
import Register from './Page/Register';
import Dashboard from './Page/Dashboard'; // Import the Dashboard component
import Connect from './Page/Connect';
import CardsPage from './Page/Ownc';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Homepage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="card" element={<CardsPage />} />
      </Route>
      <Route path='/dashboard' element={<App/>}>
      <Route index element={<Dashboard />} /> 
      <Route path='connect' element={<Connect/>}/>
      </Route>
      <Route path="*" element={<App />} /> 
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
