import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransaccionComponent } from './transaccion/transaccion.component'; // Asegúrate de que la ruta de importación sea correcta

const routes: Routes = [
  { path: '', component: TransaccionComponent },
  // Agrega más rutas aquí según sea necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }