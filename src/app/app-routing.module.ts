import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransaccionComponent } from './transaccion/transaccion.component'; // Asegúrate de que la ruta de importación sea correcta
import { AboutComponent } from './about/about.component';
import { InicioComponent } from './inicio/inicio.component'; 

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'transaccion', component: TransaccionComponent },
  // Agrega más rutas aquí según sea necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }