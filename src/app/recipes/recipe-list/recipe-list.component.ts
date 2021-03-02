import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://assets.icanet.se/q_auto,f_auto/imagevaultfiles/id_142547/cf_259/poke-bowl-720870-liten.jpg'
    ),
    new Recipe(
      'Another Great Recipe!',
      'sushi',
      'https://www.ica.se/imagevaultfiles/id_67960/cf_259/maki-sushi-5532.jpg'
    ),
  ];

  onSelectedRecipe(recipe: Recipe): void {
    this.recipeWasSelected.emit(recipe);
  }

  constructor() {}

  ngOnInit(): void {}
}
