import React, { useEffect, useRef, useContext } from 'react'
import TopSection from '../home/top_section'
import '../../../styles/search/style.scss'
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

import ElementContext from '../../context'

export const index = (props) => {
    const { setPlayListContainer } = useContext(ElementContext)
    const container = useRef(null)
    const is_Search = props.location.pathname
    const random_Items = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    const random_color = () => {
        let colorName = '#';
        for(let i=0; i<6; i++) {
            const random = random_Items[Math.floor(Math.random() * random_Items.length)];
            colorName+=random;
        }
        return colorName
    }
    useEffect(() => {
        setPlayListContainer(container)
    })
    return (
        <div className="homepage_container">
            <div className="page_container" ref={container}>
                <TopSection is_search={is_Search} />
                <div className="search_section_container">
                    <h2 className="header">Hepsine göz at</h2>
                    <div className="playlist_boxes">
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Podcasts</h2>
                                <div className="image_container">
                                    <img src={Album1} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Made for you</h2>
                                <div className="image_container">
                                    <img src={Album2} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>New Singles</h2>
                                <div className="image_container">
                                    <img src={Album3} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Rap</h2>
                                <div className="image_container">
                                    <img src={Album4} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Pop</h2>
                                <div className="image_container">
                                    <img src={Album5} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Rock</h2>
                                <div className="image_container">
                                    <img src={Album6} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Playlists</h2>
                                <div className="image_container">
                                    <img src={Album7} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Covers</h2>
                                <div className="image_container">
                                    <img src={Album8} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Hits</h2>
                                <div className="image_container">
                                    <img src={Album9} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Premier Leauge</h2>
                                <div className="image_container">
                                    <img src={Album10} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>SeriA</h2>
                                <div className="image_container">
                                    <img src={Album11} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>UCL</h2>
                                <div className="image_container">
                                    <img src={Album12} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>UEL</h2>
                                <div className="image_container">
                                    <img src={Album13} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Bundes Liga</h2>
                                <div className="image_container">
                                    <img src={Album14} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Leauge 1</h2>
                                <div className="image_container">
                                    <img src={Album15} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Cinematic</h2>
                                <div className="image_container">
                                    <img src={Album16} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Romantic</h2>
                                <div className="image_container">
                                    <img src={Album17} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Comedy</h2>
                                <div className="image_container">
                                    <img src={Album18} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Development</h2>
                                <div className="image_container">
                                    <img src={Album19} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Frontend</h2>
                                <div className="image_container">
                                    <img src={Album20} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Radio</h2>
                                <div className="image_container">
                                    <img src={Album21} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Bit</h2>
                                <div className="image_container">
                                    <img src={Album5} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Artik</h2>
                                <div className="image_container">
                                    <img src={Album1} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Ulan</h2>
                                <div className="image_container">
                                    <img src={Album3} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Nereye</h2>
                                <div className="image_container">
                                    <img src={Album2} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Kadar</h2>
                                <div className="image_container">
                                    <img src={Album7} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Sürecek</h2>
                                <div className="image_container">
                                    <img src={Album9} />
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="content" style={{ 'backgroundColor':  random_color()}}>
                                <h2>Sonunda</h2>
                                <div className="image_container">
                                    <img src={Album6} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index