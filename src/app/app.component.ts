import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './pages/submit/form/form.component';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Firestore, collection } from '@angular/fire/firestore';
import { addDoc } from 'firebase/firestore';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})

export class AppComponent implements OnInit{

    constructor(public fireStore: Firestore ){

    }

  ngOnInit(): void {
    //  const testCollection = collection(this.fireStore, 'test');
    //  addDoc(testCollection, {text: "finalmente deu certo Alexandre"}
    //     )
  }
  title = 'angular-firebase';
}
