
export const authEndpoint = 
"https://accounts.spotify.com/authorize";

const redirectUri = "https://sameermohdmomin.github.io/Spotify-clone/";

const clientId = "f1db8cc6d7b9448b8f241c9ba7c4368e";

const scopes =[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",

];

export const getTokenFromUrl = () => {
    return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) =>{

        var parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]); 
        return initial;
    }, {});
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
    )}&response_type=token&show_dialog=true`;