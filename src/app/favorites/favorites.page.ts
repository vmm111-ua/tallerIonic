import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: false,
})
export class FavoritesPage {

  public favorites: any[] = [];

  constructor(private storageSrv: StorageService) {}

  // Este método se ejecuta cada vez que entras en la vista
  ionViewWillEnter() {
    this.loadFavorites();
  }

  loadFavorites() {
    this.storageSrv.get('favorites').then(data => {
      this.favorites = data ?? [];
    });
  }

  generateURL(cat: string, id: string) {
    return `/tabs/wiki/article/${cat}/${id}`;
  }
}
