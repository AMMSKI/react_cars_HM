import React from 'react'
import CarsForm from './CarsForm'

const Cars = ({ cars, deleteCar, updateCar }) => {
  return cars.map((car) => {
  return (
    <div key={car.id} className="car-container">
      <h2>{car.year} {car.make} {car.model}</h2>
      <CarsForm car={car} updateCar={updateCar}/>
      <button onClick={() => deleteCar(car.id)}>Delete</button>
    </div>
  )
})
}

export default Cars