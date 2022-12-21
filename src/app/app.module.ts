import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ImpresionComponent } from './impresion/impresion.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ControlComponent } from './control/control.component';
import { RegistrottComponent } from './registrott/registrott.component';
import { PaginaprincipalComponent } from './paginaprincipal/paginaprincipal.component';
import { InicioRegistroComponent } from './inicio-registro/inicio-registro.component';

@NgModule({
  declarations: [
    AppComponent,
    ImpresionComponent,
    ConsultaComponent,
    ControlComponent,
    RegistrottComponent,
    PaginaprincipalComponent,
    InicioRegistroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
