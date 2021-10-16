import React from 'react'
import BarItems from './bar_items'
import AddPlayLists from './playlists'
const barlist = () => {
    return (
        <div className="bar_list">
            <BarItems />
            <AddPlayLists />
            <br />
            <div className="hr" />
        </div>
    )
}

export default barlist