import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArticlePageRoutingModule } from './article-routing.module';
import { ArticlePage } from './article.page';

import { Storage } from '@ionic/storage-angular';
import { StorageService } from '../services/storage.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArticlePageRoutingModule
  ],
  providers: [
      Storage,
      StorageService
  ],
  declarations: [ArticlePage]
})
export class ArticlePageModule {}
