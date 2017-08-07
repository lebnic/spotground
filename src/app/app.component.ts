import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Component } from '@angular/core';
import { Angulartics2, Angulartics2GoogleAnalytics } from 'angulartics2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  spots: FirebaseListObservable<any[]>;

  constructor(
    db: AngularFireDatabase,
    angulartics2: Angulartics2,
    angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics
  ) {
    this.spots = db.list('/spots');
  }
}
