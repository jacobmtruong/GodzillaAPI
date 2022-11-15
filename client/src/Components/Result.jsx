import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

const Result = () => {

    const { input } = useParams()
    
    const [result, setResult] = useState({})

    useEffect(() => {
    axios.get(`http://localhost:8000/api/${input}`)
        .then(res => {
            setResult(res.data)
            console.log(res.data);
        })
        .catch(err => {console.log(err, {replace: true})})

    }, [])

    return (
        <div>
            {
                JSON.stringify(result)
            }
        </div>
    )
}

export default Result