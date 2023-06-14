import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Email } from '../classes/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private baseUrl = 'http://localhost:9000/EmailWebService'

  constructor(private http: HttpClient) { }


  sendEmail(email: Email) {
    return this.http.post<String>(`${this.baseUrl}/enviarCorreo`, email);
  }
}
