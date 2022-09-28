import { ProfileComponent } from './pages/profile/profile.component';
import { AddEditComponent } from './pages/add-edit/add-edit.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'register', component: RegisterComponent
  },
  {
    path: 'add', component: AddEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit/:id', component: AddEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path : 'profile', component : ProfileComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
