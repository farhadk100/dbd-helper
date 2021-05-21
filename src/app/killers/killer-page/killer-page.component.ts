import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import killers from '/src/assets/json/killers.json'
import {DomSanitizer} from "@angular/platform-browser";
import {KeyValue} from "@angular/common";
import {mod} from "ngx-bootstrap/chronos/utils";

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

  constructor(private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.killer = params.name;
    });
    this.killerData = killers[this.killer];
  }

  sanitizeText(htmlIncludedText: String) {
    return this.sanitizer.bypassSecurityTrustHtml(htmlIncludedText.toString());
  }

  asAny(val: any): any {
    return val;
  }

  sortByTitle = (a: KeyValue<string, any>, b: KeyValue<string, any>): number => {
    return a.value.title.localeCompare(b.value.title);
  }

  applyAddon(event: any): void {
    let addon = this.killerData.addons[event.target.title];
    if (!this.alreadySelected(event.target.title)) {
      let modifications = {};
      for (let modifier of addon.modifications) {
        // if (modifier.applied_on.includes('|')) {
        //   let keyValue = modifier.applied_on.split('|');
        //   this.killerData.attributes[keyValue[0]][keyValue[1]] = this.calculator(keyValue[0], this.killerData.attributes[keyValue[0]][keyValue[1]], modifier.value);
        // } else {
        //   this.killerData.attributes[modifier.applied_on].value = this.calculator(modifier.applied_on, this.killerData.attributes[modifier.applied_on].value, modifier.value);
        //   console.log(modifier.applied_on + ': ' + this.killerData.attributes[modifier.applied_on].value);
        // }
        this.selectedModifiers.push({"key": modifier.applied_on, "value": modifier.value});
        console.log(this.selectedModifiers);
      }
      this.selectedAddons.push(event.target.title);
    }
  }

  alreadySelected(addon: string): boolean {
    if (this.selectedAddons.includes(addon)) {
      this.selectedAddons.splice(this.selectedAddons.indexOf(addon), 1);
      return true;
    }
    return false;
  }

  scoreEventsCalculator(attributeKey: string, typeKey: string){
    return this.killerData.attributes[attributeKey][typeKey];
  }

  calculator(attributeKey: string, valueKey = 'value') {
    let evaluatedKeys: Array<string> = [];
    if (valueKey != 'value'){
      let test = 'ok';
      test = 'ok';
    }
    let value = this.killerData.attributes[attributeKey][valueKey];
    let exists;
    let tempModKey = '';
    let tempModValue = '';
    for (let modifier of this.selectedModifiers) {
      tempModKey = modifier.key;
      tempModValue = modifier.value;
      if (tempModKey.includes('|')) {
        let keyValue = tempModKey.split('|');
        tempModKey = keyValue[0];
        if (valueKey != keyValue[1]){
          continue;
        }
        // modifier.value = keyValue[1];
      }
      if (tempModKey == attributeKey) {
        exists = true;
        break;
      }
    }
    if (exists) {
      let element = document.getElementById(attributeKey);
      // @ts-ignore
      element.className += ' text-info';
      this.selectedModifiers.forEach((modifier, index) => {
        if (tempModKey != attributeKey || evaluatedKeys.includes(tempModKey))
          return;
        if (tempModValue.includes('=') || (tempModValue === 'false' || tempModValue === 'true')) {
          value = tempModValue.replace('=', '');
        } else if (tempModValue.includes('%')) {
          let number = [];
          this.selectedModifiers.forEach((mod, i) => {
            if (i<=index)
              return;
            if (mod.key == tempModKey){
              let num = mod.value.match(/[+-\-][0-9]+/);
              number.push(num[0]);
            }
          });
          let num = tempModValue.match(/[+-\-][0-9]+/);
          // @ts-ignore
          number.push(num[0]);
          let percent = this.addPercentages(number);
          if (percent >= 0)
            value = value + (value * (Number(percent) / 100));
          else
            value = value - (value * (Number(percent) / 100));
        } else {
          value = eval(value + tempModValue);
        }
        evaluatedKeys.push(tempModKey);
      });
      return value;
    } else {
      if (value === 0)
        return '0';
      else {
        return this.getAttributeValue(value);
      }
    }
  }

  addPercentages(numbers: Array<any>){
    if (numbers.length == 2){
      return eval (numbers[0] + numbers[1]);
    }
    return numbers[0];
  }


  getAttributeValue(value: any) {
    if (typeof value == 'string' && value.includes('|')) {
      let keyValue = value.split('|');
      return this.killerData.attributes[keyValue[0]][keyValue[1]];
    }
    return value;
  }
}


