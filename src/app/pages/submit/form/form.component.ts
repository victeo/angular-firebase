import { Component, OnInit } from '@angular/core';
import { ConnectionService } from '../../../services/firebase/connection.service';
import { FormsModule } from '@angular/forms'; // Importe FormsModule
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';



@Component({
    selector: 'app-form',
    standalone: true,
    imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule],
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
