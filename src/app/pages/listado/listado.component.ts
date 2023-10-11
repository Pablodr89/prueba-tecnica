import { Component, OnInit } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  characters: Character[] = []
  loadMoreCh: Character[] = []
  newCharacters: Character[] = []
  data: any = []
  cantidad: number = 8
  url: string = ''
  max: number = 20

  constructor(private characterService: RickMortyService) {

  }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe(
      characters => {
        this.data = Object.values(characters)
        this.url = this.data[0].next
        this.characters = this.data[1]
        this.loadMoreCh = this.data[1].slice(0, 8)
      })
  }

  filterCharacters(status: string) {
    this.cantidad = 8
    this.max = 20
    this.characterService.getFilterCharacters(status).subscribe(
      characters => {
        this.data = Object.values(characters)
        this.url = this.data[0].next
        this.characters = this.data[1]
        this.loadMoreCh = this.data[1].slice(0, 8)
      })
  }

  loadMore() {
    this.loadMoreCh = []
    this.cantidad += 8
    this.loadMoreCh = this.characters.slice(0, this.cantidad)
    if(this.loadMoreCh.length === this.max) {
      this.max += 20
      this.characterService.getMoreCharacters(this.url).subscribe(
        characters => {
          this.data = Object.values(characters)
          this.url = this.data[0].next
          this.newCharacters = this.data[1]
          this.newCharacters.forEach(character => {
          this.characters.push(character)
          });
        })
    }
  }
}
