import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bookshelves';

  constructor() {
    const firebaseConfig = {
      apiKey: 'ADD KEY HERE', // old key was regenerated
      authDomain: 'bookshelves-251807.firebaseapp.com',
      databaseURL: 'https://bookshelves-251807.firebaseio.com',
      projectId: 'bookshelves-251807',
      storageBucket: '',
      messagingSenderId: '771103712402',
      appId: '1:771103712402:web:6b83ec26e39439b4'
    };

    firebase.initializeApp(firebaseConfig);
  }
}
