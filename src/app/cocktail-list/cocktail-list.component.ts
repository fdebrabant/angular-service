import { Component, OnInit } from '@angular/core';
import { CocktailService } from 'src/services/cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  constructor(public cocktailService: CocktailService) { }

  message!: string;
  cocktails!: any[];

  ngOnInit(): void {
    this.message = this.cocktailService.message
    this.cocktails = this.cocktailService.cocktails
  }

}
