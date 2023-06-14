import { Injectable } from '@angular/core';
import { Gender } from '../classes/gender';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GenderService {

  private baseUrl = 'http://localhost:9000/GenderWebService'

  constructor(private http: HttpClient) { }

  getGenderList() {
    return this.http.get<Gender[]>(`${this.baseUrl}/listar`);
  }
}
