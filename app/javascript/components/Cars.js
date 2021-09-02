import React from 'react'
import CarsForm from './CarsForm'

const Cars = ({ cars, deleteCar, updateCar }) => {
  return cars.map((car) => {
  return (
    <div key={car.id}>
      <h1>{car.year} {car.make} {car.model}</h1>
      <CarsForm car={car} updateCar={updateCar}/>
      <button onClick={() => deleteCar(car.id)}>Delete</button>
    </div>
  )
})
}

export default Cars