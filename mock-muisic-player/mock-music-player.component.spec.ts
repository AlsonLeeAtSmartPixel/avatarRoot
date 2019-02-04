import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MockMusicPlayerComponent } from './mock-music-player.component';

describe('MockMusicPlayerComponent', () => {
  let component: MockMusicPlayerComponent;
  let fixture: ComponentFixture<MockMusicPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MockMusicPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MockMusicPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
