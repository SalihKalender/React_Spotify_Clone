import React from 'react'
import BarItems from './bar_items'
import PlayLists from './playlists'
const barlist = () => {
    return (
        <div className="bar_list">
            <BarItems />
            <PlayLists />
        </div>
    )
}

export default barlist