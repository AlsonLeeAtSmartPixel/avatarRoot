import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockCalendarComponent } from './mock-calendar.component';

describe('MockCalendarComponent', () => {
  let component: MockCalendarComponent;
  let fixture: ComponentFixture<MockCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
