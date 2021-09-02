import React, { useState } from "react"


const CarsForm = (props) => {
  const [make, setMake] = useState(props.car ? props.car.make : '')
  const [model, setModel] = useState(props.car ? props.car.model : '')
  const [year, setYear] = useState(props.car ? props.car.year : '')
  const [id, setId] = useState(props.car ? props.car.id : '')

  

  const handleSubmit = (e) => {
    e.preventDefault()
    if (props.car) { 
      props.updateCar({ id, make, model, year })
     } else { 
        props.addCar({id: Math.random(), make, model, year})
        // setMake('')
        // setModel('')
        // setYear('')
     }
  }

  return (
    <div>
      <h1>{props.car ? 'Edit Car' : 'Add New Car'}</h1>
      <form onSubmit={handleSubmit}>
        <p>Make</p>
        <input value={make} onChange={(e) => {setMake(e.target.value)}}/>
        <p>Model</p>
        <input value={model} onChange={(e) => {setModel(e.target.value)}}/>
        <p>Year</p>
        <input value={year} onChange={(e) => {setYear(e.target.value)}}/> <br/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default CarsForm