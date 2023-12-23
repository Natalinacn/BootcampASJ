import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { SidebarComponent } from './components/main/sidebar/sidebar.component';
import { Proyecto1Component } from './components/main/proyecto1/proyecto1.component';
import{FormsModule} from '@angular/forms';
import { Proyecto2SimpsonsComponent } from './components/main/proyecto2-simpsons/proyecto2-simpsons.component';
import { CharactersCardComponent } from './components/main/proyecto3RickAndMorty/characters-card/characters-card.component';
import { CharactersListComponent } from './components/main/proyecto3RickAndMorty/characters-list/characters-list.component';
import { PipesComponent } from './components/main/pipes/pipes.component';
import { PipePruebaPipe } from './pipe-prueba.pipe';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    SidebarComponent,
    Proyecto1Component,
    Proyecto2SimpsonsComponent,
    CharactersCardComponent,
    CharactersListComponent,
    PipesComponent,
    PipePruebaPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
