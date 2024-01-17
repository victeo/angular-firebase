import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import firebase from 'firebase/compat/app';
import { User } from '../../models/user';



@Injectable({
    providedIn: 'root'
})
export class UserService implements OnInit {
    private user!: User;


    constructor(
        public auth: AngularFireAuth,
        public firestore: Firestore

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
}
