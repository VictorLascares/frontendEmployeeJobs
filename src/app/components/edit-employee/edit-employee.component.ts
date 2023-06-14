import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/classes/employee';
import { GenderService } from 'src/app/services/gender.service';
import { JobService } from 'src/app/services/job.service';
import { Gender } from 'src/app/classes/gender';
import { Job } from 'src/app/classes/job';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {
  constructor(private router: Router, private employeeService: EmployeeService, private genderService: GenderService, private jobService: JobService) { }
  employee: Employee = new Employee();
  gendersArray: Gender[];
  defaultJob: number;
  jobsArray: Job[];

  ngOnInit(): void {
    this.search();
    
    this.genderService.getGenderList().subscribe(data => {
      this.gendersArray = data;
      console.log(JSON.stringify(data));
    });

    this.jobService.getJobList().subscribe(data => {
      this.jobsArray = data;
      console.log(this.jobsArray);
    });
  }



  search() {
    let id = localStorage.getItem("id");
    this.employee.id = + Number(id);

    this.employeeService.searchEmployee(this.employee).subscribe(data => {
      this.employee = data;
      this.defaultJob = this.employee.job.id; 
      console.log(this.defaultJob);
      
      this.employee.birthdate = this.employee.birthdate.split('T')[0]
    })
  }

  edit() {
    this.employeeService.editEmployee(this.employee).subscribe(data => {
    })

    this.router.navigate(["employees"]);
  }
}
