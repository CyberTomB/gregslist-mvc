import { ProxyState } from "../AppState.js"
import { jobsService } from "../Services/JobsService.js"

function _draw() {
   let template = ''
   ProxyState.jobs.forEach(job => {
      template += job.Template
   })
   document.getElementById('jobs').innerHTML = template
}

export default class JobsController {
   constructor() {
      ProxyState.on('jobs', _draw)
      _draw()
   }

   createJob() {
      event.preventDefault()
      let form = event.target
      let rawJob = {
         jobTitle: form.title.value,
         description: form.description.value,
         rate: parseInt(form.pay.value),
         hours: form.payType.value,
         company: form.company.value
      }
      jobsService.createJob(rawJob)
      form.reset()
   }
}