import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipesService {
  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply a test',
      'https://assets.icanet.se/q_auto,f_auto/imagevaultfiles/id_142547/cf_259/poke-bowl-720870-liten.jpg',
      [new Ingredient('banana', 1)]
    ),
    new Recipe(
      'Another Great Recipe!',
      'sushi',
      'https://www.ica.se/imagevaultfiles/id_67960/cf_259/maki-sushi-5532.jpg',
      [new Ingredient('california rolls', 5)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredientsFromRecipe(ingredients);
  }
}
