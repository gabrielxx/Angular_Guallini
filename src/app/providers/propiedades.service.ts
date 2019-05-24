import { Injectable, Output, EventEmitter } from '@angular/core'
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


export interface Item {
  barrio: string;
  calle: string;
  cuidad: string;
  cerca?: string;
  entre?: string,
  descripcion: string;
  dormitorios: string;
  estado: string;
  id_propiedad: number;
  id_tipo_moneda: string;
  image: string;
  latitud: string;
  nro: number;
  precio: number;
  publicar: number;
  tipo_operacion: string;
  tipo_propiedad: string;
  lat: number;
  lng: number;
}

@Injectable({
  providedIn: 'root'
})
export class PropiedadesService {
  private itemsCollection: AngularFirestoreCollection<Item>;
  private oDocument:AngularFirestoreDocument<Item>;
  public propiedades : any;

  @Output() change: EventEmitter<boolean> = new EventEmitter();

  constructor(public db: AngularFirestore) { 
    this.itemsCollection = db.collection<Item>('propiedad');
  }

  onLoadPropiedades(){
    let data = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item
        let cordenadas = data.latitud.split(",");
        data.lat  = parseFloat(cordenadas[0]);
        data.lng = parseFloat(cordenadas[1]);
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return data;
  }

  onLoadDetailPropiedad(id){
    let ids = "/propiedad/"+id;        
    this.oDocument = this.db.doc<Item>(ids);
    let data = this.oDocument.valueChanges();
    return data;

  }

  onFilterPropiedades(Filter?){
      let data = this.db.collection<Item>('propiedad', ref => {
        let query : firebase.firestore.CollectionReference | firebase.firestore.Query = ref;
        if (Filter.Tpo_Operacion) { query = query.where('tipo_operacion', '==', Filter.Tpo_Operacion) };
        if (Filter.barrio) { query = query.where('barrio', '==', Filter.barrio) };
        if (Filter.orderBy) { query = query.orderBy(Filter.orderBy, "asc")}
        return query;
      }).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    this.propiedades = data;
    this.change.emit(this.propiedades);
  }
}
