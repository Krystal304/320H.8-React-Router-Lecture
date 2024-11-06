import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [formDate, setFormDate] = useState('')
  
  const nav = useNavigate()

  function handleChange(e) {
    setFormDate(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    nav(`/greeting/${formDate}`)
  }
  const navigate = useNavigate()
    return (
      <>
     <h1>Home Page</h1>
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} type="text" />
      <input type="submit" />
    </form>
    </>
    )
  }