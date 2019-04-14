import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

export interface Faqs {
  respuesta: string;
  pregunta: string;
}
@Injectable({
  providedIn: 'root'
})
export class FaqService {
  private itemsCollection: AngularFirestoreCollection<Faqs>;

  constructor(public db: AngularFirestore) { 
    this.itemsCollection = db.collection<Faqs>('faq');
  }
  onLoadFaqs(){
    let data = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Faqs
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
    return data;
  }
  onSaveFaq(data:Faqs){
      this.itemsCollection.add(data);      
  }
}
