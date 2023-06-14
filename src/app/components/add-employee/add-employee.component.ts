import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { Employee } from 'src/app/classes/employee';
import { Gender } from 'src/app/classes/gender';
import { GenderService } from 'src/app/services/gender.service';
import { JobService } from 'src/app/services/job.service';
import { Job } from 'src/app/classes/job';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  constructor(private router: Router, private employeeService: EmployeeService, private genderService: GenderService, private jobService: JobService) { }


  employee: Employee = new Employee();
  gendersArray: Gender[];
  jobsArray: Job[];

  ngOnInit(): void {
    this.genderService.getGenderList().subscribe(data => {
      this.gendersArray = data;
      console.log(JSON.stringify(data));
    });

    this.jobService.getJobList().subscribe(data => {
      this.jobsArray = data;
      console.log(JSON.stringify(data));
    });
  }


  saveEmployee() {
    this.employee.birthdate = this.employee.birthdate.split('T')[0];
    console.log(this.employee.birthdate);
    
    this.employeeService.createEmployee(this.employee).subscribe(data => {
    })
    this.router.navigate(["employees"]);
  }
}
