import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlAlumnosComponent } from './control-alumnos.component';

describe('ControlAlumnosComponent', () => {
  let component: ControlAlumnosComponent;
  let fixture: ComponentFixture<ControlAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
