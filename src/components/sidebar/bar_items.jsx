import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faSwatchbook } from '@fortawesome/free-solid-svg-icons'

const bar_items = () => {
    return (
        <ul className="items_list">
            <li className="active">
                <FontAwesomeIcon icon={faHome} size="lg"/>
                <span className="item_text">
                    Home Page
                </span>
            </li>
            <li>
                <FontAwesomeIcon icon={faSearch} size="lg" />
                <span className="item_text">
                    Search
                </span>
            </li>
            <li>
                <FontAwesomeIcon icon={faSwatchbook} size="lg"/>
                <span className="item_text">
                    Your Library
                </span>
            </li>
        </ul>
    )
}

export default bar_items