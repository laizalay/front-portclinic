import { Service, signal } from '@angular/core';

// Qualquer tela pode chamar: this.notificacao.mostrar('Paciente cadastrado com sucesso.');
@Service()
export class NotificacaoService {
  // Texto do aviso. Vazio = nenhum aviso na tela.
  readonly mensagem = signal('');

  private temporizador?: ReturnType<typeof setTimeout>;

  mostrar(texto: string): void {
    this.mensagem.set(texto);
    clearTimeout(this.temporizador);
    // Some sozinho depois de 3,2 segundos, como no protótipo
    this.temporizador = setTimeout(() => this.mensagem.set(''), 3200);
  }

  fechar(): void {
    clearTimeout(this.temporizador);
    this.mensagem.set('');
  }
}
