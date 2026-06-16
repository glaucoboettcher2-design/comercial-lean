# Assistente Comercial - Lean Espaço Empresarial

Chat de orientação comercial para a equipe de atendimento do Lean.

---

## Como fazer o deploy no Lovable

### Passo 1 - Criar conta e projeto no Lovable
1. Acesse lovable.dev e crie uma conta
2. Clique em "New Project"
3. Escolha "Import from GitHub" ou use o editor direto

### Passo 2 - Colar o código
No editor do Lovable, substitua os arquivos pelos desta pasta:
- `src/App.jsx` — componente principal do chat
- `src/main.jsx` — ponto de entrada React
- `index.html` — HTML base
- `package.json` — dependências
- `vite.config.js` — configuração do Vite

### Passo 3 - Configurar a chave da API
1. Acesse console.anthropic.com
2. Crie uma conta (se não tiver) e gere uma API Key
3. No Lovable, vá em Settings > Environment Variables
4. Adicione a variável: VITE_ANTHROPIC_API_KEY = [sua chave]

### Passo 4 - Publicar
Clique em "Deploy" no Lovable. Ele vai gerar uma URL pública.
Compartilhe essa URL com a equipe.

---

## Estrutura dos arquivos

```
lean-assistente/
├── index.html
├── package.json
├── vite.config.js
├── .env.example
└── src/
    ├── main.jsx
    └── App.jsx        ← todo o chat está aqui
```

---

## Custo estimado de uso

O custo da API Anthropic é por token (pedaço de texto processado).
Para o volume de uso da estagiária (estimativa: 20-50 perguntas/dia):
- Custo estimado: R$ 2 a R$ 8 por mês
- Valor mínimo de recarga na Anthropic: US$ 5

---

## Para editar o contexto do Lean

Todo o conhecimento do assistente está na constante `SYSTEM_PROMPT` dentro de `src/App.jsx`.
Para atualizar produtos, preços, regras de atendimento ou qualquer informação, edite esse bloco de texto.
