import { Component, OnInit } from '@angular/core';
import killers from '/src/assets/json/killers.json'
import {Router} from "@angular/router";

@Component({
  selector: 'app-killer-list',
  templateUrl: './killer-list.component.html',
  styleUrls: ['./killer-list.component.css']
})
export class KillerListComponent implements OnInit {

  killerList = killers;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  asAny(value: any){
    return value;
  }

  goToKiller(killer: any){
    if (killers[killer].back_story != '') {
      let navigation = ['killers'];
      navigation.push(killer);
      this.router.navigate(navigation);
    }
  }

  originalOrder(a: any, b: any){
    return a;
  }

}
