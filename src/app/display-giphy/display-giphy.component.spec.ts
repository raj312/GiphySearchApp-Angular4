import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGiphyComponent } from './display-giphy.component';

describe('DisplayGiphyComponent', () => {
  let component: DisplayGiphyComponent;
  let fixture: ComponentFixture<DisplayGiphyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayGiphyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayGiphyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
