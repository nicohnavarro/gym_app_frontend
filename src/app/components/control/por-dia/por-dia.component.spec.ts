import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorDiaComponent } from './por-dia.component';

describe('PorDiaComponent', () => {
  let component: PorDiaComponent;
  let fixture: ComponentFixture<PorDiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorDiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorDiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
