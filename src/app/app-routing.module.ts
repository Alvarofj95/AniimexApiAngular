import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//componentes
import { ListarAnimeComponent } from './components/listar-anime/listar-anime.component';
import { CrearAnimeComponent } from './components/crear-anime/crear-anime.component';

const routes: Routes = [
  { path: '', component: ListarAnimeComponent },
  { path: 'crear-anime', component: CrearAnimeComponent },
  { path: 'editar-anime/:id', component: CrearAnimeComponent },
  { path: '**', redirectTo:'', pathMatch: 'full'} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
