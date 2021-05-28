import {Component, OnInit, Output, Pipe, PipeTransform} from '@angular/core';
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
  selectedAddons: Array<string> = [];
  selectedModifiers: Array<any> = [];
  @Output() relatedAddonFilter = '';

  constructor(private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {
  }

  relatedAddonFilterUpdated(newFilter: string){
    this.relatedAddonFilter = newFilter;
  }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.killer = params.name;
    });
    this.killerData = killers[this.killer];
  }







}


