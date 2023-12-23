import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Proyecto1Component } from './components/main/proyecto1/proyecto1.component';
import { Proyecto2SimpsonsComponent } from './components/main/proyecto2-simpsons/proyecto2-simpsons.component';
import { MainComponent } from './components/main/main.component';
import { CharactersListComponent } from './components/main/proyecto3RickAndMorty/characters-list/characters-list.component';
import { CharactersCardComponent } from './components/main/proyecto3RickAndMorty/characters-card/characters-card.component';
import { PipesComponent } from './components/main/pipes/pipes.component';

const routes: Routes = [

{ path: 'proyecto1', component: Proyecto1Component},
{ path: 'proyecto2', component: Proyecto2SimpsonsComponent},
{ path: 'proyecto3', component: CharactersListComponent},
{ path: 'proyecto3/card', component: CharactersCardComponent},
{ path: 'pipes', component: PipesComponent},
// { path: '', component:MainComponent} asi seria el de default


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
