import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './complements/inicio/inicio.component';
import { PagenotfoundComponent } from './complements/pagenotfound/pagenotfound.component';
import { UsuariosComponent } from './components/usuarios-components/usuarios/usuarios.component';
import { UsuariosAgregarComponent } from './components/usuarios-components/usuarios-agregar/usuarios-agregar.component';
import { UsuariosEditarComponent } from './components/usuarios-components/usuarios-editar/usuarios-editar.component';
import { UsuariosEliminarComponent } from './components/usuarios-components/usuarios-eliminar/usuarios-eliminar.component';
import { NoticiasComponent } from './components/noticias-components/noticias/noticias.component';
import { NoticiasAgregarComponent } from './components/noticias-components/noticias-agregar/noticias-agregar.component';
import { NoticiasEditarComponent } from './components/noticias-components/noticias-editar/noticias-editar.component';
import { NoticiasEliminarComponent } from './components/noticias-components/noticias-eliminar/noticias-eliminar.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },


  // Usuarios
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'usuarios-agregar', component: UsuariosAgregarComponent },
  { path: 'usuarios-editar/:id', component: UsuariosEditarComponent },
  { path: 'usuarios-eliminar/:id', component: UsuariosEliminarComponent },


  // Noticias
  { path: 'noticias', component: NoticiasComponent },
  { path: 'noticias-agregar', component: NoticiasAgregarComponent },
  { path: 'noticias-editar/:id', component: NoticiasEditarComponent },
  { path: 'noticias-eliminar/:id', component: NoticiasEliminarComponent },

  // cuando no se encuentra una pagina
  { path: 'notfound', component: PagenotfoundComponent },
  { path: '**', component: PagenotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
