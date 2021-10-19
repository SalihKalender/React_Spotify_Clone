import React from 'react'
import PlayIcon from './play_icon'
export const box = (props) => {
    return (
        <div className="box">
            <div className="image">
                <img src={props.image} />
                <PlayIcon />
            </div>
            <h4 className="playlist_name">{props.name}</h4>
            <span className="playlist_dsc">{props.description}</span>
        </div>
    )
}

export default box