import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListenerInfoComponent } from './listener-info.component';

describe('ListenerInfoComponent', () => {
  let component: ListenerInfoComponent;
  let fixture: ComponentFixture<ListenerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListenerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListenerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
