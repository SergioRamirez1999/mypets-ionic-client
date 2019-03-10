import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditLastnamePage } from './user-edit-lastname.page';

describe('UserEditLastnamePage', () => {
  let component: UserEditLastnamePage;
  let fixture: ComponentFixture<UserEditLastnamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditLastnamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditLastnamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
