import React from 'react';
import '../styles/links-list.css'


const Linkslist = () => {
    function FieldReference() {
        return (
            <>
                <h1>Field Reference</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Field Name</th>
                            <th>Description</th>
                            <th>Data Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>name</td>
                        </tr>

                        <tr>
                            <td>imgUrl</td>
                        </tr>

                        <tr>
                            <td>firstAppear</td>
                        </tr>

                        <tr>
                            <td>level</td>
                        </tr>

                        <tr>
                            <td>yearCreated</td>
                        </tr>
                        
                        <tr>
                            <td>link</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }


    return (
        <div className='list-container'>
            <div className='list-children-one'>
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

            <div className='list-children-two'>
                <FieldReference />
            </div>
        </div>
    )
}

export default Linkslist