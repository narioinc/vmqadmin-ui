import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthmetricsComponent } from './healthmetrics.component';

describe('HealthmetricsComponent', () => {
  let component: HealthmetricsComponent;
  let fixture: ComponentFixture<HealthmetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthmetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthmetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
