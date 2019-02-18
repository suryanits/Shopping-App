import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Momos', 'Nepali Momo', 'https://external-preview.redd.it/_zYldPcBP7eLMWYwLA8TL8faTTWkoB83u_iBNG5MVnQ.jpg?auto=webp&s=4d7493473aa2dc73103ee763288c3ab7fdf9009c'),
    new Recipe('Momos', 'Nepali Momo', 'https://external-preview.redd.it/_zYldPcBP7eLMWYwLA8TL8faTTWkoB83u_iBNG5MVnQ.jpg?auto=webp&s=4d7493473aa2dc73103ee763288c3ab7fdf9009c')
  ];
  constructor() { }

  ngOnInit() {
  }

}
