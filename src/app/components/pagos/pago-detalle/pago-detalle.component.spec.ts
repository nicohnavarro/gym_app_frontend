import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoDetalleComponent } from './pago-detalle.component';

describe('PagoDetalleComponent', () => {
  let component: PagoDetalleComponent;
  let fixture: ComponentFixture<PagoDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
