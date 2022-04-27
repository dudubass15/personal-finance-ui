import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-buttons',
    templateUrl: './buttons.component.html',
    styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent {
    @Input()
    public background: string = 'bg-blue';
    
    @Input()
    public textColor: string = 'text-white';

    @Input()
    public animation: boolean = false;
    
    @Input()
    public textButton: string = 'Botão';
    
    @Input()
    public width: string = 'w-100';
    
    @Input()
    public setIcon: boolean = false;

    @Input()
    public iconClass: string = '';
}
