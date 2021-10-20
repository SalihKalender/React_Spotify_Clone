import React, { useEffect, useRef, useContext } from 'react'
import TopSection from '../home/top_section'
import '../../../styles/search/style.scss'
import Box from './box'
import ElementContext from '../../context'
import searchDatas from './data/search_datas'
export const index = (props) => {
    const SearchDatas = searchDatas
    const { setPlayListContainer } = useContext(ElementContext)
    const container = useRef(null)
    const is_Search = props.location.pathname
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
                        { 
                            SearchDatas.map((item, index) => {
                                return <Box key={index} color={item.color} name={item.name} image={item.image} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default index