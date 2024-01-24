import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { SnackBarCustomComponent } from '../../components/SnackBar/snack-bar-custom/snack-bar-custom.component';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { getAuth, signOut } from "firebase/auth";
import { IndexService as snackBar } from '../utilities/snackbar/index.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})



export class ConnectionService {
    user: any;
    error: any;


    constructor(
        public auth: AngularFireAuth,
        private snackBar: snackBar,
        private afs: AngularFirestore,
        private _router: Router,

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
            this.snackBar.open('Seja-bem vindo!', 'success', 'check_circle');
            this._router.navigate(['/'])


        } catch (error) {
            this.snackBar.open('Dados incorretos')
            this.error = error;
        }
    }

    async signOut() {
        await this.auth.signOut()
        .then(() => {
            localStorage.removeItem('identity')
            this.snackBar.open('Você foi deslogado', 'success', 'check_circle');

          }).catch((error) => {
            console.error(error)
          });
        this.user = null;
    }

}
