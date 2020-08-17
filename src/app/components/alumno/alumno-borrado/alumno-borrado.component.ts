import { Component, OnInit } from '@angular/core';
import { Inject} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AlumnoService } from 'src/app/services/alumno.service';
import { IResponseEntity } from 'src/app/models/interfaces/responseEntity';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData2 {
  alumno;
}

@Component({
  selector: 'app-alumno-borrado',
  templateUrl: './alumno-borrado.component.html',
  styleUrls: ['./alumno-borrado.component.css']
})
export class AlumnoBorradoComponent implements OnInit {

  alumno;
  constructor(public dialogRef: MatDialogRef<AlumnoBorradoComponent>,
    private AlumnoSvc:AlumnoService,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: DialogData2) { }

  ngOnInit(): void {
    console.log(this.data);
    this.alumno=this.data.alumno;
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  
  borrarAlumno(){
    this.AlumnoSvc.deleteAlumno(this.alumno.id).subscribe(data => {
      let response = data as IResponseEntity;
      this.openSnackBar(response.message, 'X');
      this.dialogRef.close();
    }, err => {
      this.openSnackBar(err, 'X');
      //TODO delete responsable 
    });
  }

}
