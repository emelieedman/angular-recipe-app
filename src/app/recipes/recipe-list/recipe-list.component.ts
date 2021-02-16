import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Url } from 'url';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() onRecipeSelected = new EventEmitter<{
    recipeName: string;
    recipeDescription: string;
    recipeImgPath: Url;
  }>();
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

  onSelectedRecipe(event): void {
    this.onRecipeSelected.emit({
      recipeName: event.recipeName,
      recipeDescription: event.recipeDescription,
      recipeImgPath: event.recipeImgPath,
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
