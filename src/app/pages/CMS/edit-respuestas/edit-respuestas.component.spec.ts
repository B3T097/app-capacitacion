import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRespuestasComponent } from './edit-respuestas.component';

describe('EditRespuestasComponent', () => {
  let component: EditRespuestasComponent;
  let fixture: ComponentFixture<EditRespuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRespuestasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRespuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
