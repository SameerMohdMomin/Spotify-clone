import React from 'react';
import './body.css';
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SongRow from './SongRow';

function Body({ spotify }){
    const [{discover_weekly} , dispatch] = useDataLayerValue();

    return(
        <div className="body">
            <Header spotify={spotify} />
            <div className="body_info">
                <img className="discover" src={discover_weekly?.images[0].url} alt="discover weekly" />
            <div className="body_info_text">
                        <strong>PLAYLIST</strong>
                        <h2>DISCOVER WEEKLY</h2>
                        <p>{discover_weekly?.description}</p>
            </div>
            </div>

            <div className="body_songs">
            <div className="body_icons">
            <PlayCircleFilledIcon fontSize="large" className="body_shuffle" />
            <FavoriteIcon />
            <MoreHorizIcon />
            </div>

            {discover_weekly?.tracks.items.map((item) => (
                <SongRow track={item.track} />
            ))}
            </div>
        </div>
   );


}

export default Body;