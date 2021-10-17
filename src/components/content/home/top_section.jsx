import React from 'react'
import { useEffect, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import ProfileSrc from '../../../images/profile_picture.png'



const top_section = () => {
    const section_target = useRef(null)
    const handleScroll = function(event) {
        const scroll = window.scrollY
        let opacity = 0
        if(scroll < 46) {
            opacity = scroll / 45
        } 
        else {
            opacity = 1
        }
        if(section_target.current.style.backgroundColor != null) {
            section_target.current.style.backgroundColor = `rgba(0,0,0, ${opacity})` 
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])
    return (
        <div className="top_section" ref={section_target}>
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
    )
}

export default top_section