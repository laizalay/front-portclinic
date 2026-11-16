import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfissionalForm } from './profissional-form';

describe('ProfissionalForm', () => {
  let component: ProfissionalForm;
  let fixture: ComponentFixture<ProfissionalForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfissionalForm],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfissionalForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
