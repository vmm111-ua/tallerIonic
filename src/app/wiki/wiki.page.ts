import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';

@Component({
  selector: 'app-wiki',
  templateUrl: './wiki.page.html',
  styleUrls: ['./wiki.page.scss'],
  standalone: false,
})
export class WikiPage implements OnInit {

  readonly catogoriesMockup: string = "./assets/data/categories.json";

  categories: Category[] = [];

  ngOnInit() {
    this.getData();
  }

  getData() {
    fetch(this.catogoriesMockup).then(res => res.json())
    .then(json => {
      this.categories = json;
    });
  }

  selectedCategory: string = "";

  selectCategory(name: string){
    this.selectedCategory = name;
  }
}
