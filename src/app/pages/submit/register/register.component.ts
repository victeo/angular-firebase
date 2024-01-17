import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { UserService } from '../../../services/register/user.service';


@Component({
    selector: 'app-register',
    standalone: true,
    imports: [FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, ReactiveFormsModule, MatSelectModule],
    templateUrl: './register.component.html',
    styleUrl: './register.component.less'
})

export class RegisterComponent {
    name = '';
    date = '';
    emailFormControl = new FormControl('', [Validators.required, Validators.email]);
    passwordHide = true;
    passwordFormControl = new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/)
    ]);
    password = '';
    confirmPassword = false;
    passwordMatch = new FormControl('', [
        Validators.required
    ]);
    Match = false;
    pais = '';
    centro = '';

    constructor(public registerUser: UserService) { }


    setUser(): void {
        console.log(this.passwordFormControl)
        const data = {
            name: this.name,
            pais: this.pais,
            centro:this.centro 
        }
        if(this.emailFormControl.value && this.passwordFormControl.value){
            console.log(this.emailFormControl.value)
            this.registerUser.register(this.emailFormControl.value, this.passwordFormControl.value, data)
        }

    }





}
