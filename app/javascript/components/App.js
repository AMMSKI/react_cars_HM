import axios from "axios"
import React, { useState } from "react"
import Cars from "./Cars"
import CarsForm from "./CarsForm"


const App = () => {
const [cars, setCars] = useState([])
const [showForm, setShowForm] = useState(false)

  const getCars = async () => {
    try {
      let res = await axios.get('/cars')
      setCars(res.data)
    } catch (err) {
      alert('Unable to get cars data')
      console.log(err)
    }
  }

  const addCar = async (car) => {
    try { 
      let res = await axios.post('/cars', car)
      let newCars = [res.data, ...cars]
      setCars(newCars)
    }catch (err) {
      alert('Unable to save cars data')
      console.log(err)
    }
  }

  const updateCar = async (car) => {
    console.log(car)
    try {
    await axios.put(`/cars/${car.id}`, car)
    const newCars = cars.map((c) => c.id == car.id ? car : c)
    setCars(newCars)
    } catch (err) {
      alert('Unable to update cars data')
      console.log(err)
    }
  }

  const deleteCar = async (id) => {
    try {
      await axios.delete(`/cars/${id}`)
      const newCars = cars.filter((c) => c.id !== id)
      setCars(newCars)
    } catch (err) {
      alert('Unable to delete cars data')
      console.log(err)
    }
  }

  return (
    <div>
      <h1>Cars app</h1>
      <p onClick={() => setShowForm(!showForm)}>{showForm ? 'New Car' : 'Click to add car'}</p>
      {showForm && <CarsForm addCar={addCar}/>}
      <button onClick={getCars}>Get Cars</button>
      <Cars cars={cars} updateCar={updateCar} deleteCar={deleteCar}/>
    </div>
  )
}

export default App