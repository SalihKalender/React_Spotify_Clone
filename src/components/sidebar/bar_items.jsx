import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faSwatchbook } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
const bar_items = () => {
    return (
        <ul className="items_list">
            <li className="active">
                <Link to="/">
                    <FontAwesomeIcon icon={faHome} size="lg"/>
                    <span className="item_text">
                        Home Page
                    </span>
                </Link>   
            </li>
            <li>
                <Link to="/search">
                    <FontAwesomeIcon icon={faSearch} size="lg" />
                    <span className="item_text">
                        Search
                    </span>
                </Link>
            </li>
            <li>
               <Link to="/library">
                <FontAwesomeIcon icon={faSwatchbook} size="lg"/>
                    <span className="item_text">
                        Your Library
                    </span>
               </Link>
            </li>
        </ul>
    )
}

export default bar_items