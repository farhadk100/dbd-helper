import { Input, SecurityContext } from '@angular/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import perks from '../../assets/json/data.json';

@Component({
  selector: 'app-perks',
  templateUrl: './perks.component.html',
  styleUrls: ['./perks.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PerksComponent implements OnInit {

  perks: any = perks.perks;
  pubSanitizer: DomSanitizer;
  @Input() characterFilter = 'Show All';
  @Input() usagesFilter = 'Show All';
  @Input() functionsFilter = 'Show All';
  @Input() statusFilter = 'Show All';

  constructor(private sanitizer: DomSanitizer) {
    this.pubSanitizer = sanitizer;
  }

  ngOnInit() {
  }

  sanitizeText(htmlIncludedText: String){
    return this.pubSanitizer.bypassSecurityTrustHtml(htmlIncludedText.toString());
  }
}
