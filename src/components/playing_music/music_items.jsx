import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faTv } from '@fortawesome/free-solid-svg-icons'

import MusicPicture from '../../images/playing_music.png'


const music_items = () => {
    return (
        <div className="music_items">
            <div className="image_container">
                <img src={MusicPicture} />
            </div>
            <div className="infos">
                <h4>Durum Leyla</h4>
                <div>
                    <span><a href="#">Aysegul Aldinc</a></span>
                    <span>,</span>
                    <span> <a href="#">Gokhan Turkmen</a></span>
                </div>
            </div>
            <div className="icons">
                <FontAwesomeIcon icon={faHeart} className="heart_icon" />
                <FontAwesomeIcon icon={faTv} />
            </div>
        </div>
    )
}

export default music_items