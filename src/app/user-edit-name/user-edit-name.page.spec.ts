import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserEditNamePage } from './user-edit-name.page';

describe('UserEditNamePage', () => {
  let component: UserEditNamePage;
  let fixture: ComponentFixture<UserEditNamePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserEditNamePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserEditNamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
