import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableDetalleComponent } from './responsable-detalle.component';

describe('ResponsableDetalleComponent', () => {
  let component: ResponsableDetalleComponent;
  let fixture: ComponentFixture<ResponsableDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsableDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsableDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
