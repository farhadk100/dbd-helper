import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PerksComponent } from './perks/perks.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [	
    HomeComponent,
      PerksComponent,
      FooterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
