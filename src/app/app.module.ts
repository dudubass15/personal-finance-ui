import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { BreadcrumbComponent } from './core/navbar/components/breadcrumb/breadcrumb.component';

registerLocaleData(ptBr)

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
    exports: [],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: 'pt-BR'
        },
        {
            provide: DEFAULT_CURRENCY_CODE,
            useValue: 'BRL'
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
function localePt(localePt: any) {
    throw new Error('Function not implemented.');
}

