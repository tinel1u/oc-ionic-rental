import { Component } from '@angular/core';
import {BookListPage} from '../book-list/book-list';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  bookListPage = BookListPage;

}
