import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import firebase from 'firebase/compat/app';
import { User } from '../../models/user';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IndexService as SnackBarCustom } from '../utilities/snackbar/index.service';
import { ConnectionService } from '../firebase/connection.service';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class UserService implements OnInit {
    constructor(
        public auth: AngularFireAuth,
        public firestore: Firestore,
        private afs: AngularFirestore,
        private showMessage: SnackBarCustom,
        private signIn: ConnectionService,
        private router: Router

    ) { }
    ngOnInit(): void {
    }


    async register(email: string, password: string, registerUser: User) {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        // User is signed in, see docs for a list of available properties
                        // https://firebase.google.com/docs/reference/js/auth.user
                        let uid = user.uid;

                        const collection = this.afs.collection<any>('users');

                        const userObject = {
                            name: registerUser.name,
                            email: registerUser.email,
                            birthday: registerUser.birthday,
                            country: registerUser.country,
                            spiritCenter: registerUser.spiritCenter,
                            roles:registerUser.roles,
                            whatsapp: registerUser.whatsapp,
                        };

                        collection.doc(uid).set(userObject);

                        this.showMessage.open(`Conta Criada com sucesso`, 'success', 'check_circle');
                        this.signIn.emailSignIn(email, password);
                        this.router.navigate(['/']);


                    } else {
                        // User is signed out
                        // ...
                    }
                });

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });

    }

    async createNewUser(email: string, password: string, user: User): Promise<void> {

        await this.auth.createUserWithEmailAndPassword(email, password)
            .then((response: any) => {
                this.register(email, password, user);
                

            })
            .catch(error => {
                console.log(error.code)
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        this.showMessage.open(`Endereço de email: ${email} já está em uso em outra conta`);
                        break;
                    case 'auth/invalid-email':
                        this.showMessage.open(`O email: ${email} é inválido.`)
                        break;
                    case 'auth/operation-not-allowed':
                        this.showMessage.open(`O email: ${email} não é permitido.`)
                        break;
                    case 'auth/missing-password':
                        this.showMessage.open(`Campo da senha vazio`)
                        break;
                    case 'auth/weak-password':
                        this.showMessage.open(`A senha não é forte o suficiente.`)
                        break;
                    default:
                        console.log(error.message);
                        break;
                }
            });
    }
}
