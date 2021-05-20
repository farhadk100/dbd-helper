import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import killers from '/src/assets/json/killers.json'
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-killer-page',
  templateUrl: './killer-page.component.html',
  styleUrls: ['./killer-page.component.css']
})
export class KillerPageComponent implements OnInit {

  killer = '';
  killerData: any;
  constructor(private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
      this.killer = params.name;
    });
    this.killerData = killers[this.killer];
    console.log(this.killerData);
  }

  sanitizeText(htmlIncludedText: String){
    return this.sanitizer.bypassSecurityTrustHtml(htmlIncludedText.toString());
  }

}
