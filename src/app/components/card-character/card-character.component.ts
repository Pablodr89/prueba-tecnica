import { Component, Input, OnInit } from '@angular/core';
import { Character } from '../../interfaces/characters.interface';

@Component({
  selector: 'app-card-character',
  templateUrl: './card-character.component.html',
  styleUrls: ['./card-character.component.css']
})
export class CardCharacterComponent {

  @Input() character!: Character

  ngOnInit() {
    // console.log(this.character)
  }
}
