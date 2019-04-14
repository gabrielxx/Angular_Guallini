import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})

export class MapComponent implements OnInit {
  title: string = 'My first AGM project';
  lat = -34.6069604;
  lng = -58.5063516;

  constructor() { }

  ngOnInit() {
  }

}
