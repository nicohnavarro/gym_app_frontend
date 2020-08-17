import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UploadImageComponent } from './components/upload-image/upload-image.component';
import { ErrorComponent } from './pages/error/error.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlumnoListadoComponent } from './components/alumno/alumno-listado/alumno-listado.component';
import { AlumnoDetalleComponent } from './components/alumno/alumno-detalle/alumno-detalle.component';
import { ListadosComponent } from './pages/listados/listados.component';
import { HttpClientModule } from '@angular/common/http';
import { ResponsableListadoComponent } from './components/responsable/responsable-listado/responsable-listado.component';
import { ResponsableDetalleComponent } from './components/responsable/responsable-detalle/responsable-detalle.component';
import { EnumAsStringPipe } from './pipes/enum-as-string.pipe';
import { AlumnoBorradoComponent } from './components/alumno/alumno-borrado/alumno-borrado.component';
import { EnumToArrayPipe } from './pipes/enum-to-array.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UploadImageComponent,
    ErrorComponent,
    HomeComponent,
    RegisterComponent,
    AlumnoListadoComponent,
    AlumnoDetalleComponent,
    ListadosComponent,
    ResponsableListadoComponent,
    ResponsableDetalleComponent,
    EnumAsStringPipe,
    AlumnoBorradoComponent,
    EnumToArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
