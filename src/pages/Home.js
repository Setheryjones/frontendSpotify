import React from 'react';




function Home() {
  let handleLogin = () => {
    window.location.href = 'https://spoify-converter.onrender.com/spotify/login'
  };
return (
<div className="min-h-screen bg-gray-800 text-white justify-center text-center items-center flex flex-col">
    <h1 classname = "bold "> Spotify Converter App by Sethery </h1>
    <button 
    onClick = {handleLogin}  
    className = "box-border h-10 w-40 border-2 border-teal-900 shadow-slate-700 rounded hover:text-teal-100">
      Login Here
    </button>
</div>
);
}


export default Home;