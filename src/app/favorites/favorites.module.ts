import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavoritesPageRoutingModule } from './favorites-routing.module';

import { FavoritesPage } from './favorites.page';

import { Storage } from '@ionic/storage-angular';
import { StorageService } from '../services/storage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavoritesPageRoutingModule
  ],
  providers: [
      Storage,
      StorageService
  ],
  declarations: [FavoritesPage]
})
export class FavoritesPageModule {}
