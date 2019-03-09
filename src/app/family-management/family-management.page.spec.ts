import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyManagementPage } from './family-management.page';

describe('FamilyManagementPage', () => {
  let component: FamilyManagementPage;
  let fixture: ComponentFixture<FamilyManagementPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FamilyManagementPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
