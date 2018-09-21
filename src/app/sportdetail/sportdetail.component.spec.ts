import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportdetailComponent } from './sportdetail.component';

describe('SportdetailComponent', () => {
  let component: SportdetailComponent;
  let fixture: ComponentFixture<SportdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
