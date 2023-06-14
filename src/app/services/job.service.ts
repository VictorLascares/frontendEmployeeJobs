import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Job } from '../classes/job';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  constructor(private http: HttpClient) { }
  private baseUrl = 'http://localhost:9000/JobWebService/'


  getJobList() {
    return this.http.get<Job[]>(`${this.baseUrl}listar`);
  }

  createJob(job: Job) {
    return this.http.post<Job>(`${this.baseUrl}guardar`, job);
  }

  deleteJob(job: Job) {
    return this.http.get<Job>(`${this.baseUrl}eliminar/${job.id}`);
  }

  searchJob(job: Job) {
    return this.http.get<Job>(`${this.baseUrl}buscar/${job.id}`);
  }

  editJob(job: Job) {
    return this.http.post<Job>(`${this.baseUrl}editar`, job);
  }
}
