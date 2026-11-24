import { Routes } from '@angular/router';
import { AgendamentoForm } from './pages/agendamento-form/agendamento-form';
import { AgendamentoLista } from './pages/agendamento-lista/agendamento-lista';
import { Dashboard } from './pages/dashboard/dashboard';
import { PacienteLista } from './pages/paciente-lista/paciente-lista';
import { PacientesForm } from './pages/pacientes-form/pacientes-form';
import { ProfissionalForm } from './pages/profissional-form/profissional-form';
import { ProfissionalLista } from './pages/profissional-lista/profissional-lista';

// "title" é o texto que aparece na aba do navegador
export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: Dashboard, title: 'Dashboard | PortClinic' },

  // Pacientes
  { path: 'pacientes', component: PacienteLista, title: 'Pacientes | PortClinic' },
  { path: 'pacientes/novo', component: PacientesForm, title: 'Novo paciente | PortClinic' },
  { path: 'pacientes/:id/editar', component: PacientesForm, title: 'Editar paciente | PortClinic' },

  // Profissionais
  { path: 'profissionais', component: ProfissionalLista, title: 'Profissionais | PortClinic' },
  {
    path: 'profissionais/novo',
    component: ProfissionalForm,
    title: 'Novo profissional | PortClinic',
  },
  {
    path: 'profissionais/:id/editar',
    component: ProfissionalForm,
    title: 'Editar profissional | PortClinic',
  },

  // Agendamentos 
  { path: 'agendamentos', component: AgendamentoLista, title: 'Agendamentos | PortClinic' },
  { path: 'agendamentos/novo', component: AgendamentoForm, title: 'Novo agendamento | PortClinic' },

  { path: '**', redirectTo: 'dashboard' },
];
