import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

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

  getRecipes() {
    return this.recipes.slice();
  }
}
