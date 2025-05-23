import React from 'react';
import { Button } from '@headlessui/react';




function Home() {
  let handleLogin = () => {
    window.location.href = 'https://spoify-converter.onrender.com/spotify/login'
  };
  return (
    <div className="App" style = {{textAlign: 'center', marginTop: '100px'}}>
      <h1> Spotify Playlist App</h1>
      <p>Login with your Spotify account to begin</p>
      <button onClick = {handleLogin} className="rounded bg-sky-600 px-4 py-2 text-sm text-white data-active:bg-sky-700 data-hover:bg-sky-500">
        Log in with Spotify
      </button>
    </div>
  );
}


export default Home;