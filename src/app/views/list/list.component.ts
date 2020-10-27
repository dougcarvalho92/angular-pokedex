import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  selectedPkm = null;
  nameFilter = '';
  pokemonList = [
    { name: 'Bulbasaur', number: 1 },
    { name: 'Charmander', number: 4 },
    { name: 'Squirtle', number: 7 },
  ];
  constructor() {}

  ngOnInit(): void {}

  get pkmSprite() {
    const number = ('000' + this.selectedPkm.number).slice(-3);
    return `//serebii.net/pokedex-xy/icon/${number}.png`;
  }

  selectPokemon(pkm) {
    this.selectedPkm = pkm;
    console.log(pkm);
  }
}
