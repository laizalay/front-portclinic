import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProfissionalLista } from './profissional-lista';

describe('ProfissionalLista', () => {
  let component: ProfissionalLista;
  let fixture: ComponentFixture<ProfissionalLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfissionalLista],
    }).compileComponents();

    fixture = TestBed.createComponent(ProfissionalLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
