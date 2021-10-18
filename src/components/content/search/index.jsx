import React from 'react'
import TopSection from '../home/top_section'
export const index = (props) => {
    const is_Search = props.location.pathname
    return (
        <div className="homepage_container">
            <div className="page_container">
                <TopSection is_search={is_Search} />
            </div>
        </div>
    )
}

export default index