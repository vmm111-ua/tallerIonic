import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.page.html',
  styleUrls: ['./exit.page.scss'],
  standalone: false,
})
export class ExitPage implements OnInit {

  constructor(private alertCtrl: AlertController, private router: Router) {}

  async confirmExit() {
    const alert = await this.alertCtrl.create({
      header: 'Exit App',
      message: 'This action would close the app.',
      buttons: ['OK']
    });

    await alert.present();
  }

  cancelExit() {
    this.router.navigate(['/tabs/wiki']);
  }

  ngOnInit() {
  }

}
