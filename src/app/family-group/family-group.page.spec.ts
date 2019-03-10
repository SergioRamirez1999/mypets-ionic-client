import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyGroupPage } from './family-group.page';

describe('FamilyGroupPage', () => {
  let component: FamilyGroupPage;
  let fixture: ComponentFixture<FamilyGroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyGroupPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyGroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
