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
import { MaterialModule } from './modules/material.module';
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
import { AlumnoHelper } from './helpers/alumno-helper';
import { UsuarioLoginComponent } from './components/usuario/usuario-login/usuario-login.component';
import { UsuarioDetalleComponent } from './components/usuario/usuario-detalle/usuario-detalle.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { LoginComponent } from './pages/login/login.component';
import { ControlAlumnosComponent } from './pages/control-alumnos/control-alumnos.component';
import { PorNivelCatComponent } from './components/control/por-nivel-cat/por-nivel-cat.component';
import { PorDiaComponent } from './components/control/por-dia/por-dia.component';
import { PagoRegistroComponent } from './components/pagos/pago-registro/pago-registro.component';
import { PagoDetalleComponent } from './components/pagos/pago-detalle/pago-detalle.component';
import { PagoListadoComponent } from './components/pagos/pago-listado/pago-listado.component';
import { IdAlumnoToAlumnoPipe } from './pipes/id-alumno-to-alumno.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';
import {ChartModule} from 'angular-highcharts';
import { ReportePagosComponent } from './components/reporte/reporte-pagos/reporte-pagos.component';
import { ReporteAsistenciasComponent } from './components/reporte/reporte-asistencias/reporte-asistencias.component';
import { MatCarouselModule } from '@ngmodule/material-carousel';
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
    EnumToArrayPipe,
    UsuarioLoginComponent,
    UsuarioDetalleComponent,
    PagosComponent,
    ReportesComponent,
    LoginComponent,
    ControlAlumnosComponent,
    PorNivelCatComponent,
    PorDiaComponent,
    PagoRegistroComponent,
    PagoDetalleComponent,
    PagoListadoComponent,
    IdAlumnoToAlumnoPipe,
    DateFormatPipe,
    ReportePagosComponent,
    ReporteAsistenciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartModule,
    MatCarouselModule.forRoot()
  ],
  providers: [AlumnoHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
