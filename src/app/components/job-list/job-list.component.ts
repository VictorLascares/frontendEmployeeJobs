import { Component } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { Job } from 'src/app/classes/job';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent {
  jobsArray: Job[];

  constructor(private router: Router, private jobService: JobService) { }


  ngOnInit(): void {
    this.jobService.getJobList().subscribe(data => {
      this.jobsArray = data;
    });
  }


  Edit(job: Job) {
    localStorage.setItem("id", job.id.toString());
    this.router.navigate([`jobs/edit/${job.id}`])
  }


  Delete(job: Job) {
    this.jobService.deleteJob(job).subscribe(data => {
      this.jobService.getJobList().subscribe(data => {
        this.jobsArray = data;
      })
    })
  }
}
