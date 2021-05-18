import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import offerings from '../../assets/json/data.json';

@Component({
  selector: 'app-offerings',
  templateUrl: './offerings.component.html',
  styleUrls: ['./offerings.component.css']
})
export class OfferingsComponent implements OnInit {

  offerings: any = offerings.offerings;
  pubSanitizer: DomSanitizer;
  @Input() playerType = 'survivor';
  @Input() categoryFilter = 'Show All';
  @Input() subCategoryFilter = 'None';

  constructor(private sanitizer: DomSanitizer) {
    this.pubSanitizer = sanitizer;
  }

  ngOnInit() {
  }

  sanitizeText(htmlIncludedText: String){
    return this.pubSanitizer.bypassSecurityTrustHtml(htmlIncludedText.toString());
  }

}
