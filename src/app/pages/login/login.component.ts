import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UsuarioService } from 'src/app/services/usuario.service';
import { IUsuario } from 'src/app/models/interfaces/IUsuario';
import { IResponseEntity } from 'src/app/models/interfaces/responseEntity';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(6),
  ]);

  hide = true;
  cargando = false;

  constructor(private router: Router, private _snackBar: MatSnackBar, private usuarioSvc: UsuarioService) { }

  ngOnInit(): void {
  }

  logIn() {
    try {
      debugger;
      this.activarSpinner();
      let usuario: IUsuario;
      usuario.usuario = this.emailFormControl.value;
      usuario.clave = this.passwordFormControl.value;
      debugger;
      console.log(usuario);
      this.usuarioSvc.loginUsuario(usuario).subscribe(data => {
        console.log(data);
        let response = data as IResponseEntity;
        this.usuarioSvc.isLoggeado = true;
        this.openSnackBar(response.message, 'X');
        this.router.navigate(['/home']);
      }, err => { this.openSnackBar(err, 'X'); });
    }
    catch (err) { this.openSnackBar('Ha ocurrido un error.', 'Ups!'); }

  }

  openSnackBar(message: string, action: string) {
    let snackBarRef = this._snackBar.open(message, action, {
      duration: 4000,
    });
    snackBarRef.afterDismissed().subscribe(() => {
      //console.log('The snack-bar was dismissed');
    });

    snackBarRef.onAction().subscribe(() => {
      //console.log('The snack-bar action was triggered!');
      this.router.navigate(['/register']);
    });
  }

  activarSpinner() {
    this.cargando = true;
    setTimeout(() => this.cargando = false, 3000);
  }

}
