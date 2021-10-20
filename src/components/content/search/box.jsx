import React from 'react'

export const box = (props) => {
    return (
        <div className="box">
            <div className="content" style={{ 'backgroundColor':  props.color}}>
                <h2>{props.name}</h2>
                <div className="image_container">
                    <img src={props.image} />
                </div>
            </div>
        </div>
    )
}

export default box