import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private navCtrl: NavController) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Aquí agregarías la lógica de autenticación (p. ej. llamando a un servicio)
      // Por simplicidad, solo redirigimos al dashboard si las credenciales son correctas
      console.log('Usuario:', username);
      console.log('Contraseña:', password);

      // Suponiendo autenticación correcta
      this.navCtrl.navigateForward('/dashboard');
    }
  }

  goToForgotPassword() {
    // Navegar a la pantalla de restablecer contraseña
    this.navCtrl.navigateForward('/forgot-password');
  }
}
