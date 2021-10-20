import React from 'react'
import '../../styles/playing_music/style.scss'
import MusicPicture from '../../images/playing_music.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faTv } from '@fortawesome/free-solid-svg-icons'
import { faRandom } from '@fortawesome/free-solid-svg-icons'
import { faStepBackward } from '@fortawesome/free-solid-svg-icons'
import { faStepForward } from '@fortawesome/free-solid-svg-icons'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faVolumeDown } from '@fortawesome/free-solid-svg-icons'
import { faPodcast } from '@fortawesome/free-solid-svg-icons'
export const index = () => {
    return (
        <div className="playing_container">
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
            <div className="playing_items">
                <div className="playing_icons">
                    <FontAwesomeIcon icon={faRandom} size='1x' />
                    <FontAwesomeIcon icon={faStepBackward} size='1x' />
                    <div className="play_div">
                        <FontAwesomeIcon icon={faPlay} />
                    </div>
                    <FontAwesomeIcon icon={faStepForward} size='1x' />
                    <FontAwesomeIcon icon={faExchangeAlt} size='1x' />
                </div>
                <div className="time_infos">
                    <span>0:57</span>
                    <div className="bar"></div>
                    <span>4:36</span>
                </div>
            </div>
            <div className="setting_items">
                <FontAwesomeIcon icon={faDesktop} size='1x' />
                <FontAwesomeIcon icon={faPodcast} size='1x' />
                <FontAwesomeIcon icon={faVolumeDown} size='1x' />
                <div className="bar"></div>
            </div>
        </div>        
    )
}

export default index