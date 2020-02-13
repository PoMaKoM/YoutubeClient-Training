import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { LoginComponent } from './login/login.component';
import { SearchingResultsComponent } from './searching-results/searching-results.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CardComponent } from './searching-results/card/card.component';
import { CardInfoComponent } from './card-info/card-info.component';
import { SerchComponent } from './shared/header/serch/serch.component';
import { AuthComponent } from './shared/header/auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SearchingResultsComponent,
    NotFoundComponent,
    CardComponent,
    CardInfoComponent,
    SerchComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
