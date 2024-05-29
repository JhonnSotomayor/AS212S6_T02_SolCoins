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
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { InicioComponent } from './inicio/inicio.component';


@NgModule({
  declarations: [
    AppComponent,
    TransaccionComponent,
    MenuComponent,
    FooterComponent,
    AboutComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule, // Añade AppRoutingModule a la lista de importssa
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