import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Email } from 'src/app/classes/email';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router, private emailService: EmailService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      destinatario: '',
      asunto: '',
      mensaje: ''
    })
  }
  email: Email = new Email();
  checkoutForm;

  ngOnInit() {
  }

  enviarCorreo(clientData: any) {
    const { destinatario, asunto, mensaje } = clientData;
    let erEmail = /^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}\.[0–9]{1,3}])|(([a-zA-Z\-0–9]+\.)+[a-zA-Z]{2,}))$/;
    const alerta = document.querySelector("#alert");
    if (alerta) {
      if (!destinatario || !asunto || !mensaje) {
        alerta.classList.add("alert", "alert-danger");
        alerta.textContent = "Todos los campos son obligatorios";
        return;
      }
      if (!erEmail.test(destinatario)) {
        alerta.classList.add("alert", "alert-danger");
        alerta.textContent = "Correo no valido";
        return;
      }
      alerta.classList.remove("alert", "alert-danger");
      alerta.classList.add("alert", "alert-success");
      alerta.textContent = "Se envio el correo";

      this.emailService.sendEmail(clientData).subscribe(data => {

      })
      this.checkoutForm.reset();
    }

  }



}
