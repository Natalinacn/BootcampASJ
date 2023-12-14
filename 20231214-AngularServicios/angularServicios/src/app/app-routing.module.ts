import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HijoComponent } from './components/hijo/hijo.component';

const routes: Routes = [
{ path: 'hijo', component: HijoComponent}, //https://localhost:4200 Muestro hijoComponent
{ path: '', component: HijoComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
