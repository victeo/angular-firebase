import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
// Controlador da rota
import { UserGuard } from './services/guards/user.guard';
import { AdminGuard } from './services/guards/admin.guard';


import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { provideAnimations } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
    providers: [UserGuard, AdminGuard, provideRouter(routes),
        importProvidersFrom(provideFirebaseApp(() => initializeApp(environment.firebase)), provideFirestore(() => getFirestore()), AngularFireModule.initializeApp(environment.firebase)), provideAnimations(), importProvidersFrom(provideFirebaseApp(() => initializeApp({ "projectId": "sistema-presenca-global-kardec", "appId": "1:816981227066:web:2497916f7a60beb200e703", "databaseURL": "https://sistema-presenca-global-kardec-default-rtdb.firebaseio.com", "storageBucket": "sistema-presenca-global-kardec.appspot.com", "apiKey": "AIzaSyCzU_Jif-vkMaiYlEf4Bhx7D7YZWBwPvqg", "authDomain": "sistema-presenca-global-kardec.firebaseapp.com", "messagingSenderId": "816981227066", "measurementId": "G-5T61VYSV0G" }))), importProvidersFrom(provideAuth(() => getAuth())), importProvidersFrom(provideFirestore(() => getFirestore())), provideAnimations()]
};
