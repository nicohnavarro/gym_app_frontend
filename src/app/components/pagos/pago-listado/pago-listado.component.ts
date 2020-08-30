import { Component, OnInit } from '@angular/core';
import { PagoService } from 'src/app/services/pago.service';
import { Pago } from 'src/app/models/pago';
import { MatDialog } from '@angular/material/dialog';
import { AlumnoDetalleComponent } from '../../alumno/alumno-detalle/alumno-detalle.component';
import { AlumnoService } from 'src/app/services/alumno.service';
import { IResponseEntity } from 'src/app/models/interfaces/responseEntity';

@Component({
  selector: 'app-pago-listado',
  templateUrl: './pago-listado.component.html',
  styleUrls: ['./pago-listado.component.css']
})
export class PagoListadoComponent implements OnInit {

  pagos:Pago[];
  constructor(private pagoSvc:PagoService,public dialog: MatDialog,private alumnoSvc:AlumnoService) { }

  ngOnInit(): void {
    this.pagoSvc.getAllPagos().subscribe(pagos=>{
      this.pagos=pagos.sort(function(a,b){
        return (new Date(b.fecha).getTime() - new Date(a.fecha).getTime());
      })
    })
  }
  
  openDialog(component,options?): void {
    const dialogRef = this.dialog.open(component, options);

    dialogRef.afterClosed().subscribe(result => {
      
    });
  }

  abriDetallePago(pago){
    console.log(pago);
  }


abrirDetalleAlumno(alumno_id){
  console.log(alumno_id);
  this.alumnoSvc.getAlumnoById(alumno_id).subscribe(data=>{
    let response = data as IResponseEntity;
    this.openDialog(AlumnoDetalleComponent,{
      width: '60%',
      height: 'auto',
      maxHeight: '60%',
      data: {alumnoDetalle:response.entity}});
  })

}

}
