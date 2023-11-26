import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './angular-material/material/material.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Pregunta2Component } from './preguntas/pregunta2/pregunta2.component';
import { Pregunta3Component } from './preguntas/pregunta3/pregunta3.component';
import { Pregunta4Component } from './preguntas/pregunta4/pregunta4.component';
import { PaginaErrorComponent } from './preguntas/pagina-error/pagina-error.component';

@NgModule({
  declarations: [
    AppComponent,
    Pregunta2Component,
    Pregunta3Component,
    Pregunta4Component,
    PaginaErrorComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'preg2',component: Pregunta2Component},
      {path:'preg3',component: Pregunta3Component},
      {path:'preg4',component: Pregunta4Component},
      {path: '**', component: PaginaErrorComponent}
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
