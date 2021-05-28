import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-killer-info',
  templateUrl: './killer-info.component.html',
  styleUrls: ['./killer-info.component.css']
})
export class KillerInfoComponent implements OnInit {

  @Input() killer: string = '';
  @Input() killerData: any;
  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  sanitizeText(htmlIncludedText: String) {
    return this.sanitizer.bypassSecurityTrustHtml(htmlIncludedText.toString());
  }
}
