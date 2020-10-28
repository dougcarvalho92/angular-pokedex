import { Component, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/services/pokeapi.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  selectedPkm = null;
  nameFilter = '';
  constructor(private pokeApi: PokeapiService) {}
  ngOnInit(): void {
    this.pokeApi.listAll();
  }

  get pokemonList() {
    return this.pokeApi.pokemonList.filter((pokemon) => {
      return (
        pokemon.name
          .toLocaleLowerCase()
          .indexOf(this.nameFilter.toLocaleLowerCase()) !== -1
      );
    });
  }
  get pkmSprite() {
    const number = ('000' + this.selectedPkm.number).slice(-3);
    return `//serebii.net/pokedex-xy/icon/${number}.png`;
  }

  selectPokemon(pkm) {
    this.selectedPkm = pkm;
    console.log(pkm);
  }
}
