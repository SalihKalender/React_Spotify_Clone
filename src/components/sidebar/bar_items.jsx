import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faSwatchbook } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
const bar_items = () => {
    return (
        <div className="items_list">
                <NavLink activeClassName="active" exact to="/">
                    <FontAwesomeIcon icon={faHome} size="lg"/>
                    <span className="item_text">
                        Home Page
                    </span>
                </NavLink>   
                <NavLink activeClassName="active" to="/search">
                    <FontAwesomeIcon icon={faSearch} size="lg" />
                    <span className="item_text">
                        Search
                    </span>
                </NavLink>
               <NavLink activeClassName="active" to="/library">
                <FontAwesomeIcon icon={faSwatchbook} size="lg"/>
                    <span className="item_text">
                        Your Library
                    </span>
               </NavLink>
        </div>
    )
}

export default bar_items