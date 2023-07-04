import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomenetflixComponent } from './homenetflix/homenetflix.component';
import { BuscadornetflixComponent } from './buscadornetflix/buscadornetflix.component';
import { SeriePelisComponent } from './serie-pelis/serie-pelis.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { SuscribeteComponent } from './suscribete/suscribete.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    LoginComponent,
    HomenetflixComponent,
    BuscadornetflixComponent,
    SeriePelisComponent,
    CategoriasComponent,
    SuscribeteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
