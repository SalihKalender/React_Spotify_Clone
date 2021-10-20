import React, { useEffect, useContext, useRef } from 'react'
import TopSection from '../home/top_section'
import '../../../styles/library/style.scss'
import ElementContext from '../../context'
import BigPlaylist from './big_playlist'
import LibraryDatas from './data/library_datas'
import SmallPlaylist from './small_playlist'
export const index = () => {
    const LibraryPlaylists = LibraryDatas
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
                        {
                            LibraryPlaylists.map((item, index) => {
                                return <SmallPlaylist key={index} name={item.name} description={item.description} image={item.image} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index