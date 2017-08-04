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
    this.mymap = L.map("map", { zoomControl: false, dragging: true });
    let osmUrl = 'http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png';
    let osmAttrib = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>';
    let osm = new L.TileLayer(osmUrl, {
      attribution: osmAttrib
    });
    this.mymap.addLayer(osm);
    this.mymap.setView([46, -71], 6);

    let circuitLayer = L.layerGroup([]);
    circuitLayer.addTo(this.mymap);
  }
  
}
