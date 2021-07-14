export default class Home {
   constructor({ bedrooms, bathrooms, sqft, price, imgUrl, description, location }) {
      this.bedrooms = bedrooms
      this.bathrooms = bathrooms
      this.sqft = sqft
      this.price = price.toLocaleString("en-US")
      this.imgUrl = imgUrl
      this.description = description
      this.location = location
   }

   get Template() {
      return `
      <div class="col-md-3 col-sm-2 my-3">
         <div class="car bg-light shadow">
            <img src="${this.imgUrl}" class="w-100" alt="house image">
            <div class="p-3">
              <div class="text-center">
                  <p><b>${this.bedrooms} Br - ${this.bathrooms} Ba - ${this.sqft} Sqft</b></p>
              </div>
              <p class="small">${this.location}</p>
              <p>${this.description}</p>
              <p><em>$${this.price}</em></p>
            </div>
         </div>
      </div>
      `
   }
}