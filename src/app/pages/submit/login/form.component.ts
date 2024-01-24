import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { ConnectionService } from '../../../services/firebase/connection.service';
import { FormsModule } from '@angular/forms'; // Importe FormsModule
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IndexComponent } from '../../../components/utilities/message/index/index.component';
import { Router, RouterModule } from '@angular/router';
import { UserService as loggedInformation } from '../../../services/user.service';
import { IndexService as snackBar } from '../../../services/utilities/snackbar/index.service';
import { FirebaseError } from '@angular/fire/app';

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
        private loginInformation: loggedInformation,
        private snackBar: snackBar,
        private _router: Router,
        private el: ElementRef,
        private renderer: Renderer2
    ) { }

    ngOnInit(): void {
        if (this.loginInformation.lsLogged()) {
            this._router.navigate(['/']);
        }
    }

    validationLogin(email: string, password: string): void {
        this.messageVisible = true;
            this.auth.emailSignIn(email, password)

            this.snackBar.open('Seja-bem vindo!', 'success', 'check_circle')
    

    }
    convertError(error: any): string {
        // Lógica de conversão do erro para uma string ou formato específico
        if (error instanceof FirebaseError) {
            return `Firebase Error: ${error.code} - ${error.message}`;
        } else if (typeof error === 'string') {
            return `Erro de string: ${error}`;
        } else {
            return 'Erro desconhecido';
        }
    }

}
