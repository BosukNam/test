import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import {FormsModule} from '@angular/forms';
import { HeroesComponentComponent } from './heroes-component/heroes-component.component';
import { MockHeroesComponent } from './mock-heroes/mock-heroes.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroesComponentComponent,
    MockHeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
