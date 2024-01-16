import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-message-error-validation',
    standalone: true,
    imports: [],
    templateUrl: './index.component.html',
    styles: [
        `
        :host {
          display: flex;
        }
    
        .example-pizza-party {
          color: hotpink;
        }
      `,
      ],
})
export class IndexComponent implements OnInit {

    @Input() text: string = '';
    @Input() timeToDisplay: number = 3000; // Tempo padrão de exibição em milissegundos
    isVisible = true;

    constructor() { }


    ngOnInit(): void {
        this.isVisible = true;
        console.log('kasjdkajdkasjkd')
        setTimeout(() => {
            this.isVisible = false;
        }, this.timeToDisplay);
    }

}
