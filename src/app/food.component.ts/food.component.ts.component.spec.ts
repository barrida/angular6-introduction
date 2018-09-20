import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Food.Component.TsComponent } from './food.component.ts.component';

describe('Food.Component.TsComponent', () => {
  let component: Food.Component.TsComponent;
  let fixture: ComponentFixture<Food.Component.TsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Food.Component.TsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Food.Component.TsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
