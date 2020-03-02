import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

// App
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// Core
import { HeaderComponent } from './core/components/header/header.component';
import { SearchComponent } from './core/components/header/search/search.component';
import { AuthInfoComponent } from './core/components/header/auth-info/auth-info.component';
import { SearchSettingsComponent } from './core/components/header/search-settings/search-settings.component';
import { LayoutComponent } from './core/components/layout/layout.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
// Service
import { SearchService } from './core/services/search.service';
import { AuthService } from './core/services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LayoutComponent,
    NotFoundComponent,
    SearchComponent,
    AuthInfoComponent,
    SearchSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [SearchService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
