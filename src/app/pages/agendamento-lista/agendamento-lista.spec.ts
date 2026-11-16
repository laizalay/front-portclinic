import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgendamentoLista } from './agendamento-lista';

describe('AgendamentoLista', () => {
  let component: AgendamentoLista;
  let fixture: ComponentFixture<AgendamentoLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgendamentoLista],
    }).compileComponents();

    fixture = TestBed.createComponent(AgendamentoLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
