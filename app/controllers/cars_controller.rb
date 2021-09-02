class CarsController < ApplicationController
  

  def app 
    render component: 'App'
  end
  
  def index
    cars = Car.all 
    render json: cars
  end

  def create
    car = Car.new(cars_params)
    if car.save
      render json: car
    else
      render json: {errors: item.errors}, status: :unprocessable_entity
    end
  end

  def update 
    car = Car.find(params[:id])
    if car.update(cars_params)
      render json: car
    else
    end
  end


  def destroy 
    @car = Car.find(params[:id])
    render json: @car.destroy
  end


private

def cars_params
  params.required(:car).permit(:id, :make, :model, :year)
end



end
