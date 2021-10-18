import React from 'react'
import Album1 from '../../../images/album_1.png'
import Album2 from '../../../images/album_2.png'
import Album3 from '../../../images/album_3.png'
import Album4 from '../../../images/album_4.png'
import Album5 from '../../../images/album_5.png'
import Album6 from '../../../images/album_6.png'
import Album7 from '../../../images/album_7.png'
import Album8 from '../../../images/album_8.png'
import Album9 from '../../../images/album_9.png'
import Album10 from '../../../images/album_10.png'
import Album11 from '../../../images/album_11.png'
import Album12 from '../../../images/album_12.png'
import Album13 from '../../../images/album_13.png'
import Album14 from '../../../images/album_14.png'
import Album15 from '../../../images/album_15.png'
import Album16 from '../../../images/album_16.png'
import Album17 from '../../../images/album_17.png'
import Album18 from '../../../images/album_18.png'
import Album19 from '../../../images/album_19.png'
import Album20 from '../../../images/album_20.png'
import Album21 from '../../../images/album_21.png'
import Global50 from '../../../images/global_50.png'
import Turkey50 from '../../../images/turkey_50.png'
import This_is_1 from '../../../images/this_is_1.png'
import This_is_2 from '../../../images/this_is_2.png'
import This_is_3 from '../../../images/this_is_3.png'
import This_is_4 from '../../../images/this_is_4.png'
import This_is_5 from '../../../images/this_is_5.png'
import This_is_6 from '../../../images/this_is_6.png'

import PlayIcon from './play_icon'

const global_playlists = () => {
    return (
        <div className="global_playlists">
            <div className="playlists">
                <div className="playlist">
                    <h2 className="header">Yakınlarda çalinanlar</h2>
                    <div className="boxes">
                        <div className="box">
                            <div className="image">
                                <img src={Global50} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">Top 50 - Global</h4>
                            <span className="playlist_dsc">Suanda en cok calinan parcalar icin...</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Turkey50} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">Top 50 - Turkey</h4>
                            <span className="playlist_dsc">Suanda en cok calinan parcalar icin...</span>
                        </div>
                    </div>
                </div>
                <div className="playlist">
                    <h2 className="header">
                        100% MUSIC
                        <span>Most Listened 2021</span>
                    </h2>
                    <div className="boxes">
                        <div className="box">
                            <div className="image">
                                <img src={This_is_1} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">This is Ed Sheeran</h4>
                            <span className="playlist_dsc">Ed Sheeran Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={This_is_2} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">This is ZAYN</h4>
                            <span className="playlist_dsc">ZAYN Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={This_is_3} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">This is Drake</h4>
                            <span className="playlist_dsc">Drake Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={This_is_4} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">This is Twenty One Pilots</h4>
                            <span className="playlist_dsc">Twenty One Pilots Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={This_is_5} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">This is XXXTENTACION</h4>
                            <span className="playlist_dsc">XXXTENTACION Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={This_is_6} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">This is Taylor Swift</h4>
                            <span className="playlist_dsc">Taylor Swift Playlist</span>

                        </div>
                    </div>
                </div>
                <div className="playlist">
                <h2 className="header">
                        Yakınlarda çalinanlar
                        <span>2020'nin Seslerini dinle</span>
                    </h2>
                    <div className="boxes">
                        <div className="box">
                            <div className="image">
                                <img src={Album1} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Album2} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Album3} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Album4} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Album5} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Album6} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Album7} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Album8} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Album9} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                    </div>
                </div>
                <div className="playlist">
                <h2 className="header">
                        Yakınlarda çalinanlar
                        <span>2020'nin Seslerini dinle</span>
                    </h2>
                    <div className="boxes">
                        <div className="box">
                            <div className="image">
                                <img src={Album10} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Album11} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Album12} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Album13} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Album14} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Album15} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Album16} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Album17} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        
                        <div className="box">
                            <div className="image">
                                <img src={Album18} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                    </div>
                </div>
                <div className="playlist">
                <h2 className="header">
                        Yakınlarda çalinanlar
                        <span>2020'nin Seslerini dinle</span>
                    </h2>
                    <div className="boxes">
                        <div className="box">
                            <div className="image">
                                <img src={Album19} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Album20} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Album21} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Album5} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Album2} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Album18} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Album13} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Album11} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                        <div className="box">
                            <div className="image">
                                <img src={Album3} />
                                <PlayIcon />
                            </div>
                            <h4 className="playlist_name">KALENDER</h4>
                            <span className="playlist_dsc">Kalender Playlist</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default global_playlists