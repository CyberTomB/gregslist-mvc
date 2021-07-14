import Car from "./Models/Car.js"
import Home from "./Models/Home.js"
import Job from "./Models/Job.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {

  /** @type {Car[]} */
  cars = [
    new Car({
      make: 'Ford',
      model: 'Pinto',
      year: 1987,
      price: 1200,
      description: 'This Car is HOT!',
      imgUrl: 'https://blog.automedicsafrica.com/wp-content/uploads/2015/08/Impala-vs-Pinto-750x547.jpg'
    }),
    new Car({
      make: 'VW',
      model: 'Gremlin',
      year: 1988,
      price: 3400,
      description: 'Lime Green! You gonna love it',
      imgUrl: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/07/Gremlin-X.jpg'
    })
  ]

  jobs = [
    new Job({
      title: 'Programmer',
      description: 'Looking for a Junior Full Stack Web Developer who is easy to exploit.',
      pay: 19.00,
      payType: 'hourly',
      location: '123 Business Street',
    })
  ]

  homes = [
    new Home({
      bedrooms: 3,
      bathrooms: 2,
      sqft: 1000,
      price: 300000,
      imgUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.AJjEvCphPGzaQDFzXjQlIgHaE8%26pid%3DApi&f=1',
      description: 'Just like a house you would build for yourself in Minecraft!',
      location: '1090 N Minecraft St'
    })
  ]
}


export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
