import React from 'react'
import '../../../styles/home/style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import ProfileSrc from '../../../images/profile_picture.png'
export const index = () => {
    return (
        <div className="homepage_container">
            <div className="top_section">
                <div className="buttons">
                    <div className="button_container">
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                    <div className="button_container">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
                <div className="profile_premium">
                    <button className="profile_button pp_button">
                        YÜKSELT
                    </button>
                    <button className="premium_button pp_button">
                        <img src={ProfileSrc}  />
                        Kalender
                        <FontAwesomeIcon icon={faSortDown} size="2x" />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default index