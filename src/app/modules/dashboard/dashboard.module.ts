import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './views/home/home.component';
import { CardValuesComponent } from '../../components/card-values/card-values.component';

@NgModule({
    declarations: [
        HomeComponent,
        CardValuesComponent
    ],
    imports: [
        CommonModule,
        DashboardRoutingModule
    ]
})
export class DashboardModule { }
