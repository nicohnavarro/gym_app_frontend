import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PorNivelCatComponent } from './por-nivel-cat.component';

describe('PorNivelCatComponent', () => {
  let component: PorNivelCatComponent;
  let fixture: ComponentFixture<PorNivelCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PorNivelCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PorNivelCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
