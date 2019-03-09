import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalProfilePage } from './animal-profile.page';

describe('AnimalProfilePage', () => {
  let component: AnimalProfilePage;
  let fixture: ComponentFixture<AnimalProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
