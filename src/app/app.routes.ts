import { Routes } from '@angular/router';
import { HomePage } from './pages/home-page/home-page';
import { CalculatorPage } from './pages/calculator-page/calculator-page';
import { DirectivePage } from './pages/directive-page/directive-page';
import { TodoPage } from './pages/todo-page/todo-page';
import { StudentPage } from './pages/student-page/student-page';
import { DetailPage } from './pages/detail-page/detail-page';
import { AddPage } from './pages/add-page/add-page';
import { LoginPage } from './pages/login-page/login-page';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full'},
    { path: 'home', component: HomePage },
    { path: 'calculator', component: CalculatorPage },
    { path: 'directive', component: DirectivePage },
    { path: 'todo', component: TodoPage },
    { path: 'students', component: StudentPage, canActivate: [authGuard] },
    { path: 'detail/:id', component: DetailPage, canActivate: [authGuard] },
    { path: 'add', component: AddPage, canActivate: [authGuard] },
    { path: 'login', component: LoginPage },
];
