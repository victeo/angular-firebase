import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';



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
        Validators.required,
        this.MatchValidator.bind(this) // Certifique-se de vincular a função do validador corretamente
      ]);
    Match = false;
    pais = '';

    isSame(): void {
        if (this.passwordFormControl.value) {
            this.confirmPassword = true;
        }
    }
    MatchValidator(control: FormControl): { [key: string]: boolean } | null {
        // Implemente sua lógica de validação aqui
        const password = control.value; // Obtém o valor do campo de senha
        
        // Adicione lógica para verificar se a senha corresponde aos seus critérios
        return null; // Retorna null se a validação passar, ou um objeto com o erro se a validação falhar
      }

    passwordMatchValidator(_event: any): void {

        let valueInput = _event.target.value



    }




}
