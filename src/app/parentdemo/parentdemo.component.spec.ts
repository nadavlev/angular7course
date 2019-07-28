import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentdemoComponent } from './parentdemo.component';

describe('ParentdemoComponent', () => {
  let component: ParentdemoComponent;
  let fixture: ComponentFixture<ParentdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
