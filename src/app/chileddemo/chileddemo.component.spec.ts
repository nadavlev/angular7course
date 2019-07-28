import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChileddemoComponent } from './chileddemo.component';

describe('ChileddemoComponent', () => {
  let component: ChileddemoComponent;
  let fixture: ComponentFixture<ChileddemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChileddemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChileddemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
