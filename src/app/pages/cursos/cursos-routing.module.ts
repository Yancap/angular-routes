import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './cursos.component';
import { DetalhesComponent } from './detalhes/detalhes.component';

const routes: Routes = [
  { path: '', component: CursosComponent },
  { path: ':id', component: DetalhesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
