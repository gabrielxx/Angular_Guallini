import { Component, OnInit } from '@angular/core';
import {PropiedadesService} from '../../providers/propiedades.service'
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-propiedad',
  templateUrl: './detail-propiedad.component.html',
  styleUrls: ['./detail-propiedad.component.less']
})
export class DetailPropiedadComponent implements OnInit {

  public propiedad: Observable<any>;
  constructor(  private route: ActivatedRoute,public _PropService : PropiedadesService) { }

  ngOnInit():void {
    this.onLoadInfo();
  }
  onLoadInfo():void{

    let id = this.route.snapshot.paramMap.get("id");
    this.propiedad = this._PropService.onLoadDetailPropiedad(id);

  }
}
