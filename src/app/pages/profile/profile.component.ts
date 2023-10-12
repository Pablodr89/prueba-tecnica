import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';

import { Character } from '../../interfaces/characters.interface';
import { RickMortyService } from '../../services/rick-morty.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  @Input() character!: Character

  constructor(private activatedRoute: ActivatedRoute, private characterService: RickMortyService) {

  }

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.characterService.getCharacter(id))
      )
      .subscribe(character => {
        this.character = character
        sessionStorage.setItem('profile', character.image)
        console.log(sessionStorage.getItem('profile'))
      })
  }
}
