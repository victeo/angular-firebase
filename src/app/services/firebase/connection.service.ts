import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarCustomComponent } from '../../components/SnackBar/snack-bar-custom/snack-bar-custom.component';

@Injectable({
    providedIn: 'root'
})



export class ConnectionService {
    user: any;
    error: any;


    constructor(
        public auth: AngularFireAuth,
        private snackBar: MatSnackBar
        ) { }


    async emailSignIn(email: string, password: string) {
        try {
            const credential = await this.auth.signInWithEmailAndPassword(email, password);
            this.user = credential.user
        } catch (error) {
            this.showMessage('Dados incorretos')
            this.error = error;
        }
    }

    async signOut() {
        await this.auth.signOut();
        this.user = null;
    }

    showMessage(msg: string): void {
        this.snackBar.openFromComponent(SnackBarCustomComponent, {
          duration: 3000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: 'window_message',
          data: { message: msg, icon: 'warning' } // Passando os dados para o componente
        });
      }



}
