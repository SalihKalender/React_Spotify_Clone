import React from 'react'
import BarItems from './bar_items'
import AddPlayLists from './add_playlists'
import PlayLists from './playlists'
import InstallApp from './install_app'
const barlist = () => {
    return (
        <div className="bar_list">
            <BarItems />
            <AddPlayLists />
            <br />
            <div className="hr" />
            <PlayLists />

        </div>
    )
}

export default barlist