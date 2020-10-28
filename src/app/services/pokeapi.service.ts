import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface Pokemon {
  name: string;
  resource_uri: string;
  number: number;
}

interface PokeListResponse {
  created: string;
  modified: string;
  name: string;
  pokemon: any[];
  resource_uri: string;
}

@Injectable({
  providedIn: 'root',
})
export class PokeapiService {
  private url = `//dev.treinaweb.com.br/pokeapi`;
  pokemonList = [];

  constructor(private http: HttpClient) {}

  listAll() {
    this.http
      .get<PokeListResponse>(`${this.url}/pokedex/1`)
      .subscribe((response) => {
        response.pokemon.forEach((poke) => {
          poke.number = this.getNumberFromURL(poke.resource_uri);
        });
        this.pokemonList = this.sortPokemon(response.pokemon).filter(
          (pokemon) => pokemon.number < 1000
        );
      });
  }
  private getNumberFromURL(url: string) {
    return parseInt(url.replace(/.*\/(\d+)\/$/, '$1'));
  }
  private sortPokemon(pokemonList) {
    return pokemonList.sort((a, b) => a.number - b.number);
  }
}
