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
    switch(event.target.id){
      case 'function':
        this.functionsFilter = event.target.value;
        break;
      case 'character':
        this.characterFilter = event.target.value;
        break;
      case 'usage':
        this.usagesFilter = event.target.value;
        break;
      case 'status':
        this.statusFilter = event.target.value;
        break;
    }
  }

}
