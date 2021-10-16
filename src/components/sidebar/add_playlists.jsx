import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import LikedSongs from '../../image_icons/liked-songs-300.png'
export const add_playlists = () => {
    return (
        <div className="playlists">
            <h2>PLAYLISTS</h2>
            <ul className="playlist_list">
                <li>
                    <FontAwesomeIcon icon={faPlusSquare} size="2x"/>
                    <span>Create Playlist</span>
                </li>
                <li>
                    <img src={LikedSongs} />
                    <span>Liked Songs</span>
                </li>
            </ul>
        </div>
    )
}

export default add_playlists