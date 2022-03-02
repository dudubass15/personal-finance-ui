import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {
    @Input() background: string = 'bg-blue';
    @Input() textColor: string = 'text-white';
    @Input() animation: boolean = false;
    @Input() textButton: string = 'Botão';
    @Input() width: string = 'w-100';

    constructor() { }

    ngOnInit(): void {
    }

}
