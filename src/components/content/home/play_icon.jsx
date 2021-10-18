import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export const play_icon = () => {
    return (
        <div className="play_icon">
            <FontAwesomeIcon icon={faPlay} size='1x'/>
        </div>
    )
}

export default play_icon