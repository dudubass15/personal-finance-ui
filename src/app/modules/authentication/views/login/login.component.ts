import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    form: FormGroup = new FormGroup({});

    constructor() { }

    ngOnInit(): void {
        this.form = new FormGroup({
            email: new FormControl('', [Validators.required]),
            password: new FormControl('', [Validators.required])
        });
    }

    setDataLogin(): void {
        if (!!this.form.valid) {
            console.log(this.form.value);
        } else {
            this.form.markAllAsTouched();
        }
    }
}
