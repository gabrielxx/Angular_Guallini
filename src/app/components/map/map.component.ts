import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from '../../providers/propiedades.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.less']
})

export class MapComponent implements OnInit {
  title: string = 'My first AGM project';
  lat = -34.6069604;
  lng = -58.5063516;

  public propiedades: Observable<any[]>;

  constructor(private _PropService: PropiedadesService) { }

  ngOnInit() {
    this.propiedades = this._PropService.onLoadPropiedades();
  }

}
