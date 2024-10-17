import { useState } from "react"

const Team = () => {
    const [team , setTeam] = useState(11)
    const handleAdd = () => {
        const newTeam = team + 1
        setTeam(newTeam)
    }
    const handleRemove = () => {
        const newTeam = team - 1
        setTeam(newTeam)
    }
  return (
    <>
    
    <h1>Plaer : {team}</h1>
    <button onClick={handleAdd}>Add</button>
    <button onClick={handleRemove}>Remove</button>
    
    </>
  )
}

export default Team
