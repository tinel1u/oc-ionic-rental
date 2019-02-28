import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {Oeuvre} from "../../models/Oeuvre";
import {WorksService} from "../../services/works.service";

/**
 * Generated class for the LendBookPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lend-book',
  templateUrl: 'lend-book.html',
})
export class LendBookPage {

  index: number;
  book: Oeuvre;

  constructor(public navParams: NavParams,
              public viewCtrl: ViewController,
              public worksService: WorksService) {
  }

  ngOnInit() {
    this.index = this.navParams.get('index');
    this.book = this.worksService.booksList[this.index];
  }

  dismissModal() {
    this.viewCtrl.dismiss();
  }

  onToggleAppareil() {
    this.book.isAvailable = !this.book.isAvailable;
  }

}
