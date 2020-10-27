import './App.css';
import Login from './Login';
import { useState, useEffect } from 'react';
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {

  const [token, setToken] = useState(null);
  const [{ user }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if(_token){
      dispatch({
        type: "SET_TOKEN",
        token: _token ,
      });

      setToken(_token)
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist('37i9dQZF1DX8xfQRRX1PDm').then(response =>
       dispatch({
         type: "SET_DISCOVER_WEEKLY",
         discover_weekly:response,
       })
        );
    }
    console.log("i have a token" , token);

  }, []);

  console.log("hello" , user);
  console.log("hey" , token);

  return (
    <div className="App">
      {
        token ? ( <Player spotify={spotify} /> ) : ( <Login /> )
      }
    
       </div>
  );
}

export default App;
