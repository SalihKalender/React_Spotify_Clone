import React from 'react'

import PlayIcon from '../home/play_icon'
const small_playlist = (props) => {
    return (
        <div className="small_playlist">
            <div className="image">
                <img src={props.image} />
                <PlayIcon />
            </div>
            <h4 className="playlist_name">{props.name}</h4>
            <span className="playlist_dsc">{props.description}</span>
        </div>
    )
}

export default small_playlist