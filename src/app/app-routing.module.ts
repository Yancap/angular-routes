import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { authGuard } from './guards/auth.guard';
import { authChildGuard } from './guards/auth-child.guard';
import { matchGuard } from './guards/match.guard';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canMatch: [matchGuard]  },
  { path: 'cursos', loadChildren: () => 
    import("./pages/cursos/cursos.module")
    .then(module => module.CursosModule),
    canActivateChild: [authChildGuard]
  },
  { path: 'login', component: LoginComponent},
  { path: '**', redirectTo: "", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
