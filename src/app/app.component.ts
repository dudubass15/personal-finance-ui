import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'personal-finance';
    userLogado: boolean = false;

    constructor(private authService: AuthService, private router: Router) {
        this.userLogado = this.authService.getStatusUserLogged();
        
        !!this.userLogado ? this.router.navigate(['']) : this.router.navigate(['auth', 'login']);
    }
}
