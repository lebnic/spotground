import { Component } from '@angular/core';
import { Angulartics2, Angulartics2GoogleAnalytics } from 'angulartics2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "Welcome, here's a map";
  
  constructor(
    public angulartics2: Angulartics2,
    public angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics
  ) { }
}
