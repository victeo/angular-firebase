import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { UserService } from '../../../services/register/user.service';

import { User } from '../../../models/user';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule, MatSelectModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.less'
})

export class RegisterComponent {

    formControl = {
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [
            Validators.required,
            Validators.minLength(6),
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/)
        ]),
        passwordMatch: new FormControl('', Validators.required)
    }
    name = '';
    date = '';
    passwordHide = true;
    password = '';
    confirmPassword = false;
    Match = false;
    country = '';
    spirit = '';
    telephone = '';

    private user: User;

    constructor(public registerUser: UserService) {

        this.user = new User(
            '',
            '',
            new Date(),
            '',
            '',
            '',
            '',
            '',
            ['STUDENT'],
            '',
            ''
        );
    }


    setUser(): void {

        // Valores obrigatórios
        this.user.name = this.name;
        this.user.birthday = new Date(this.date);
        this.user.email = this.formControl.email.value!.toString();
        this.user.password = this.formControl.password.value!.toString();
        this.user.country = this.country;
        this.user.spiritCenter = this.spirit;
        this.user.whatsapp = this.telephone;

        this.registerUser.createNewUser(this.user.email, this.user.password)

    }





}
