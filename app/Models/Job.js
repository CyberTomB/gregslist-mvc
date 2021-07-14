export default class Job {
   constructor({ title, description, pay, payType, location }) {
      this.title = title
      this.description = description
      this.pay = pay.toLocaleString("en-US")
      this.payType = payType
      this.location = location
   }

   get Template() {
      return `
      <div class="col-md-3 col-sm-2 my-3">
         <div class="car bg-light shadow">
            <div class="p-3">
               <div class="text-center">
                  <p><b>${this.title}</b><p>
               </div>
               <p class="small">${this.location}</p>
               <p>${this.description}</p>
               <p><em>$${this.pay} ${this.payType}</em></p>
            </div>
         </div>
      </div>
      `
   }
}