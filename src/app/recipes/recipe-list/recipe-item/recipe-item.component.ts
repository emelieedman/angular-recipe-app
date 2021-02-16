import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() selectedRecipe = new EventEmitter<{
    recipeName: string;
    recipeDescription: string;
    recipeImgPath;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onSelectRecipe(name: HTMLElement, description: HTMLElement, url) {
    this.selectedRecipe.emit({
      recipeName: name.innerText,
      recipeDescription: description.innerText,
      recipeImgPath: url.src,
    });
  }
}
