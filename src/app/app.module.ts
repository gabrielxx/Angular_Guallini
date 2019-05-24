import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';


//Librerias
import {AngularFireModule} from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore';
//import { ScrollingModule} from '@angular/cdk/scrolling'
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import {NgxPaginationModule} from 'ngx-pagination'; 

//Componentes
import { AppComponent } from './app.component';
import { FaqComponent } from './components/faq/faq.component'
import { DetailPropiedadComponent } from './components/detail-propiedad/detail-propiedad.component';
import { PropiedadesComponent } from './components/propiedades/propiedades.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContenedorComponent } from './components/contenedor/contenedor.component';
import { HeaderComponent } from './components/header/header.component';
import { MapComponent } from './components/map/map.component';

//Servicios
import {PropiedadesService} from './providers/propiedades.service';
import { FaqService } from './providers/faq.service';
import { from } from 'rxjs';
import { EmpresaComponent } from './components/empresa/empresa.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MapComponent,
    ContenedorComponent,
    DetailPropiedadComponent,
    PropiedadesComponent,
    FaqComponent,
    EmpresaComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
   // ScrollingModule,
    NgxPaginationModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDbJ4eamZ_I7dLXK68Ugphk4wre_trnoF0'
    })
  ],
  providers: [
    PropiedadesService,
    FaqService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
