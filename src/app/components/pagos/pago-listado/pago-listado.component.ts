import { Component, OnInit } from '@angular/core';
import { PagoService } from 'src/app/services/pago.service';
import { Pago } from 'src/app/models/pago';

@Component({
  selector: 'app-pago-listado',
  templateUrl: './pago-listado.component.html',
  styleUrls: ['./pago-listado.component.css']
})
export class PagoListadoComponent implements OnInit {

  pagos:Pago[];
  constructor(private pagoSvc:PagoService) { }

  ngOnInit(): void {
    this.pagoSvc.getAllPagos().subscribe(pagos=>{
      this.pagos=pagos;
    })
  }

}
