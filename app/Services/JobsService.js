import { ProxyState } from "../AppState";
import Job from "../Models/Job.js"

class JobsService {
   createJob(rawJob) {
      ProxyState.jobs = [...ProxyState.jobs, new Job(rawJob)]
   }
}

export const jobsService = new JobsService()