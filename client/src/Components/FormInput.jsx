import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const FormInput = () => {
    const [input, setInput] = useState('')

    const redirect = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        redirect ("/" + input)
    }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <input type="text" onChange={(e) => setInput(e.target.value)} value={input}/>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default FormInput