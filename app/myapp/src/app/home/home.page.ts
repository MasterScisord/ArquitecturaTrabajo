import { Component } from '@angular/core';
import { AuthService } from '../Servicio/auth.service';
import { User } from '../Servicio/user.model'; // Importa la interfaz User
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']

  
})
export class HomePage {
    user: User = {
    password: '',
    Rut: ''
  };

  constructor(private authService: AuthService, private router: Router) {} // Inyecta el Router

  enviarLogin() {
    console.log(this.user.Rut)
    console.log(this.user.password)
    this.authService.authenticate(this.user.password, this.user.Rut ).subscribe((result: User[]) => {
      console.log(result.length)
      if (result.length > 0) {
        // Usuario autenticado con éxito, redirige a la página "bienvenida"
        const Rut = result[0].Rut;
        console.log('Usuario autenticado con éxito');
        this.router.navigate(['/menu', { Rut : Rut }]);
      } else {
        // Usuario no autenticado, muestra un mensaje de error
        console.log('Error de autenticación');
      }
    });

  }


}
