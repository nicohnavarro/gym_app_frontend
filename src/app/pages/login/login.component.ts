import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor( private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  async logIn() {
  try {

    this.activarSpinner();
      // const user = await this.authSvc.login(this.emailFormControl.value, this.passwordFormControl.value);
      const user = {username:this.emailFormControl.value,password:this.passwordFormControl.value}
      console.log(this.cargando);
      if (user) {
        localStorage.setItem('usuario', JSON.stringify(user));
        this.router.navigate(['/home']);
      }
      else {
        this.openSnackBar('No ingresaste una cuenta valida.', 'Registrase');
      }
      console.log(user);
    }
    catch (err) {
      console.log(err);
    }

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

  activarSpinner(){
    this.cargando=true;
    setTimeout(()=>this.cargando=false,3000);
  }

}
