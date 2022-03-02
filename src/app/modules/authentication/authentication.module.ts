import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './views/login/login.component';
import { RecoveryComponent } from './views/recovery/recovery.component';
import { ButtonsComponent } from '../../components/buttons/buttons.component';

@NgModule({
    declarations: [
        LoginComponent,
        RecoveryComponent,
        ButtonsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ReactiveFormsModule,
        AuthenticationRoutingModule
    ]
})
export class AuthenticationModule { }
