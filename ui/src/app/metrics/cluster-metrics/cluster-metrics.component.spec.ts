import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClusterMetricsComponent } from './cluster-metrics.component';

describe('ClusterMetricsComponent', () => {
  let component: ClusterMetricsComponent;
  let fixture: ComponentFixture<ClusterMetricsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClusterMetricsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClusterMetricsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
