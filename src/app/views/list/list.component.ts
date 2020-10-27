import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  pokemonList = [
    { name: 'Bulbasaur', number: 1 },
    { name: 'Charmander', number: 4 },
    { name: 'Squirtle', number: 7 },
  ];
  constructor() {}

  ngOnInit(): void {}
}
