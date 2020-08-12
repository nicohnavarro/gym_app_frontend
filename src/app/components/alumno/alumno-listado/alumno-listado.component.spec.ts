import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoListadoComponent } from './alumno-listado.component';

describe('AlumnoListadoComponent', () => {
  let component: AlumnoListadoComponent;
  let fixture: ComponentFixture<AlumnoListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
