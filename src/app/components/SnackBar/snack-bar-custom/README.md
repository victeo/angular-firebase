## Método `open` da Classe SnackbarService

### Descrição
Este método é responsável por exibir um Snackbar personalizado com a mensagem fornecida, uma classe de painel opcional e um ícone opcional.

### Assinatura do Método
```typescript
open(msg: string, panelClass?: string, icon?: string): void
```

### Parâmetros
- **msg (string):** A mensagem que será exibida no Snackbar.
- **panelClass (string, opcional):** A classe de painel a ser aplicada ao Snackbar. Pode ser vazio, 'primary', 'success', 'warning' ou 'info'.
- **icon (string, opcional):** O ícone a ser exibido no Snackbar. Deve ser um dos termos disponíveis na página [Google Icons](https://fonts.google.com/icons). Se não fornecido, será exibido o ícone padrão 'warning'.

### Exemplo de Uso
```typescript
snackbarService.open('Operação realizada com sucesso', 'success', 'check_circle');
```

### Observações
- A duração padrão do Snackbar é definida como 500000 milissegundos (aproximadamente 8 minutos).
- As posições padrão do Snackbar são horizontalmente à direita e verticalmente ao topo.

### Exemplo de Chamada
```typescript
this.snackbarService.open('Erro ao processar a solicitação', 'warning', 'error');
```

Neste exemplo, um Snackbar será exibido com a mensagem de erro, a classe de painel 'warning' (para indicar um alerta) e o ícone 'error' obtido da página de [Google Icons](https://fonts.google.com/icons). Se nenhum ícone for fornecido, o ícone padrão 'warning' será exibido.

### Nota
Certifique-se de fornecer ícones válidos da página [Google Icons](https://fonts.google.com/icons). Caso contrário, o ícone padrão será exibido.