import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from "../pages/home/home";
import { BookListPage } from "../pages/book-list/book-list";
import {SettingsPage} from "../pages/settings/settings";
import {TabsPage} from "../pages/tabs/tabs";
import {WorksService} from "../services/works.service";
import {CdListPage} from "../pages/cd-list/cd-list";
import {LendCdPage} from "../pages/lend-cd/lend-cd";
import {LendBookPage} from "../pages/lend-book/lend-book";

@NgModule({
  declarations: [
    LendBookPage,
    LendCdPage,
    CdListPage,
    MyApp,
    HomePage,
    BookListPage,
    SettingsPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LendBookPage,
    LendCdPage,
    CdListPage,
    MyApp,
    HomePage,
    BookListPage,
    SettingsPage,
    TabsPage,
  ],
  providers: [
    WorksService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
