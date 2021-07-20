export default class Job {
   constructor({ company, jobTitle, hours, rate = 7.25, description }) {
      this.title = jobTitle
      this.description = description
      this.pay = rate.toLocaleString("en-US", { style: "currency", currency: "USD" })
      this.hours = hours
      this.company = company
   }

   get Template() {
      return `
      <div class="col-md-3 col-sm-2 my-3">
         <div class="car bg-light shadow">
            <div class="p-3">
               <div class="text-center">
                  <p><b>${this.title}</b><p>
               </div>
               <p class="small">${this.company}</p>
               <p>${this.description}</p>
               <p><em>${this.pay} per hour, ${this.hours} hours a week</em></p>
            </div>
         </div>
      </div>
      `
   }
}