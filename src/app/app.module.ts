import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { BreadcrumbComponent } from './core/navbar/components/breadcrumb/breadcrumb.component';

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent,
        FooterComponent,
        BreadcrumbComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
