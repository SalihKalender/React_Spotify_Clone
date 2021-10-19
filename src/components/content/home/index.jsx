import React, { useState } from 'react'
import '../../../styles/home/style.scss'
import TopSection from './top_section'
import GlobalPlaylists from './global_playlists'
import ElementContext from '../../context'
export const index = () => {
    const [ PlayListContainer, setPlayListContainer ] = useState(null)
    return (
        <div className="homepage_container">
            <ElementContext.Provider value={{PlayListContainer, setPlayListContainer}}>
                <TopSection />
                <GlobalPlaylists />
            </ElementContext.Provider>
        </div>
    )
}

export default index