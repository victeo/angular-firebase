import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { ConnectionService } from '../../../services/firebase/connection.service';
import { FormsModule } from '@angular/forms'; // Importe FormsModule
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IndexComponent } from '../../../components/utilities/message/index/index.component';
import { RouterModule } from '@angular/router';



@Component({
    selector: 'app-form',
    standalone: true,
    imports: [FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, IndexComponent, RouterModule],
    templateUrl: './form.component.html',
    styleUrl: './form.component.less'
})

export class FormComponent implements OnInit {

    email = '' as string;
    password = '' as string;
    hide = true;
    messageVisible = true;



    constructor(
        public auth: ConnectionService,
        private el: ElementRef,
        private renderer: Renderer2
    ) { }

    ngOnInit(): void {
    }

    validationLogin(email: string, password: string): void {
        this.messageVisible = true;

        this.auth.emailSignIn(email, password);

        setTimeout(() => {
            this.messageVisible = false;
        }, 300000);

    }

}
