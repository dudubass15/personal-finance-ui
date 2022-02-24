import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { RecoveryComponent } from './views/recovery/recovery.component';

const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'recovery',
        component: RecoveryComponent
    },
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
