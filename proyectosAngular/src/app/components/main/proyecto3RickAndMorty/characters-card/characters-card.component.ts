import { Component, OnInit } from '@angular/core';
import { RickAndMortyService } from 'src/app/services/rick-and-morty.service';

@Component({
  selector: 'app-characters-card',
  templateUrl: './characters-card.component.html',
  styleUrls: ['./characters-card.component.css']
})
export class CharactersCardComponent implements OnInit{

  personajeId: number | undefined;

  constructor(public rickAndMortyService: RickAndMortyService) {}

  ngOnInit(): void {
    this.personajeId
  }

}
