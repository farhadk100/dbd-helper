import { Component, OnInit, Output } from '@angular/core';
import basics from '../../assets/json/Basics.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  basics: any = basics;
  survivors: string[] = [];
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
    this.survivors = basics.survivors;
    this.usages = basics.usages;
    this.functions = basics.functions;
    this.status = basics.status;

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
  }

}
