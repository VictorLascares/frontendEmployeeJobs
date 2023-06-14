import { Component } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { Router } from '@angular/router';
import { Job } from 'src/app/classes/job';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent {
  constructor(private router: Router, private jobService: JobService) { }

  
  job: Job = new Job();

  
  saveJob() {
    this.jobService.createJob(this.job).subscribe(data => {
    })
    this.router.navigate(["jobs"]);
  }

}
