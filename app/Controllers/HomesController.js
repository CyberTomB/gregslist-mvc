import { ProxyState } from "../AppState.js"
import { homesService } from "../Services/HomesService.js"

function _draw() {
   let template = ''
   ProxyState.homes.forEach(home => {
      template += home.Template
   })
   document.getElementById('homes').innerHTML = template
}

export default class HomesController {
   constructor() {
      ProxyState.on('homes', _draw)
      _draw()
   }

   createHome() {
      event.preventDefault()
      let form = event.target
      let rawHome = {
         bedrooms: form.bedrooms.value,
         bathrooms: form.bathrooms.value,
         sqft: parseInt(form.sqft.value),
         price: parseInt(form.price.value),
         description: form.description.value,
         imgUrl: form.imgUrl.value || 'https://via.placeholder.com/200',
         location: form.location.value,
      }
      homesService.createHome(rawHome)
      form.reset()
   }
}