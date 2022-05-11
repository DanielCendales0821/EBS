import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './complements/component.module';
import { UsuariosComponent } from './components/usuarios-components/usuarios/usuarios.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { UsuariosAgregarComponent } from './components/usuarios-components/usuarios-agregar/usuarios-agregar.component';
import { UsuariosEditarComponent } from './components/usuarios-components/usuarios-editar/usuarios-editar.component';
import { UsuariosEliminarComponent } from './components/usuarios-components/usuarios-eliminar/usuarios-eliminar.component';
import { NoticiasComponent } from './components/noticias-components/noticias/noticias.component';
import { NoticiasAgregarComponent } from './components/noticias-components/noticias-agregar/noticias-agregar.component';
import { NoticiasEditarComponent } from './components/noticias-components/noticias-editar/noticias-editar.component';
import { NoticiasEliminarComponent } from './components/noticias-components/noticias-eliminar/noticias-eliminar.component';
import { HttpClientModule } from '@angular/common/http';

const COMPONENTS = [
  AppComponent,
  UsuariosComponent,
  UsuariosAgregarComponent,
  UsuariosEditarComponent,
  UsuariosEliminarComponent,
  NoticiasComponent,
  NoticiasAgregarComponent,
  NoticiasEditarComponent,
  NoticiasEliminarComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentModule,
    Ng2SearchPipeModule,
    FormsModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
