import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPropiedadComponent } from './detail-propiedad.component';

describe('DetailPropiedadComponent', () => {
  let component: DetailPropiedadComponent;
  let fixture: ComponentFixture<DetailPropiedadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailPropiedadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
