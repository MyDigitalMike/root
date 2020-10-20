import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkeletonComponent } from './layout/skeleton/skeleton.component';


const routes: Routes = [
  {
    path:'',
    component: SkeletonComponent,
    children:[
      {
        path:'Inicio',
        loadChildren:()=> import('./modules/inicio/inicio.module').then( (m) => m.InicioModule)
      },
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
