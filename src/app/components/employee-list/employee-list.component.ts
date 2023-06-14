import { Component } from '@angular/core';
import { Employee } from 'src/app/classes/employee';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employeesArray: Employee[];

  constructor(private router: Router, private employeeService: EmployeeService) { }


  ngOnInit(): void {
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employeesArray = data;
      this.employeesArray.forEach(employee => {
        employee.birthdate = employee.birthdate.split('T')[0]
      })
      console.log(JSON.stringify(data));

    });
  }


  Edit(employee: Employee) {
    localStorage.setItem("id", employee.id.toString());
    this.router.navigate([`employees/edit/${employee.id}`])
  }


  Delete(employee: Employee) {
    this.employeeService.deleteEmployee(employee).subscribe(data => {
      this.employeeService.getEmployeeList().subscribe(data => {
        this.employeesArray = data;
      })
    })
  }
}
