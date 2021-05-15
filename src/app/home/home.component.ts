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
  @Output() characterFilter = 'Show All';
  @Output() usagesFilter = 'Show All';
  @Output() functionsFilter = 'Show All';
  @Output() statusFilter = 'Show All';

  constructor() { }

  ngOnInit() {
    this.characters = basics.survivor;
    this.usages = basics.usages[this.playerType];
    this.functions = basics.functions[this.playerType];
    this.status = basics.status[this.playerType];

  }

  selectChanged(event: any){
    console.log(event);
    switch(event.source._id){
      case 'function':
        this.functionsFilter = event.value;
        break;
      case 'character':
        this.characterFilter = event.value;
        break;
      case 'usage':
        this.usagesFilter = event.value;
        break;
      case 'status':
        this.statusFilter = event.value;
        break;
    }
  }

  tabChanged(event: any){
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

}
