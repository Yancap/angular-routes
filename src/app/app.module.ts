import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { DetalhesComponent } from './pages/cursos/detalhes/detalhes.component';
import { BuscaComponent } from './pages/cursos/busca/busca.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CursosRoutingModule } from './pages/cursos/cursos-routing.module';
import { AlunosModule } from './components/alunos/alunos.module';
// import { CursosRoutingModule } from './pages/cursos/cursos-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    BuscaComponent,
    NotFoundComponent,
    DetalhesComponent,
    BuscaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CursosRoutingModule,
    AlunosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
