import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor() { }

    getStatusUserLogged(): boolean {
        return false;
    }
}
