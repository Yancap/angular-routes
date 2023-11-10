import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunosComponent } from './alunos.component';
import { AlunosDetailsComponent } from './alunos-details/alunos-details.component';
import { AlunosCreateComponent } from './alunos-create/alunos-create.component';
import { AlunosRouterModule } from './alunos-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AlunosComponent,
    AlunosDetailsComponent,
    AlunosCreateComponent
  ],
  imports: [
    CommonModule,
    AlunosRouterModule,
    NgbModule
  ]
})
export class AlunosModule { }
