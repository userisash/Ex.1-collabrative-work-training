import {useState} from 'react'

const Jokes = () => {
  const [numbOfJokes,setNumbOfJokes]=useState(0)
    const handleChange=(e)=>{
        setNumbOfJokes(e.target.value)
        console.log("working")
    }

  return (
    <div>
        <label>
            decide how many jokes you wanna see:
        <input onChange={handleChange} value={numbOfJokes} name="number" />

        </label>
    </div>
  )
}

export default Jokes