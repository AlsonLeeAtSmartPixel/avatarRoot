import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockMusicListenStepsComponent } from './mock-music-listen-steps.component';

describe('MockMusicListenStepsComponent', () => {
  let component: MockMusicListenStepsComponent;
  let fixture: ComponentFixture<MockMusicListenStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockMusicListenStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockMusicListenStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
