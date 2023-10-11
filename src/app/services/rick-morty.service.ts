import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../interfaces/characters.interface'


@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  constructor(private _http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this._http.get<Character[]>('https://rickandmortyapi.com/api/character')
  }

  getFilterCharacters(status: string): Observable<Character[]> {
    return this._http.get<Character[]>(`https://rickandmortyapi.com/api/character/?status=${status}`)
  }

  getMoreCharacters(url: string): Observable<Character[]> {
    return this._http.get<Character[]>(url)
  }

  getCharacter(id: number): Observable<Character> {
    return this._http.get<Character>(`https://rickandmortyapi.com/api/character/${id}`)
  }

}
