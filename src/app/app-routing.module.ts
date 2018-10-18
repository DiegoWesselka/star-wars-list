import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StarWarsDetailComponent } from 'src/app/star-wars-detail/star-wars-detail.component';
import { StarWarsListComponent } from './star-wars-list/star-wars-list.component';

const routes: Routes = [
  // '/list' listar os personagens
  {
    path: 'list',
    component: StarWarsListComponent,
  },
  // '/list/:id' detalhe do personagem através do "id"
  {
    path: 'list/:id',
    component: StarWarsDetailComponent
  },
  // '/' to '/list' setando uma rota default
  {
    path: '',
    redirectTo: '/list',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
