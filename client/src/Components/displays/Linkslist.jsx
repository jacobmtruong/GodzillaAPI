import React from 'react';
import '../styles/links-list.css'

const Linkslist = () => {
    return (
        <div className='list-container'>
            <ul>
                <li>Get the full list of Monster: <span className='api-route'>/api/monster</span></li>
                <li>Query the API for a specific Monster by name by passing the name in the URL: <span className='api-route'>/api/monster/name</span></li>
                <p className='example'>Capitlize the first intial of the monster's name. Examples:</p>
                <ul>
                    <li className='highlighted'>/api/monster/Mechagodzilla</li>
                    <li className='highlighted'>/api/monster/KingCaesar</li>
                </ul>
            </ul>
        </div>
    )
}

export default Linkslist