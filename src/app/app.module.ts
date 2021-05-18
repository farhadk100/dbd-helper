import { OfferingsFilterComponent } from './offerings/offerings-filter/offerings-filter.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { PerksComponent } from './perks/perks.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireModule } from '@angular/fire';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment.prod';
import { OfferingsComponent } from './offerings/offerings.component';
import { PerksFilterComponent } from './perks/perks-filter/perks-filter.component';

@NgModule({
  declarations: [
    HomeComponent,
      PerksComponent,
      FooterComponent,
      OfferingsComponent,
      PerksFilterComponent,
      OfferingsFilterComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
