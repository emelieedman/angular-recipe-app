import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() selectedRecipe: Recipe;
  isOpen: boolean = false;

  constructor(private recipesService: RecipesService) {}

  ngOnInit(): void {}

  onAddToShoppingList() {
    this.recipesService.addIngredientToShoppingList(
      this.selectedRecipe.ingredients
    );
  }
}
