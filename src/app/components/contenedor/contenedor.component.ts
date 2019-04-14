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
  public propiedades : any[];
  public formSearch = new FormGroup({
    tipo_operacion: new FormControl(''),
    barrio: new FormControl(''),
    tipo_propiedad: new FormControl(''),

  });
  constructor(private route: ActivatedRoute, private _PropService: PropiedadesService) { }
  ngOnInit() {
    this.onShowComponent();
  }
  onShowComponent() {
    if(this.route.snapshot.paramMap.get("id"))
      this.show = false;
    else
      this.show = true;
  }
  onSearch(){
    let Filter = {
      "Tpo_Operacion" : this.formSearch.get('tipo_operacion').value,
      "barrio" : this.formSearch.get('barrio').value,
      "tipo_propiedad" : this.formSearch.get('tipo_propiedad').value
    };
    this._PropService.onFilterPropiedades(Filter);
  }

}
