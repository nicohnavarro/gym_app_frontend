import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ErrorComponent } from './pages/error/error.component';
import { ListadosComponent } from './pages/listados/listados.component';
import { AlumnoListadoComponent } from './components/alumno/alumno-listado/alumno-listado.component';
import { ResponsableListadoComponent } from './components/responsable/responsable-listado/responsable-listado.component';
import { PagosComponent } from './pages/pagos/pagos.component';
import { ReportesComponent } from './pages/reportes/reportes.component';
import { LoginComponent } from './pages/login/login.component';


const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'Home'}},
  { path: 'home', component: HomeComponent, data: {animation: 'Home'}},
  { path: 'login', component: LoginComponent, data: {animation: 'Login'}},
  { path: 'register', component: RegisterComponent, data: {animation: 'Registro'}},
  { path: 'listado', component: ListadosComponent,
  children: [
    {
    path:  'alumnos',
    component:  AlumnoListadoComponent
    },
    {
    path:  'responsables',
    component:  ResponsableListadoComponent
    },
    {
    path:  'usuarios',
    component:  ErrorComponent
    }]},
  { path: 'pagos', component: PagosComponent},
  { path: 'reportes', component: ReportesComponent},
  { path: '**', component: ErrorComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
