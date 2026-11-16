import { Routes } from '@angular/router';
import { AgendamentoForm } from './pages/agendamento-form/agendamento-form';
import { AgendamentoLista } from './pages/agendamento-lista/agendamento-lista';
import { PacientesForm } from './pages/pacientes-form/pacientes-form';
import { PacienteLista } from './pages/paciente-lista/paciente-lista';
import { ProfissionalForm } from './pages/profissional-form/profissional-form';
import { ProfissionalLista } from './pages/profissional-lista/profissional-lista';

export const routes: Routes = [
  { path: '', redirectTo: 'pacientes', pathMatch: 'full' },

  // Pacientes
  { path: 'pacientes', component: PacienteLista },
  { path: 'pacientes/novo', component: PacientesForm },
  { path: 'pacientes/:id/editar', component: PacientesForm },

  // Profissionais
  { path: 'profissionais', component: ProfissionalLista },
  { path: 'profissionais/novo', component: ProfissionalForm },
  { path: 'profissionais/:id/editar', component: ProfissionalForm },

  // Agendamentos
  { path: 'agendamentos', component: AgendamentoLista },
  { path: 'agendamentos/novo', component: AgendamentoForm },
  { path: 'agendamentos/:id/editar', component: AgendamentoForm },

  { path: '**', redirectTo: 'pacientes' },
];

