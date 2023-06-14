import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../classes/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:9000/EmployeeWebService'

  constructor(private http: HttpClient) { }

  getEmployeeList() {
    return this.http.get<Employee[]>(`${this.baseUrl}/listar`);
  }

  createEmployee(employee: Employee) {
    return this.http.post<Employee>(`${this.baseUrl}/guardar`, employee)
  }

  editEmployee(employee: Employee) {
    return this.http.post<Employee>(`${this.baseUrl}/editar`, employee)
  }

  searchEmployee(employee: Employee) {
    return this.http.get<Employee>(`${this.baseUrl}/buscar/${employee.id}`)
  }

  deleteEmployee(employee: Employee) {
    return this.http.get<Employee>(`${this.baseUrl}/eliminar/${employee.id}`)
  }
}
