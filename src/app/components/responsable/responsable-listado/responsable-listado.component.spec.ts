import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsableListadoComponent } from './responsable-listado.component';

describe('ResponsableListadoComponent', () => {
  let component: ResponsableListadoComponent;
  let fixture: ComponentFixture<ResponsableListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsableListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsableListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
