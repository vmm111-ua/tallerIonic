import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {

  readonly menuFile:string = "../assets/data/menu.json";
  menuOptions=[];

  constructor(private toastController: ToastController) {
    this.presentWelcomeToast();
  }

  ngOnInit() {
    this.getMenu();
  }

  getMenu(){
    fetch(this.menuFile).then(res => res.json())
    .then(json => {
      this.menuOptions = json;
      console.log(this.menuOptions);
    })
  }  

  async presentWelcomeToast() {
    const toast = await this.toastController.create({
      message: 'Welcome to the Star Wars Wiki App!',
      duration: 1000,
      position: 'top',
      color: 'primary'
    });

    await toast.present();
  }
}
