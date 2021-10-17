import React from 'react'
import '../../../styles/home/style.scss'
import TopSection from './top_section'
import GlobalPlaylists from './global_playlists'
export const index = () => {
    return (
        <div className="homepage_container">
            <TopSection />
            <GlobalPlaylists />
        </div>
    )
}

export default index