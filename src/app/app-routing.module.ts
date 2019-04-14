import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContenedorComponent} from './components/contenedor/contenedor.component'
import { FaqComponent } from './components/faq/faq.component';

const routes: Routes = [
  { path: '', component: ContenedorComponent },
  { path: 'propiedad', component: ContenedorComponent },
  { path: 'propiedad/:id' , component: ContenedorComponent},
  { path: 'faq', component: FaqComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
