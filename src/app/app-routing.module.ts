import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./modules/dashboard/dashboard.module').then(dashboard => dashboard.DashboardModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./modules/authentication/authentication.module').then(auth => auth.AuthenticationModule)
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
