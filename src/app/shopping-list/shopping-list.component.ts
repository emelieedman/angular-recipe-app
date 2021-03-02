import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [];

  constructor() {}

  ngOnInit(): void {}

  addItemToShoppingList(event: Ingredient) {
    console.log(event);
    this.ingredients.push(event);
    console.log(this.ingredients);
  }
}
