import React from 'react';
import '../styles/links-list.css'


const Linkslist = () => {
    function FieldReference() {
        return (
            <>
                <p className='fieldreference' style={{ marginBottom: '20px' }}>Field Reference</p>
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
                            <td><span className='fieldname'>name</span></td>
                            <td>Monster's name</td>
                            <td>String</td>
                        </tr>

                        <tr>
                            <td><span className='fieldname'>imgUrl</span></td>
                            <td>Monster's image</td>
                            <td>String</td>
                        </tr>

                        <tr>
                            <td><span className='fieldname'>firstAppear</span></td>
                            <td>Monster's first appeared on screen</td>
                            <td>String</td>
                        </tr>

                        <tr>
                            <td><span className='fieldname'>level</span></td>
                            <td>Monster's power level</td>
                            <td>String</td>
                        </tr>

                        <tr>
                            <td><span className='fieldname'>yearCreated</span></td>
                            <td>Year monster was created</td>
                            <td>Number</td>
                        </tr>

                        <tr>
                            <td><span className='fieldname'>link</span></td>
                            <td>Monster's descriptive information</td>
                            <td>String</td>
                        </tr>
                    </tbody>
                </table>
            </>
        )
    }


    return (
        <div className='list-container'>
            <div className='list-children-one'>
                <ul style={{ margin: '0' }}>
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