import React from 'react'
import '../../styles/playing_music/style.scss'

import MusicItems from './music_items'
import PlayingItems from './playing_items'
import SettingItems from './setting_items'
export const index = () => {
    return (
        <div className="playing_container">
            <MusicItems />
            <PlayingItems />
            <SettingItems />
        </div>        
    )
}

export default index