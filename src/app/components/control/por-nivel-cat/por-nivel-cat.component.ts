import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/common/categorias.enum';
import { Niveles } from 'src/app/common/niveles.enum';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-por-nivel-cat',
  templateUrl: './por-nivel-cat.component.html',
  styleUrls: ['./por-nivel-cat.component.css']
})
export class PorNivelCatComponent implements OnInit {

  niveles = Niveles;
  categorias = Categorias;
  categoriaFormControl = new FormControl();
  nivelFormControl = new FormControl();
  
  constructor() { }

  ngOnInit(): void {
  }

  onOptionsSelected() {
   console.log(this.nivelFormControl.value);
   console.log(this.categoriaFormControl.value); 
  }

  buscarAlumnos(){
    if(this.nivelFormControl.value == 0){
      console.log(this.nivelFormControl.value);
      console.log(this.categoriaFormControl.value); 
    }
    else{
      console.log(this.nivelFormControl.value);
      console.log(null); 
    }

  }

}
