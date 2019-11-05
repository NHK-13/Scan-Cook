import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRecettePage } from './detail-recette.page';

describe('DetailRecettePage', () => {
  let component: DetailRecettePage;
  let fixture: ComponentFixture<DetailRecettePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailRecettePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRecettePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
