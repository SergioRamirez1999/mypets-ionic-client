import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalCreatePage } from './animal-create.page';

describe('AnimalCreatePage', () => {
  let component: AnimalCreatePage;
  let fixture: ComponentFixture<AnimalCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
