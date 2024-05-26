import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module'; // Importa AppRoutingModule aquí
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { AppComponent } from './app.component';
import { TransaccionComponent } from './transaccion/transaccion.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  declarations: [
    AppComponent,
    TransaccionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, // Añade AppRoutingModule a la lista de imports
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }