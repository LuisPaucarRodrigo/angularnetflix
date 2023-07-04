import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { HomenetflixComponent } from './homenetflix/homenetflix.component';
import { BuscadornetflixComponent } from './buscadornetflix/buscadornetflix.component';
import { SeriePelisComponent } from './serie-pelis/serie-pelis.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { SuscribeteComponent } from './suscribete/suscribete.component';

const routes: Routes = [
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: LoginComponent },
  { path: 'suscribete', component: SuscribeteComponent },
  { path: 'navigator', component: NavigatorComponent,
    children: [
      { path: '', component: HomenetflixComponent },
      { path: 'buscadornetflix', component: BuscadornetflixComponent },
      { path: 'serie-pelis/:id', component: SeriePelisComponent },
      { path: 'categorias', component: CategoriasComponent },
    ], 
  },
  { path: '**', redirectTo: '/inicio' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
