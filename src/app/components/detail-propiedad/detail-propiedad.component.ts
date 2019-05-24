import { Component, OnInit } from '@angular/core';
import { PropiedadesService } from '../../providers/propiedades.service'
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-detail-propiedad',
  templateUrl: './detail-propiedad.component.html',
  styleUrls: ['./detail-propiedad.component.less']
})
export class DetailPropiedadComponent implements OnInit {

  public propiedad: Observable<any>;
  public id: string;
  protected Msj = "Hola me interesa está propiedad, me podrían enviar toda la información.";
  public formContacto = new FormGroup({
    nombre: new FormControl('',Validators.required),
    telefono: new FormControl('',Validators.required),
    email: new FormControl('',[
                                Validators.required,
                                Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")  
                              ]),
    consulta: new FormControl(this.Msj,Validators.required),
  });
  constructor(private route: ActivatedRoute, public _PropService: PropiedadesService) { }

  ngOnInit(): void {
    this.onLoadInfo();
  }
  onLoadInfo(): void {

    this.id = this.route.snapshot.paramMap.get("id");
    this.propiedad = this._PropService.onLoadDetailPropiedad(this.id);

  }
  onSaveMsj(): void {
    var data = this.formContacto.value;
  }
  clear(): void{
    this.formContacto.reset();
    this.formContacto.get("consulta").setValue(this.Msj);

  }
}
