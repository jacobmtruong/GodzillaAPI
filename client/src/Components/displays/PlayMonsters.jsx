import React from 'react'
import '../styles/playmonsters.css'

const PlayMonsters = (props) => {
    const result = props.result;
    const error = props.error;
    
    return (
        <div>
            {
                result.length > 0?
                result.map((item, index) => {
                    return (
                        <div key={index} className='monster-card'>
                            <img src={item.imgUrl} alt="img" className='monster-image'/>
                            <p>Name: {item.name}</p>
                            <p>First Appear: {item.firstAppear}</p>
                            <p>Level: {item.level}</p>
                            <p>Year Created: {item.yearCreated}</p>
                            <a href={item.link} style={{ margin: '0' }}>More about {item.name}</a>
                        </div>
                    )
                }) : <p>{error}</p>
            }
        </div>
    )
}

export default PlayMonsters