import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { People } from '../models/people';
import { Planet } from '../models/planet';
import { Species } from '../models/species';
import { Starship } from '../models/starship';
import { WikiService } from '../services/wiki.service';
import { StorageService } from '../services/storage.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
  standalone: false,
})
export class ArticlePage implements OnInit {

  title: string = "";
  id: string = "";
  category: string = "";

  people: People = new People();
  planet: Planet = new Planet();
  species: Species = new Species();
  starship: Starship = new Starship();

  constructor(private route: ActivatedRoute, private srv: WikiService, private storageSrv: StorageService, private toastController: ToastController) { }


  ngOnInit() {}
  
  public isFavorite: boolean=false;
  private favorites:any[] = [];

  async ionViewWillEnter() {
    this.category = this.route.snapshot.paramMap.get("cat") ?? '';
    this.id = this.route.snapshot.paramMap.get("id") ?? '';

    const data = await this.storageSrv.get('favorites');
    this.favorites = data || [];

    const exists = this.favorites.find(f =>
      f.id.toString() === this.id.toString() &&
      f.category === this.category
    );
    this.isFavorite = !!exists;

    this.srv.getArticle(this.category, this.id).subscribe((result: any) => {
      switch (this.category) {
        case 'People':
          this.people = result.result.properties;
          this.title = this.people.name;
          break;
        case 'Planets':
          this.planet = result.result.properties;
          this.title = this.planet.name;
          break;
        case 'Species':
          this.species = result.result.properties;
          this.title = this.species.name;
          break;
        case 'Starships':
          this.starship = result.result.properties;
          this.title = this.starship.name;
          break;
      }
    });
  }
  
  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'primary'
    });
    await toast.present();
  }

  toggleFavorite(){
    var theName:string="";
    if(this.isFavorite==true){
      this.isFavorite=false;
      var aux = this.favorites.findIndex(f => { return f.id == this.id && f.category == this.category});
      if(aux>=0) {
        this.favorites.splice(aux, 1);
      }
      this.storageSrv.set('favorites', this.favorites);
      this.presentToast('Article removed from favorites successfully');
    }else{
      this.isFavorite=true;
      switch(this.category){
        case 'People':
          theName = this.people.name;
          break;
        case 'Planets':
          theName = this.planet.name;
          break;
        case 'Species':
          theName = this.species.name;
          break;
        case 'Starships':
          theName = this.starship.name;
          break;
      }
      this.favorites.push({category: this.category, id: this.id, name: theName});
      this.storageSrv.set('favorites', this.favorites);
      this.presentToast('Article stored as favorite successfully');
    }
  }
}






