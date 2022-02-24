import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-recovery',
    templateUrl: './recovery.component.html',
    styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {
    form: FormGroup = new FormGroup({});

    constructor() { }

    ngOnInit(): void {
        this.form = new FormGroup({
            email: new FormControl('', [Validators.required])
        });
    }

    sendEmailRecovery(): void {
        if (!!this.form.valid) {
            console.log(this.form.value);
        } else {
            this.form.markAllAsTouched();
        }
    }
}
