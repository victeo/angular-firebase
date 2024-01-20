import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackBarCustomComponent } from '../../components/SnackBar/snack-bar-custom/snack-bar-custom.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})



export class ConnectionService {
    user: any;
    error: any;


    constructor(
        public auth: AngularFireAuth,
        private snackBar: MatSnackBar,
        private afs: AngularFirestore,

    ) { }


    async emailSignIn(email: string, password: string) {
        try {
            const credential = await this.auth.signInWithEmailAndPassword(email, password);
            this.user = credential.user;
            let uid = this.user.uid;

            const collection = this.afs.collection<any>('users');
            const doc = collection.doc(uid);

            const userData$ = doc.get().pipe(
                map(snapshot => {
                    if (snapshot.exists) {
                        const userData = snapshot.data();
                        // Adiciona a propriedade uid ao objeto userData
                        userData.id = uid;
                        return userData;
                    } else {
                        throw new Error('Usuário não encontrado');
                    }
                })
            );

            userData$.subscribe(userData => {
                localStorage.setItem('identity', JSON.stringify(userData))

            }, error => {
                console.error('Erro ao obter usuário:', error);
            });


            const userIdentity = {
                id: uid,
                name: 'name',
                email: this.user.email

            }
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
