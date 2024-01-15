import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../../services/firebase/connection.service';
import { FormsModule } from '@angular/forms'; // Importe FormsModule




@Component({
    selector: 'app-form',
    standalone: true,
    imports: [FormsModule],
    templateUrl: './form.component.html',
    styleUrl: './form.component.less'
})

export class FormComponent implements OnInit {

    email = '' as string;
    password = '' as string;
    hide = true;


    constructor(public auth: ConnectionService) { }

    ngOnInit(): void {
    }

}
