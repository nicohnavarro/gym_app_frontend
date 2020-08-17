import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { ErrorComponent } from './pages/error/error.component';
import { ListadosComponent } from './pages/listados/listados.component';
import { AlumnoListadoComponent } from './components/alumno/alumno-listado/alumno-listado.component';
import { ResponsableListadoComponent } from './components/responsable/responsable-listado/responsable-listado.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'register', component: RegisterComponent},
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
  { path: '**', component: ErrorComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
