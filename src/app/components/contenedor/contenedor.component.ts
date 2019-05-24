import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropiedadesService } from '../../providers/propiedades.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-contenedor',
  templateUrl: './contenedor.component.html',
  styleUrls: ['./contenedor.component.less']
})
export class ContenedorComponent implements OnInit {
  public show: boolean;
  public propiedades: any[];
  public formSearch = new FormGroup({
    orderBy: new FormControl(''),
    tipo_operacion: new FormControl(''),
    barrio: new FormControl(''),
    tipo_propiedad: new FormControl(''),

  });
  constructor(private route: ActivatedRoute, private _PropService: PropiedadesService) { }
  ngOnInit() {
    this.onShowComponent();
  }
  onShowComponent() {
    if (this.route.snapshot.paramMap.get("id"))
      this.show = false;
    else
      this.show = true;
  }
  onSearch() {
    let Filter: any = {};
    let data = this.formSearch.value;
    if (data.tipo_operacion != "")
      Filter.Tpo_Operacion = data.tipo_operacion;
    if (data.barrio != "")
      Filter.barrio = data.barrio;
    if (data.tipo_propiedad != "")
      Filter.tipo_propiedad = data.tipo_propiedad;
    if (data.orderBy != "")
      Filter.orderBy = data.orderBy;

    if (Object.keys(Filter).length > 0)
      this._PropService.onFilterPropiedades(Filter);
  }

}
