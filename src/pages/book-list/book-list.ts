import { Component } from '@angular/core';
import {AlertController, MenuController, ModalController} from 'ionic-angular';
import { Oeuvre } from '../../models/Oeuvre';
import { WorksService } from '../../services/works.service';
import {LendBookPage} from "../lend-book/lend-book";

@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html'
})
export class BookListPage {

  booksList: Oeuvre[];

  constructor(private modalCtrl: ModalController,
              private worksService: WorksService,
              private menuCtrl: MenuController) {}

  ionViewWillEnter() {
    this.booksList = this.worksService.booksList.slice();
  }

  onLoadAppareil(index: number) {
    let modal = this.modalCtrl.create(LendBookPage, {index: index});
    modal.present();
  }

  onToggleMenu() {
    this.menuCtrl.open();
  }
}
