import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop } from '@fortawesome/free-solid-svg-icons'
import { faVolumeDown } from '@fortawesome/free-solid-svg-icons'
import { faPodcast } from '@fortawesome/free-solid-svg-icons'

const setting_items = () => {
    return (
        <div className="setting_items">
            <FontAwesomeIcon icon={faDesktop} size='1x' />
            <FontAwesomeIcon icon={faPodcast} size='1x' />
            <FontAwesomeIcon icon={faVolumeDown} size='1x' />
            <div className="bar"></div>
        </div>
    )
}

export default setting_items