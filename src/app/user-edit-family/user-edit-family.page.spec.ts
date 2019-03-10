import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditFamilyPage } from './user-edit-family.page';

describe('UserEditFamilyPage', () => {
  let component: UserEditFamilyPage;
  let fixture: ComponentFixture<UserEditFamilyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditFamilyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditFamilyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
