import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveConfigurationEditComponent } from './live-configuration-edit.component';

describe('LiveConfigurationEditComponent', () => {
  let component: LiveConfigurationEditComponent;
  let fixture: ComponentFixture<LiveConfigurationEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveConfigurationEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveConfigurationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
