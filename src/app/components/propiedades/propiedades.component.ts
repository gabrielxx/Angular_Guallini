import { Component, OnInit } from '@angular/core';
import {PropiedadesService} from '../../providers/propiedades.service'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.component.html',
  styleUrls: ['./propiedades.component.less']
})

export class PropiedadesComponent implements OnInit {

  public propiedades: Observable<any[]>;

  constructor( public _PropService : PropiedadesService) {

  }
  onSavePropiedad() {
    // let data:Item = {};
    // this.itemsCollection.add(data);
  }
  ngOnInit() {
    this.propiedades = this._PropService.onLoadPropiedades();
    this._PropService.change.subscribe(propiedades => {
      this.propiedades = propiedades
    });
  }


}
