import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { AlunosDetailsComponent } from './alunos-details/alunos-details.component';
import { AlunosCreateComponent } from './alunos-create/alunos-create.component';
import { RouterModule, Routes } from '@angular/router';

const alunosRoutes: Routes = [
  {path: "alunos", component: AlunosComponent, children: [
    {path: "create", component: AlunosCreateComponent},
    {path: ":id", component: AlunosDetailsComponent}
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(alunosRoutes)  
  ],
  exports: [RouterModule]
})
export class AlunosRouterModule { }
