import {Component, Input, OnInit} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-killer-addons',
  templateUrl: './killer-addons.component.html',
  styleUrls: ['./killer-addons.component.css']
})
export class KillerAddonsComponent implements OnInit {

  @Input()killer = '';
  @Input()killerData: any;
  @Input()selectedAddons: Array<string> = [];
  @Input()selectedModifiers: Array<any> = [];
  @Input() relatedAddonFilter: string = '';
  addonNameFilter: string = '';

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  removeNameFilter(){
    this.addonNameFilter = '';
  }

  removeRelatedFilter(){
    this.relatedAddonFilter = '';
  }

  affectsAttribute(addonKey: string){
    if (this.relatedAddonFilter.trim().length == 0)
      return true;
    else{
      let addon = this.killerData.addons[addonKey];
      for (let modifier of addon.modifications){
        let key = modifier.applied_on;
        if (key.includes('|')){
          key = key.split('|')[0];
        }
        if (key == this.relatedAddonFilter)
          return true;
      }
    }
    return false;
  }

  sanitizeText(htmlIncludedText: String) {
    return this.sanitizer.bypassSecurityTrustHtml(htmlIncludedText.toString());
  }

  asAny(val: any): any {
    return val;
  }

  htmlStripped(text: string): string {
    return text.replace(/<[^>]*>/g, '');
  }

  clearAddons(){
    let length = this.selectedAddons.length;
    for (let i =0; i < length; i++) {
      this.applyAddon({'target': {'title': this.selectedAddons[0]}});
    }
  }

  applyAddon(event: any): void {
    let addon = this.killerData.addons[event.target.title];
    if (!this.alreadySelected(event.target.title, addon)) {
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

  alreadySelected(addonKey: string, addon: any): boolean {
    if (this.selectedAddons.includes(addonKey)) {
      for(let modification of addon.modifications) {
        for (let modifier of this.selectedModifiers) {
          if (modifier.key == modification.applied_on && modifier.value == modification.value) {
            this.selectedModifiers.splice(this.selectedModifiers.indexOf(modifier), 1);
            let removableElement = modifier.key;
            if (modifier.key.includes('|')) {
              let keyValue = modifier.key.split('|');
              removableElement = keyValue[0];
            }
            let element = document.getElementById(removableElement);
            // @ts-ignore
            element.classList.remove('text-info');
            // @ts-ignore
            element.classList.remove('text-danger');
          }
        }
      }
      this.selectedAddons.splice(this.selectedAddons.indexOf(addonKey), 1);
      return true;
    }
    return false;
  }

}
