import { useState } from 'react'

const FormInput = () => {
    const [input, setInput] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        window.open ("/" + input)
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