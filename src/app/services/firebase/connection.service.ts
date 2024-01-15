import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgModule } from '@angular/core';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
    providedIn: 'root'
})



export class ConnectionService {
    user: any;
    error: any;


    constructor(public auth: AngularFireAuth) { }


    async emailSignIn(email: string, password: string) {
        try {
            const credential = await this.auth.signInWithEmailAndPassword(email, password);
            this.user = credential.user
        } catch (error) {
            this.error = error;
        }
    }

    async signOut() {
        await this.auth.signOut();
        this.user = null;
    }



}
