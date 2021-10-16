import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'

const install_app = () => {
    return (
        <div className="install_app">
            <FontAwesomeIcon icon={faArrowDown} />
            <span>Install App</span>
        </div>
    )
}

export default install_app