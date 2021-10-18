import React from 'react'
import TopSection from '../home/top_section'
import '../../../styles/library/style.scss'
import Global50 from '../../../images/global_50.png'
import PlayIcon from '../home/play_icon'
export const index = () => {
    return (
        <div className="homepage_container">
            <div className="page_container">
                <TopSection />
                <div className="library_playlists">
                    <h2>Playlists</h2>
                    <div className="playlists">
                        <div className="big_playlist">
                            <div className="header">
                                <h2>Liked Songs</h2>
                                <span>14 Liked Song</span>
                            </div>
                        </div>
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
                                <img src={Global50} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">Top 50 - Global</h4>
                            <span className="playlist_dsc">Suanda en cok calinan parcalar icin...</span>
                        </div>
                        <div className="small_playlist">
                        <div className="image">
                                <img src={Global50} />
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