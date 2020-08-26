import { Component, OnInit, Inject } from '@angular/core';
import { PagoService } from 'src/app/services/pago.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pago } from 'src/app/models/pago';
import { Alumno } from 'src/app/models/alumno';
import { IResponseEntity } from 'src/app/models/interfaces/responseEntity';

export interface EnviarPago {
  alumno;
  pago;
}

@Component({
  selector: 'app-pago-registro',
  templateUrl: './pago-registro.component.html',
  styleUrls: ['./pago-registro.component.css']
})
export class PagoRegistroComponent implements OnInit {


  alumno:Alumno;
  pago:number;
  constructor(public dialogRef: MatDialogRef<PagoRegistroComponent>,
    private pagoSvc: PagoService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: EnviarPago) { }

  ngOnInit(): void {
    this.alumno = this.data.alumno;
    this.pago = this.data.pago;
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  enviarPago() {
    let pago:Pago= new Pago();
    pago.monto=this.pago;
    pago.alumno_id=this.alumno.id;
    pago.fecha=new Date();
    console.log(pago);
    this.pagoSvc.addPago(pago).subscribe(data=>{
      let response = data as IResponseEntity;
      this.openSnackBar(response.message, 'X');
      this.dialogRef.close();
    }, err => {
      this.openSnackBar(err, 'X');
    });
  }

}
