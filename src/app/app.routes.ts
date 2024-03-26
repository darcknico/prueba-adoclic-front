import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ShoppingComponent } from './pages/shopping/shopping.component';
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Ruta por defecto redirige a 'login'
  { path: 'login', component: LoginComponent },
  { path: 'shopping', component: ShoppingComponent, canActivate: [AuthGuard], },
];
