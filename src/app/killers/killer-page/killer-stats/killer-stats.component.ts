import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DOCUMENT, KeyValue} from "@angular/common";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-killer-stats',
  templateUrl: './killer-stats.component.html',
  styleUrls: ['./killer-stats.component.css']
})
export class KillerStatsComponent implements OnInit {

  @Input() killerData: any;
  @Input() killer: string = '';
  @Input() selectedAddons: Array<string> = [];
  @Input() selectedModifiers: Array<any> = [];
  @Input() relatedAddonFilter: string = '';
  @Output() relatedAddonFilterUpdated = new EventEmitter();

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  sanitizeText(htmlIncludedText: String) {
    return this.sanitizer.bypassSecurityTrustHtml(htmlIncludedText.toString());
  }

  sortByTitle = (a: KeyValue<string, any>, b: KeyValue<string, any>): number => {
    return a.value.title.localeCompare(b.value.title);
  }

  filterToRelated(addonKey: string){
    this.relatedAddonFilter = addonKey;
    this.relatedAddonFilterUpdated.emit(addonKey);
    let element = document.getElementById('killer-addons');
    // @ts-ignore
    element.scrollIntoView();
  }

  calculator(attributeKey: string, valueKey = 'value') {
    let evaluatedKeys: Array<string> = [];
    if (attributeKey == 'full_blink_charge') {
      let test = 'ok';
      test = 'ok';
    }
    let value = this.killerData.attributes[attributeKey][valueKey];
    let exists;
    let tempModKey = '';
    let tempModValue = '';
    this.selectedModifiers.forEach((modifier, index) => {
      tempModKey = modifier.key;
      tempModValue = modifier.value;
      if (tempModKey.includes('|')) {
        let keyValue = tempModKey.split('|');
        tempModKey = keyValue[0];
        if (valueKey != keyValue[1]) {
          return;
        }
        // modifier.value = keyValue[1];
      }
      if (tempModKey != attributeKey || evaluatedKeys.includes(tempModKey)){
        if (value === 0)
          return '0';
        else {
          return this.getAttributeValue(value);
        }
      }
      if (tempModValue.includes('=') || (tempModValue === 'false' || tempModValue === 'true')) {
        value = tempModValue.replace('=', '');
      } else if (tempModValue.includes('%')) {
        let number = [];
        this.selectedModifiers.forEach((mod, i) => {
          if (i <= index)
            return;
          if (mod.key == tempModKey) {
            let num = mod.value.match(/[+-\-][0-9]+/);
            number.push(num[0]);
          }
        });
        let num = tempModValue.match(/[+-\-][0-9]+/);
        // @ts-ignore
        number.push(num[0]);
        let percent = this.addPercentages(number);
        value = value + (value * (Number(percent) / 100));
      } else {
        let number = [];
        this.selectedModifiers.forEach((mod, i) => {
          if (i <= index)
            return;
          if (mod.key == tempModKey) {
            number.push(mod.value);
          }
        });
        number.push(tempModValue);
        value = eval(value + number.join(' '));
      }
      let element = document.getElementById(attributeKey);
      if (value >= this.killerData.attributes[attributeKey][valueKey] || value == 'true'){
        // @ts-ignore
        element.classList.add('text-info');
      } else {
        // @ts-ignore
        element.classList.add('text-danger');
      }

      evaluatedKeys.push(tempModKey);
    });
    return value;
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

  asAny(val: any): any {
    return val;
  }
}
