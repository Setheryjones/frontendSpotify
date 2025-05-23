import React from 'react';




function Home() {
  let handleLogin = () => {
    window.location.href = 'https://spoify-converter.onrender.com/spotify/login'
  };
  return (
    <div className="App" style = {{textAlign: 'center', marginTop: '100px'}}>
      <h1> Spotify Playlist App</h1>
      <p>Login with your Spotify account to begin</p>
        <button onClick = {handleLogin} className="bg-sky-600 text-white px-4 py-2 rounded text-sm hover:bg-sky-500 active:bg-sky-700">
          Log in with Spotify
        </button>
      <h2 className="text-3xl font-bold text-red-600 mb-4">
        Tailwind is definitely working
      </h2>
    </div>
    
  );
}


export default Home;