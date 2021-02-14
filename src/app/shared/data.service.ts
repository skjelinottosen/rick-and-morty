import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../components/characters/models/character.model';
import { CharacterResponse } from '../components/characters/models/character.response';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient: HttpClient) {}

  getAllCharacters(page): Observable<CharacterResponse> {
    return this.httpClient.get<CharacterResponse>(`${environment.rickAndMortyApi.rickAndMortyApiBaseUrl}/character?page=${page}`);
  }
}
