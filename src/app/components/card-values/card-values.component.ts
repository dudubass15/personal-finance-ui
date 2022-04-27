import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-card-values',
    templateUrl: './card-values.component.html',
    styleUrls: ['./card-values.component.scss']
})
export class CardValuesComponent implements OnInit {
    @Input() title: string = 'Conta';
    @Input() subtitle: string = 'Teste';
    @Input() bgColor: string = 'bg-rose';
    @Input() colorText: string = '';
    @Input() iconClass: string = 'fa-eye-slash';
    @Input() money: number = 1000;
    @Input() dateUpdate: Date = new Date();

    @Input() viewTitle: boolean = true;
    @Input() viewSubtitle: boolean = true;
    @Input() viewButton: boolean = true;
    @Input() viewHeader: boolean = true;
    @Input() viewBody: boolean = true;
    @Input() viewFooter: boolean = true;

    /**
     * Prop responsável por manipular exibição ou não dos valores nos cards.
     * Default TRUE
     */
    viewDetailsMoney: boolean = true;

    constructor() { }

    ngOnInit(): void {
    }

    viewDetailsMoneyEvent(): void {
        if (!!this.viewDetailsMoney) {
            this.iconClass = 'fa-eye';
            this.viewDetailsMoney = !this.viewDetailsMoney;
        } else {
            this.iconClass = 'fa-eye-slash';
            this.viewDetailsMoney = !this.viewDetailsMoney;
        }
    }
}
