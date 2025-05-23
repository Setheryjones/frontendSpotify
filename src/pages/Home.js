import React from 'react';



function Home() {
  let handleLogin = () => {
    window.location.href = 'https://spoify-converter.onrender.com/spotify/login'
  };
  return (
    <div className="App" style = {{textAlign: 'center', marginTop: '100px'}}>
      <h1> Spotify Playlist App</h1>
      <p>Login with your Spotify account to begin</p>
      <button onClick = {handleLogin} style = {{ padding: '12px 20px', fontSize: '16px' }}>
        Log in with Spotify
      </button>
    </div>
  );
}


export default Home;