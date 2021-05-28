import { OfferingsFilterComponent } from './perks-page/offerings/offerings-filter/offerings-filter.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PerksComponent } from './perks-page/perks/perks.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSelectModule} from '@angular/material/select';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFireModule } from '@angular/fire';
import * as firebase from 'firebase';
import { environment } from 'src/environments/environment.prod';
import { OfferingsComponent } from './perks-page/offerings/offerings.component';
import { PerksFilterComponent } from './perks-page/perks/perks-filter/perks-filter.component';
import {RouterModule} from "@angular/router";
import { KillerPageComponent } from './killers/killer-page/killer-page.component';
import {PerksPageComponent} from "./perks-page/perks-page.component";
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KillerInfoComponent } from './killers/killer-page/killer-info/killer-info.component';
import { KillerStatsComponent } from './killers/killer-page/killer-stats/killer-stats.component';
import { KillerAddonsComponent } from './killers/killer-page/killer-addons/killer-addons.component';
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import { KillerListComponent } from './killers/killer-list/killer-list.component';

const routes = [
  { path: '', component: PerksPageComponent},
  { path: 'killers', component: KillerListComponent},
  { path: 'killers/:name', component: KillerPageComponent}
]



@NgModule({
  declarations: [
    PerksPageComponent,
      PerksComponent,
      FooterComponent,
      OfferingsComponent,
      PerksFilterComponent,
      OfferingsFilterComponent,
      KillerPageComponent,
      HomeComponent,
      KillerInfoComponent,
      KillerStatsComponent,
      KillerAddonsComponent,
      KillerListComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    MatButtonToggleModule,
    MatSelectModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    NgbModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
