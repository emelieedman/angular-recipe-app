import { Component, OnInit } from '@angular/core';
import { Url } from 'url';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipeDetails: {
    recipeName: string;
    recipeDescription: string;
    recipeImgPath: Url;
  };

  recipeSelected(event) {
    this.recipeDetails = event;
  }

  constructor() {}

  ngOnInit(): void {}
}
