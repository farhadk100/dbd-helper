import { KeyValue } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import basics from '../../../../assets/json/basics.json';

@Component({
  selector: 'app-offerings-filter',
  templateUrl: './offerings-filter.component.html',
  styleUrls: ['./offerings-filter.component.css']
})
export class OfferingsFilterComponent implements OnInit {

  categories = basics.categories;
  subCategories: any = ['None'];
  @Input() playerType: string = 'survivor';
  @Input() categoryFilter: string = 'Show All';
  @Output() categoryFilterChanged = new EventEmitter<string>();
  @Input() subCategoryFilter: string = 'None';
  @Output() subCategoryFilterChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  categoryChanged(event: any){
    console.log(event.value);
    this.categoryFilter = event.value;
    this.categoryFilterChanged.emit(event.value);
    this.subCategories = basics.categories[event.value];
    this.subCategoryChanged({'value': 'None'});
  }

  subCategoryChanged(event: any){
    this.subCategoryFilter = event.value;
    this.subCategoryFilterChanged.emit(event.value);
  }

  originalOrder = (a: KeyValue<number,string>, b: KeyValue<number,string>): number => {
    return 0;
  }

}

