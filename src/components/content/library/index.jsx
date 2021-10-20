import React, { useEffect, useContext, useRef } from 'react'
import TopSection from '../home/top_section'
import '../../../styles/library/style.scss'
import Global50 from '../../../images/global_50.png'
import Turkey50 from '../../../images/turkey_50.png'
import Album10 from '../../../images/album_10.png'
import PlayIcon from '../home/play_icon'
import ElementContext from '../../context'
import BigPlaylist from './big_playlist'
export const index = () => {
    const { setPlayListContainer } = useContext(ElementContext)
    const container = useRef(null)
    useEffect(() => {
        setPlayListContainer(container)
    })
    return (
        <div className="homepage_container">
            <div className="page_container" ref={container}>
                <TopSection />
                <div className="library_playlists">
                    <h2>Playlists</h2>
                    <div className="playlists">
                        <BigPlaylist />
                        <div className="small_playlist">
                             <div className="image">
                                <img src={Global50} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">Top 50 - Global</h4>
                            <span className="playlist_dsc">Suanda en cok calinan parcalar icin...</span>
                        </div>
                        <div className="small_playlist">
                        <div className="image">
                                <img src={Turkey50} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">Top 50 - Global</h4>
                            <span className="playlist_dsc">Suanda en cok calinan parcalar icin...</span>
                        </div>
                        <div className="small_playlist">
                        <div className="image">
                                <img src={Album10} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">Top 50 - Global</h4>
                            <span className="playlist_dsc">Suanda en cok calinan parcalar icin...</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index