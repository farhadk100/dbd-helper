/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PerksComponent } from './perks.component';

describe('PerksComponent', () => {
  let component: PerksComponent;
  let fixture: ComponentFixture<PerksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
