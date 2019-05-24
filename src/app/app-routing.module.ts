import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContenedorComponent} from './components/contenedor/contenedor.component'
import { FaqComponent } from './components/faq/faq.component';
import { EmpresaComponent } from './components/empresa/empresa.component';

const routes: Routes = [
  { path: '', component: ContenedorComponent },
  { path: 'propiedad', component: ContenedorComponent },
  { path: 'propiedad/:id' , component: ContenedorComponent},
  { path: 'faq', component: FaqComponent},
  { path: 'empresa', component: EmpresaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
