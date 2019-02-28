import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {Oeuvre} from "../../models/Oeuvre";
import {WorksService} from "../../services/works.service";

/**
 * Generated class for the LendCdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lend-cd',
  templateUrl: 'lend-cd.html',
})
export class LendCdPage {

  index: number;
  cd: Oeuvre;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public worksService: WorksService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.cd = this.worksService.cdList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleAppareil() {
    this.cd.isAvailable = !this.cd.isAvailable;
  }

}
