import { Component, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { Icone } from './components/icone/icone';
import { NotificacaoService } from './services/notificacao.service';

// Componente principal: a "moldura" do sistema (menu lateral, barra do topo e aviso).
// O conteúdo de cada tela aparece no <router-outlet /> do app.html.
@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive, Icone],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private readonly router = inject(Router);
  protected readonly notificacao = inject(NotificacaoService);

  // Menu lateral aberto no celular?
  protected readonly menuAberto = signal(false);

  // Título da barra do topo. Muda sozinho a cada troca de tela.
  protected readonly tituloPagina = toSignal(
    this.router.events.pipe(
      filter((evento) => evento instanceof NavigationEnd),
      map(() => this.tituloDaUrl(this.router.url)),
    ),
    { initialValue: 'Dashboard' },
  );

  private tituloDaUrl(url: string): string {
    if (url.startsWith('/pacientes')) return 'Pacientes';
    if (url.startsWith('/profissionais')) return 'Profissionais';
    if (url.startsWith('/agendamentos')) return 'Agendamentos';
    return 'Dashboard';
  }

  protected mostrarAjuda(): void {
    this.notificacao.mostrar('Guia rápido disponível na apresentação do projeto.');
  }
}

