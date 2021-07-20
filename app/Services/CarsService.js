import { ProxyState } from "../AppState.js"
import Car from "../Models/Car.js"
import { api } from './AxiosService.js'


class CarsService {

  constructor() {
    this.getAllCars()
  }
  createCar(rawCar) {
    debugger
    ProxyState.cars = [...ProxyState.cars, new Car(rawCar)]
  }

  async getAllCars() {
    try {
      const res = await api.get('cars')
      console.log(res.data)
      ProxyState.cars = res.data.map(c => new Car(c))
    } catch (error) {
      console.error(error)
    }
  }
}


// Singleton Only one instance is ever made and the same instance is always exported
export const carsService = new CarsService()