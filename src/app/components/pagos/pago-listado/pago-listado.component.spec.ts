import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoListadoComponent } from './pago-listado.component';

describe('PagoListadoComponent', () => {
  let component: PagoListadoComponent;
  let fixture: ComponentFixture<PagoListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagoListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagoListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
