import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CursoListaComponent } from './cursos/curso-lista.component';
import { EstrelasComponent } from './estrelas/estrelas.component';

@NgModule({
  declarations: [
    AppComponent,
    CursoListaComponent,
    EstrelasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
