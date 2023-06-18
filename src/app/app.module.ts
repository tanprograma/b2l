import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdvertComponent } from './components/advert/advert.component';
import { HeaderComponent } from './components/header/header.component';
import { CardComponent } from './components/card/card.component';
import { MenuComponent } from './components/menu/menu.component';
import { PostsComponent } from './components/posts/posts.component';
import { AddBiltilComponent } from './components/add-biltil/add-biltil.component';
import { CreateEndogenousComponent } from './components/create-endogenous/create-endogenous.component';
import { CreateExogenousComponent } from './components/create-exogenous/create-exogenous.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdvertComponent,
    HeaderComponent,
    CardComponent,
    MenuComponent,
    PostsComponent,
    AddBiltilComponent,
    CreateEndogenousComponent,
    CreateExogenousComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
