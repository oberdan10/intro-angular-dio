import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CursoInfoComponent } from './cursos/curso-info.component';
import { CursoListaComponent } from './cursos/curso-lista.component';
import { Error404Component } from './error-404/error-404.component';
import { EstrelasComponent } from './estrelas/estrelas.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReplacePipe } from './pipe/replace.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CursoListaComponent,
    EstrelasComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CursoInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //ROTAS DE ACESSO
    RouterModule.forRoot([
      { 
        path: '' ,redirectTo: 'cursos', pathMatch: 'full'
      },
      { 
        path: 'cursos', component: CursoListaComponent
      },
      { 
        path: 'cursos/info/:id', component: CursoInfoComponent
      },
      { 
        path: '**', component: Error404Component
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
