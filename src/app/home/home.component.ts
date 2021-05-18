import { Component, OnInit, Output } from '@angular/core';
import basics from '../../assets/json/Basics.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  basics: any = basics;
  characters: string[] = [];
  usages: string[] = [];
  functions: string[] = [];
  status: string[] = [];
  @Output() playerType = 'survivor';
  @Output() listType = 'perk';
  @Output() characterFilter = 'Show All';
  @Output() usagesFilter = 'Show All';
  @Output() functionsFilter = 'Show All';
  @Output() statusFilter = 'Show All';
  @Output() categoryFilter = 'Show All';
  @Output() subCategoryFilter = 'None';
  constructor() { }

  ngOnInit(){
  }

  onCharacterFilterChanged(newFilter: string){
    this.characterFilter = newFilter;
  }

  onFunctionsFilterChanged(newFilter: string){
    this.functionsFilter = newFilter;
  }

  onUsagesFilterChanged(newFilter: string){
    this.usagesFilter = newFilter;
  }

  onStatusFilterChanged(newFilter: string){
    this.statusFilter = newFilter;
  }

  onCategoryFilterChanged(newFilter: string){
    this.categoryFilter = newFilter;
  }

  onSubCategoryFilterChanged(newFilter: string){
    this.subCategoryFilter = newFilter;
  }

  playerTypeTabChanged(event: any){
    this.playerType = event.value;
    this.characters = basics[event.value];
    this.usages = basics.usages[this.playerType];
    this.functions = basics.functions[this.playerType];
    this.status = basics.status[this.playerType];
    this.characterFilter = 'Show All';
    this.usagesFilter = 'Show All';
    this.functionsFilter = 'Show All';
    this.statusFilter = 'Show All';
  }

  listTypeTabChanged(event: any){
    this.listType = event.value;
  }

}
