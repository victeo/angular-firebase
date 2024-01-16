import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormComponent } from './pages/submit/login/form.component';
import { Firestore, collection } from '@angular/fire/firestore';


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
  }
  title = 'Global Kardec - Sistema de Frequência';
}
