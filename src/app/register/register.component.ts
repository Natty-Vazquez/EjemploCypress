import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  nombre: string = '';
  apellido: string = '';
  registrado: boolean = false;

  registrarEstudiante() {
    // Lógica para registrar al estudiante
    // Por ahora, simplemente establecemos la variable registrado en true
    this.registrado = true;
  }
}
