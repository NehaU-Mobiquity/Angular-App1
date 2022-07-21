import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/guards/auth.guard';
import { LoginComponent } from 'src/shared-module/login/login.component';



const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'user',
    loadChildren: () => import('../user/user.module').then(m => m.UserModule),canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule),canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
