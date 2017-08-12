import { AuthService } from './providers/auth.service';
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

  constructor(public authService: AuthService,
    db: AngularFireDatabase,
    angulartics2: Angulartics2,
    angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics
  ) {
    this.spots = db.list('/spots');
  }

  login() {
    this.authService.loginWithGoogle();
    // https://medium.com/codingthesmartway-com-blog/angular-2-firebase-authentication-7593c565fa53
    // https://youtu.be/tNCA1RdHrsM?t=32m40s
    // https://github.com/angular/angularfire2/blob/master/docs/version-4-upgrade.md#removing-angularfire-for-modularity
  }

  logout() {
    this.authService.logout();
  }
}
