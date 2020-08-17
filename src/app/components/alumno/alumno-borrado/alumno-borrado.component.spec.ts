import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoBorradoComponent } from './alumno-borrado.component';

describe('AlumnoBorradoComponent', () => {
  let component: AlumnoBorradoComponent;
  let fixture: ComponentFixture<AlumnoBorradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoBorradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoBorradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
