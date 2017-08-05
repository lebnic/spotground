import { Component, OnInit } from '@angular/core';

declare var L: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styles: []
})
export class MapComponent implements OnInit {
  mymap: any;

  constructor() { }

  ngOnInit() {
    this.mymap = L.map("map", { zoomControl: false, dragging: true }).setView([46, -71], 6);
    new L.TileLayer(
      'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png',
      { attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>' }
    ).addTo(this.mymap);


    this.mymap.on('click', (ev) => {
      L.marker([ev.latlng.lat, ev.latlng.lng]).addTo(this.mymap)
        .bindPopup('A pretty CSS3 popup.<br> Easily customizable.');
    });
  }
}