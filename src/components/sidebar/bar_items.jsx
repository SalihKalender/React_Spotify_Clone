import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faSwatchbook } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
const bar_items = () => {
    return (
        <ul className="items_list">
            <li className="active">
                <NavLink activeClassName="active" to="/">
                    <FontAwesomeIcon icon={faHome} size="lg"/>
                    <span className="item_text">
                        Home Page
                    </span>
                </NavLink>   
            </li>
            <li>
                <NavLink activeClassName="active" to="/search">
                    <FontAwesomeIcon icon={faSearch} size="lg" />
                    <span className="item_text">
                        Search
                    </span>
                </NavLink>
            </li>
            <li>
               <NavLink activeClassName="active" to="/library">
                <FontAwesomeIcon icon={faSwatchbook} size="lg"/>
                    <span className="item_text">
                        Your Library
                    </span>
               </NavLink>
            </li>
        </ul>
    )
}

export default bar_items