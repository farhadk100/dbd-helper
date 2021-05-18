import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import basics from '../../../assets/json/Basics.json';

@Component({
  selector: 'app-perks-filter',
  templateUrl: './perks-filter.component.html',
  styleUrls: ['./perks-filter.component.css']
})
export class PerksFilterComponent implements OnInit {

  basics: any = basics;
  @Input() characters: string[] = [];
  @Input() usages: string[] = [];
  @Input() functions: string[] = [];
  @Input() status: string[] = [];
  @Input() playerType = 'survivor';
  @Input() characterFilter = 'Show All';
  @Output() characterFilterChanged = new EventEmitter<string>();
  @Input() usagesFilter = 'Show All';
  @Output() usagesFilterChanged = new EventEmitter<string>();
  @Input() functionsFilter = 'Show All';
  @Output() functionsFilterChanged = new EventEmitter<string>();
  @Input() statusFilter = 'Show All';
  @Output() statusFilterChanged = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
    this.characters = basics.survivor;
    this.usages = basics.usages[this.playerType];
    this.functions = basics.functions[this.playerType];
    this.status = basics.status[this.playerType];
  }

  selectChanged(event: any){
    switch(event.source._id){
      case 'function':
        this.functionsFilter = event.value;
        this.functionsFilterChanged.emit(event.value);
        break;
      case 'character':
        this.characterFilter = event.value;
        this.characterFilterChanged.emit(event.value);
        break;
      case 'usage':
        this.usagesFilter = event.value;
        this.usagesFilterChanged.emit(event.value);
        break;
      case 'status':
        this.statusFilter = event.value;
        this.statusFilterChanged.emit(event.value);
        break;
    }
  }

}
