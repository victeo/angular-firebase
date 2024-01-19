import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import firebase from 'firebase/compat/app';
import { User } from '../../models/user';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { MatSnackBar } from '@angular/material/snack-bar';

import { SnackBarCustomComponent } from '../../components/SnackBar/snack-bar-custom/snack-bar-custom.component';



@Injectable({
    providedIn: 'root'
})
export class UserService implements OnInit {
    constructor(
        public auth: AngularFireAuth,
        public firestore: Firestore,
        private snackBar: MatSnackBar

    ) { }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }

    async register(email: string, password: string, data: any) {
       // Cria um novo usuário
        const userCredential = await this.auth.createUserWithEmailAndPassword(email, password);
        // Acesse o usuário dentro de UserCredential
        const user = userCredential.user;

        // Agora você pode acessar o uid do usuário
        const uid = user!.uid;

        const database = firebase.database();
        database.ref('/users').child(uid).set({
            name: data.name,
            email: email,
        });


        const dataBaseCollection = collection(this.firestore, 'user');

        addDoc(dataBaseCollection, data)

    }
    showMessage(msg: string, color?: string): void {
        console.log('entrou')
        this.snackBar.openFromComponent(SnackBarCustomComponent, {
          duration: 500000,
          horizontalPosition: 'right',
          verticalPosition: 'top',
          panelClass: 'window_message',
          data: { message: msg, icon: 'warning', color: color || 'default-color'} // Passando os dados para o componente
        });
      }
    async createNewUser(email: string, password: string): Promise<void> {

        this.auth.fetchSignInMethodsForEmail(email).then((response) => {
            console.log(response)
            // The returned 'providers' is a list of the available providers
            // linked to the email address. Please refer to the guide for a more
            // complete explanation on how to recover from this error.
        });
       
       await this.auth.createUserWithEmailAndPassword(email, password)
           .then((response: any) => {
               console.log(response)
               this.showMessage(`Conta Criada com sucesso`)

           })
           .catch(error => {
            console.log(error.code)
               switch (error.code) {
                  case 'auth/email-already-in-use':
                    this.showMessage(`Endereço de email: ${email} já está em uso em outra conta`, 'primary')
                    break;
                  case 'auth/invalid-email':
                    this.showMessage(`O email: ${email} é inválido.`)
                     break;
                   case 'auth/operation-not-allowed':
                    this.showMessage(`O email: ${email} não é permitido.`)
                     break;
                   case 'auth/missing-password':
                    this.showMessage(`Campo da senha vazio`)
                     break;
                   case 'auth/weak-password':
                    this.showMessage(`A senha não é forte o suficiente.`)
                     break;
                   default:
                     console.log(error.message);
                     break;
                 }
             });
    }
}
