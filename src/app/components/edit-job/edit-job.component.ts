import { Component } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { Job } from 'src/app/classes/job';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent {
  constructor(private router: Router, private jobService: JobService) { }
  job: Job = new Job();

  ngOnInit() {
    this.search();
  }

  search() {
    let id = localStorage.getItem("id");
    this.job.id = + Number(id);

    this.jobService.searchJob(this.job).subscribe(data => {
      this.job = data;
    })
  }

  edit() {
    this.jobService.editJob(this.job).subscribe(data => {
    })

    this.router.navigate(["jobs"]);
  }
}
