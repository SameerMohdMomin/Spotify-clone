import React, { useState } from 'react';
import './sidebar.css';
import SidebarOption from './component/SidebarOption';
import { useDataLayerValue } from './DataLayer';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";


function Sidebar(){
    const [{ playlists } , dispatch] = useDataLayerValue();
    return(
         <div className="sidebar">
             <img src="https://imgix.bustle.com/uploads/image/2018/10/5/32a337c4-a6e9-4c0e-b512-010bb98e0049-spotify-logo.png?w=1020&h=574&fit=crop&crop=faces&auto=format%2Ccompress&cs=srgb&q=70" className="logo" />
             <SidebarOption Icon={HomeIcon} title="Home" />
             <SidebarOption Icon={SearchIcon} title="Search" />
             <SidebarOption Icon={LibraryMusicIcon} title="Your Labrary" />
              
             <div className="playlist">PLAYLISTS</div>
             <hr/>

            {playlists?.items?.map(playlist => ( 
                 <SidebarOption title={playlist.name} />
            ))}
             
             

             



         </div>
    );


}


export default Sidebar;










