import { Component } from '@angular/core';
import {MenuController, ModalController, NavController, NavParams} from 'ionic-angular';
import {Oeuvre} from "../../models/Oeuvre";
import {WorksService} from "../../services/works.service";
import {LendCdPage} from "../lend-cd/lend-cd";

/**
 * Generated class for the CdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-cd',
  templateUrl: 'cd-list.html',
})
export class CdListPage {

  cdList: Oeuvre[];

  constructor(private modalCtrl: ModalController,
              private worksService: WorksService,
              private menuCtrl: MenuController) {}

  ionViewWillEnter() {
    this.cdList = this.worksService.cdList.slice();
  }

  onLoadAppareil(index: number) {
    let modal = this.modalCtrl.create(LendCdPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }

}
