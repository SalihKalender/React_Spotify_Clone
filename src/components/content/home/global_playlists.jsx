import React, { useContext, useEffect, useRef, useState } from 'react'
import datas from './data/palylist_datas'
import Box from './box'
import Element_context from '../../context'
const global_playlists = () => {
    const { setPlayListContainer, PlayListContainer } = useContext(Element_context)
    const container = useRef(null)
    const [setting_item_count, setItemCount]  = useState(0)
    useEffect(() => {
        const container_width = container.current.offsetWidth
        const rounded_width = (Math.floor((container_width / 100)) * 100)
        let item_count = null
        if( rounded_width > 100 ) {
            item_count = Math.floor((rounded_width / 100) / 2) - 2
            setItemCount(item_count)
        }
        else if ( rounded_width < 100 && rounded_width > 10) {
            item_count = Math.floor((rounded_width / 10) / 2) - 2
            setItemCount(item_count)
        }
        setPlayListContainer(container)
        // console.log(PlayListContainer)
    })
    return (
        <div className="global_playlists">
            <div className="playlists" ref={container}>
                <div className="playlist">
                    <h2 className="header">Yakınlarda çalinanlar</h2>
                    <div className="boxes">
                        {
                            datas.new_listened.map(((data, index) => {
                                return <Box key={index} name={data.name} image={data.image} description={data.description} />
                            }))
                        }
                    </div>
                </div>
                <div className="playlist">
                    <h2 className="header">
                        100% MUSIC
                        <span>Most Listened 2021</span>
                    </h2>
                    <div className="boxes">
                        {
                            datas.this_is_list.map(((data, index) => {
                                if(index < setting_item_count) {
                                    return <Box key={index} name={data.name} image={data.image} description={data.description} />
                                }
                            }))
                        }
                    </div>
                </div>
                <div className="playlist">
                <h2 className="header">
                        Yakınlarda çalinanlar
                        <span>2020'nin Seslerini dinle</span>
                    </h2>
                    <div className="boxes">
                        {
                            datas.new_listened2.map(((data, index) => {
                                if(index < setting_item_count) {
                                    return <Box key={index} name={data.name} image={data.image} description={data.description} />
                                }
                            }))
                        }
                    </div>
                </div>
                <div className="playlist">
                <h2 className="header">
                        Yakınlarda çalinanlar
                        <span>2020'nin Seslerini dinle</span>
                    </h2>
                    <div className="boxes">
                        {
                            datas.new_listened3.map(((data, index) => {
                                if(index < setting_item_count) {
                                    return <Box key={index} name={data.name} image={data.image} description={data.description} />
                                }
                            }))
                        }
                    </div>
                </div>
                <div className="playlist">
                <h2 className="header">
                        Yakınlarda çalinanlar
                        <span>2020'nin Seslerini dinle</span>
                    </h2>
                    <div className="boxes">
                        {
                            datas.new_lsitened4.map(((data, index) => {
                                if(index < setting_item_count) {
                                    return <Box key={index} name={data.name} image={data.image} description={data.description} />
                                }
                            }))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default global_playlists