import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';


const routes: Routes = [
  {
    path:'',
    component: SkeletonComponent,
    children:[
      {
        path:'NuestroEquipo',
        loadChildren:()=> import('./modules/nuestroequipo/nuestroequipo.module').then( (m) => m.NuestroEquipoModule)
      },
      {
        path:'NuestraComunidad',
        loadChildren:()=> import('./modules/comunidad/comunidad.module').then( (m) => m.InicioModule)
      },
      {
        path:'EnConstruccion',
        loadChildren:()=> import('./modules/construccion/construccion.module').then( (m) => m.ConstruccionModule)
      },
      {
        path:'Contacto',
        loadChildren:()=> import('./modules/contacto/contacto.module').then( (m) => m.ContactoModule)
      },
      {
        path:'SanRoqueCifras',
        loadChildren:()=> import('./modules/cifras/cifras.module').then( (m) => m.CifrasModule)
      },
      {
        path:'ComunicacionC',
        loadChildren:()=> import('./modules/comunicacion-comunidad/comunicacion-comunidad.module').then( (m) => m.ComunicacionComunidadModule)
      },
      {
        path:'AcercaDe',
        loadChildren:()=> import('./modules/acerca/acerca.module').then( (m) => m.AcercaModule)
      },
      {
        path:'Linea',
        loadChildren:()=> import('./modules/linea-t/linea-t.module').then( (m) => m.LineaTModule)
      },
      {
        path:'Programas',
        loadChildren:()=> import('./modules/progrmasm/progrmasm.module').then( (m) => m.ProgrmasmModule)
      },
      {
        path:'Entregables',
        loadChildren:()=> import('./modules/entregablesg/entregablesg.module').then( (m) => m.EntregablesgModule)
      },
      {
        path:'Implementacion',
        loadChildren:()=> import('./modules/implementacionm/implementacionm.module').then( (m) => m.ImplementacionmModule)
      },
      {
        path:'Agradecimientos',
        loadChildren:()=> import('./modules/agradecimientosa/agradecimientosa.module').then( (m) => m.AgradecimientosaModule)
      },
      {
        path:'',
        loadChildren:()=> import('./modules/inicio/inicio.module').then( (m) => m.InicioModule)
      },
      {
        path:'**',
        loadChildren:()=> import('./modules/error/error.module').then( (m) => m.ErrorModule)
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
