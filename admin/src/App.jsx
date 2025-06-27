import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Orders";
import Login from "./components/Login";
import { ToastContainer} from 'react-toastify';

export const backendUrl = import.meta.env.VITE_BACKEND_URL;
console.log('backendUrl:',backendUrl);
export const currency = '$'


const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '');
  console.log('token comming from login.jsx:', token);

  useEffect(()=>{
    localStorage.setItem('token', token);
  },[token])

  return (
    <div className="bg-gray-50 min-h-screen">

      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      
      {token === "" ? (
        <Login setToken = {setToken}/>
      ) : (
        <>
          <Navbar setToken = {setToken} />
          <hr />
          <div className="flex w-full">
            <Sidebar></Sidebar>

            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add token = {token}/>}></Route>
                <Route path="/list" element={<List token = {token}/>}></Route>
                <Route path="/orders" element={<Order token = {token}/>}></Route>
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
