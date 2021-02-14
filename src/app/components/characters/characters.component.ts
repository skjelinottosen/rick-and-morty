import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Character } from './models/character.model';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters: Character[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    for (let i = 1; i <= 34; i++){
      this.getCharacters(i);   
    }
  }

  getCharacters(page){
    this.dataService.getAllCharacters(page).subscribe(response => {

      this.characters.push(...response.results);
    });
  }

}
