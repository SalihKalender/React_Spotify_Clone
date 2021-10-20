import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRandom } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { faStepBackward } from '@fortawesome/free-solid-svg-icons'
import { faStepForward } from '@fortawesome/free-solid-svg-icons'
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons'

const playing_items = () => {
    return (
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
    )
}

export default playing_items