import React from 'react'

const Linkslist = () => {
  return (
    <div>
        <ul>
            <li>Get the full list of Monster: <span className='api-route'>/api/monster</span></li>
            <li>Query the API for a specific Digimon by name by passing the name in the URL: <span className='api-route'>/api/monster</span></li>
        </ul>
    </div>
  )
}

export default Linkslist