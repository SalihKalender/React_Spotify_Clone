import React from 'react'
import '../../styles/sidebar/style.scss'
import Brand from './brand'
import BarList from './barlist'
const index = () => {
    return (
        <div className="side_container">
            <Brand />
            <BarList />
        </div>
    )
}

export default index