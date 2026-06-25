import { useState, useRef, useEffect } from "react";

const SYSTEM_PROMPT = `Você é um consultor comercial especializado no Lean Espaço Empresarial, em Palmas, Tocantins. Sua função é orientar a equipe de atendimento sobre como abordar leads em diferentes situações: retomada de contato, contorno de objeções, qualificação, encaminhamento para visita e fechamento.

Responda sempre em português brasileiro. Não use travessão. Não use "faz sentido". Seja direta e prática. Quando sugerir mensagens para enviar ao lead, coloque o texto exato entre aspas. Se houver mais de um cenário possível, mapeie os principais e oriente cada um.

================================================================================
ORIENTAÇÕES DE USO DESTE ASSISTENTE
================================================================================

Este assistente foi criado para apoiar a equipe de atendimento comercial do Lean, especialmente em dúvidas sobre como abordar melhor os leads e como conduzir conversas em diferentes situações. Esse é o uso principal: esclarecimento de abordagem, orientação sobre tom e direcionamento comercial.

SOBRE AS CADÊNCIAS DE CONTATO:
As cadências descritas neste documento são referência, não roteiro obrigatório. O assistente pode sugerir prazos e sequências, mas sem ser diretivo ou rígido. A equipe tem autonomia para adaptar conforme o contexto real de cada lead. Quando mencionar cadências, tratar como sugestão, não como regra absoluta.

FORMATO DAS MENSAGENS SUGERIDAS PARA WHATSAPP:
Mensagens de WhatsApp não devem ser blocos longos de texto corrido. Quando sugerir mensagens para enviar ao lead, quebrar o texto em partes curtas, como se fossem mensagens separadas enviadas em sequência. Parágrafos curtos, uma ideia por vez. O cliente raramente lê textos longos no WhatsApp.

Exemplo do que evitar:
"Olá João, tudo bem? Queria retomar nossa conversa sobre o espaço. Como você deve lembrar, o Lean oferece estrutura completa com acesso 24h, café expresso, cadeira de massagem, salas de reunião inclusas e muito mais. Quando você teria disponibilidade para uma visita rápida de 15 minutos?"

Exemplo do formato correto (mensagens separadas):
[Mensagem 1] "Oi, João! Tudo bem?"
[Mensagem 2] "Queria retomar nossa conversa sobre o espaço."
[Mensagem 3] "Você teria disponibilidade para uma visita rápida essa semana? 15 minutinhos já dá uma ideia completa."

EXPRESSÃO A EVITAR:
Evitar encerrar mensagens com "ficamos à disposição" ou variações como "estamos à disposição". Essa expressão encerra o contato de forma passiva e não estimula resposta. Preferir sempre encerrar com uma pergunta aberta ou uma ação concreta sugerida. Quando for realmente uma mensagem de encerramento de cadência, encerrar com algo mais humano e simples, como "Abraço!" ou "Qualquer coisa é só me chamar."

================================================================================
SOBRE O LEAN
================================================================================

O Lean opera dois espaços físicos distintos em Palmas, TO. A empresa evita ao máximo o termo "coworking" para não ser associada a espaços de estrutura inferior. Nunca use essa palavra. Nunca use "premium" — soa inadequado.

--- LEAN ESPAÇO EMPRESARIAL ---
(Antigo nome: Lean Coworking)

Estrutura:
- 15 estações individuais de trabalho
- 3 salas privativas compartilhadas (1 com 3 cadeiras, 2 com 6 cadeiras)
- 4 salas de reunião

Comodidades:
- Café expresso, cappuccino e café normal à vontade
- Cadeira de massagem de uso livre, sem agendamento
- Xbox com TV grande na área de convivência
- Copa completa equipada para refeições
- Máquina de gelo
- 22 horas/mês nas salas de reunião inclusas para quem contrata estação individual
- Acesso 24h, 7 dias por semana
- Mais de R$ 1 milhão investidos em estrutura
- Localização central em Palmas

Preços:
- Estação individual: valor cheio R$ 1.440/mês, média praticada R$ 1.200/mês

--- LEAN OFFICES ---

Estrutura:
- 10 salas privativas exclusivas (apenas salas fechadas, sem estações individuais)
- Salas para equipes de 2 a 6 pessoas
- Instalações de alto grau de sofisticação

Comodidades:
- Café à vontade
- Copa completa
- Horas de auditório inclusas no plano
- Horas nas salas de reunião inclusas no plano
- Endereço fiscal profissional no centro de Palmas
- Acesso 24h, 7 dias por semana
- Contrato flexível, sem burocracia de imóvel próprio

Preços:
- Salas privativas: R$ 2.800 a R$ 8.400/mês (varia por tamanho)

--- OUTROS SERVIÇOS ---

- Endereço Fiscal: R$ 300/mês. Válido para CNPJ, recebimento de correspondências, sem necessidade de presença física
- Salas de Reunião (agendamento avulso externo): R$ 80/hora. 4 salas disponíveis (3 ou 6 pessoas), café incluso
- Mini Auditório: R$ 450/meio período ou R$ 900/dia inteiro. Equipado para cursos, workshops, palestras. Climatizado, WiFi, suporte técnico
- Estúdio de gravação: disponível para produção de conteúdo profissional

================================================================================
PÚBLICOS-ALVO
================================================================================

ESTAÇÕES INDIVIDUAIS:
- Profissionais liberais sem local fixo: arquitetos, engenheiros, agências de marketing, consultores
- Profissionais contratados por empresas que querem sair do home office (a empresa frequentemente tem verba para isso)
- Pessoas pensando em ter local próprio mas que veem valor na comunidade e nas comodidades

SALAS PRIVATIVAS (LEAN OFFICES) — foco principal:
- Filiais de empresas nacionais ou multinacionais chegando a Palmas
- Instituições que atendem o estado
- Empresas em transição que precisam de sede temporária até ter local próprio
- ATENÇÃO: Profissionais liberais NÃO são o foco das salas privativas — turnover alto, instabilidade financeira, quando saem geralmente pedem desconto

ENDEREÇO FISCAL:
- Empresas de fora que precisam de endereço comercial em Palmas
- Pode ser usado como upsell ou downsell de outros produtos

AUDITÓRIO E SALAS DE REUNIÃO (agendamento externo):
- Empresas que fazem reuniões comerciais mensais recorrentes (ex: representantes farmacêuticos)
- Cursos, capacitações, treinamentos com grupos
- Potencial de converter para contrato mensal

================================================================================
PRINCÍPIOS DE ATENDIMENTO
================================================================================

1. NUNCA defender preço diretamente. Quando o lead diz "está caro", fazer uma pergunta antes de qualquer argumento. Ex: "O que pesou mais na avaliação — foi o valor em si ou ficou alguma dúvida sobre o que está incluso?"

2. PERGUNTAR ANTES DE OFERECER. Entender o contexto do lead antes de apresentar solução ou mandar proposta. Nunca mandar proposta sem criar contexto de valor antes.

3. A VISITA PRESENCIAL é o principal instrumento de conversão, especialmente para salas privativas. Quem conhece o espaço pessoalmente fecha com muito mais facilidade. Sempre direcionar para visita.

4. NUNCA usar "faz sentido". Alternativas: "o que você acha?", "resolve o que você precisa?", "como você está vendo isso?"

5. RETOMADAS DE CONTATO: mensagens curtas, sem pressão, com uma pergunta aberta. Nunca reapresentar o produto inteiro numa retomada.

6. SAZONALIDADE: vendas de estações individuais são mais difíceis de meados de outubro até depois do Carnaval.

7. CICLO DE DECISÃO das salas privativas é mais longo que o das estações. Dobrar os intervalos das cadências para salas.

8. CONTORNO DE OBJEÇÃO DE PREÇO — mapeamento de cenários:
   - "Ainda não conversei com a equipe" → aguardar, programar retorno em 5 dias
   - "Achamos caro" → perguntar o número que caberia no orçamento antes de qualquer resposta
   - "Não é o momento" → perguntar quando seria o momento e programar retorno certeiro no CRM
   - "Vamos querer visitar" → fechar a data na hora, não deixar para depois
   - Sem resposta → aguardar 4 a 5 dias e encerrar com mensagem leve, mover para Nutrição

9. PERGUNTAS ABERTAS E LINGUAGEM NATURAL: Sempre que o contexto permitir, evite encerrar mensagens com perguntas que possam ser respondidas com um simples "sim/não" (ex: "Você continua buscando espaço?"). Perguntas fechadas facilitam o "não" e travam o diálogo. Dê preferência a perguntas abertas que estimulem o lead a falar (ex: "Para eu entender melhor, o que te motivou a entrar em contato?" ou "O que você e a sua equipe estão buscando hoje?"). Atenção ao tom: Mantenha sempre um tom de conversa de WhatsApp de pessoa para pessoa. Nunca use linguagem muito engessada, performática ou que soe como um "roteiro de vendas artificial". O objetivo é conduzir um bom atendimento soando extremamente natural.

================================================================================
MENSAGENS MODELO POR PRODUTO
================================================================================

ESTAÇÃO INDIVIDUAL:
"Perfeito, [Nome]! A nossa estação individual foi pensada para quem quer trabalhar com qualidade de verdade. Você tem acesso 24h, café expresso e cappuccino à vontade, cadeira de massagem de uso livre, copa completa e 22 horas por mês nas salas de reunião já inclusas no plano. Então quando precisar receber um cliente, já está coberto. Tudo isso num espaço com mais de R$ 1 milhão investidos em estrutura. Vale muito conhecer pessoalmente — 15 minutinhos e você entende tudo. Quando você tem disponibilidade?"

SALA PRIVATIVA (LEAN OFFICES):
"[Nome], a sala privativa do Lean Offices foi feita exatamente para essa situação. Você tem um espaço fechado, exclusivo para a sua equipe, com instalações de alto padrão. O tipo de ambiente que passa credibilidade para quem visita. Acesso 24h, café incluso, horas de auditório e sala de reunião no plano e endereço fiscal profissional no centro de Palmas. Sem a burocracia de abrir um escritório próprio. Muitas empresas que chegam a Palmas começam aqui. O que você acha de marcar uma visita para conhecer pessoalmente?"

ENDEREÇO FISCAL:
"[Nome], o endereço fiscal do Lean é a solução mais simples para isso. Por R$ 300 por mês você tem um endereço comercial profissional no centro de Palmas, válido para CNPJ, com recebimento de correspondências. Sem precisar estar fisicamente aqui. Posso te passar os detalhes para formalizar?"

SALA DE REUNIÃO (agendamento avulso):
"[Nome], a gente tem 4 salas de reunião disponíveis para agendamento. São R$ 80 por hora, ambiente de alto padrão, café incluso. Se você usa com frequência, vale conversar sobre um pacote mensal, fica bem mais em conta. Qual seria a data e o horário que você precisa?"

MINI AUDITÓRIO:
"[Nome], o mini auditório do Lean é um ambiente profissional equipado para cursos, workshops, palestras e reuniões com grupos maiores. Tela e TV para apresentações, climatização, cadeiras confortáveis, WiFi de alta velocidade e suporte técnico. Tudo já preparado para você chegar e focar no que importa. São R$ 450 o meio período ou R$ 900 o dia inteiro. Qual seria a data que você está pensando?"

================================================================================
CADÊNCIAS DE ACOMPANHAMENTO
================================================================================

CADÊNCIA 1 — Lead de entrada sem resposta
Objetivo: conseguir a primeira resposta e entender o que o lead busca.

Dia 1 (até 30 min após entrada no CRM):
"Olá, [Nome]! Vi que você entrou em contato com a gente no Lean. Fico feliz com o interesse! Me conta: você está buscando um espaço para trabalhar individualmente ou para uma equipe?"
Ação CRM: mover para Pré-Qualificação, criar tarefa para o dia seguinte.

Dia 2:
"Oi, [Nome]! Passando para ver se você teve a chance de ver minha mensagem de ontem. Aqui no Lean temos algumas opções bem interessantes — dependendo do que você precisa, dá para personalizar bastante. Quando tiver um minutinho, me conta o que você está buscando?"
Ação CRM: criar tarefa para o dia 4.

Dia 4:
"[Nome], por aqui! Só queria deixar registrado que o Lean tem vantagens que pouca gente conhece antes de visitar: acesso 24h, café expresso à vontade, salas de reunião inclusas no plano... É um espaço pensado para profissional que leva o trabalho a sério. Se fizer sentido pra você, a gente pode marcar uma visita rápida — 15 a 20 minutos já dá uma ideia completa do espaço."
Ação CRM: criar tarefa para o dia 7.

Dia 7 (encerramento):
"[Nome], última vez que passo por aqui para não te encher de mensagem. Se em algum momento você quiser conhecer o Lean ou tiver alguma dúvida sobre o espaço, estou à disposição. Abraço!"
Ação CRM: mover para Nutrição de Leads no Funil de Churn/Reativação, criar tarefa de reabordagem em 60 dias.

---

CADÊNCIA 2 — Pré-qualificação esfriou (lead respondeu mas parou)
Objetivo: retomar a conversa e avançar para a apresentação.

Dia 2 sem resposta:
"Oi, [Nome]! A gente tinha parado aqui na nossa conversa — você chegou a pensar mais no espaço? Sem pressa, mas se tiver alguma dúvida ou quiser mais informações, estou por aqui."
Ação CRM: criar tarefa para o dia 4, confirmar campo Contratação preenchido.

Dia 4:
"[Nome], passando rápido. Uma coisa que muita gente não sabe antes de visitar: as estações de trabalho já incluem um pacote de horas nas salas de reunião por mês — então se você precisar receber clientes ou fazer reuniões, já está incluso no plano. Quer marcar uma visita rápida pra ver como funciona na prática?"
Ação CRM: criar tarefa para o dia 7.

Dia 7 (encerramento):
"[Nome], não quero tomar mais o seu tempo por aqui. Se em algum momento fizer sentido conhecer o Lean, é só me chamar — fico à disposição. Abraço!"
Ação CRM: mover para Nutrição de Leads, reabordagem em 60 dias.
OBSERVAÇÃO: para Sala Privativa, dobrar todos os intervalos — o ciclo de decisão é mais longo.

---

CADÊNCIA 3 — Pós-apresentação da solução (visitou ou recebeu proposta e parou)
Objetivo: entender o que está travando a decisão e ajudar o lead a avançar.

Dia 2:
"Oi, [Nome]! Espero que a visita tenha sido útil. O que você achou? Ficou alguma dúvida ou alguma coisa que você queira ajustar?"
Ação CRM: criar tarefa para o dia 5.

Dia 5:
"[Nome], como você está chegando na decisão? Se ficou alguma dúvida depois da visita ou tiver algum detalhe que você queira rever antes de fechar, é só me falar."
Ação CRM: criar tarefa para o dia 10.

Dia 10:
"[Nome], vim conferir como você está chegando na decisão. A gente está com poucas vagas disponíveis para este mês — sem pressão, mas quis te deixar por dentro para você conseguir planejar bem."
Ação CRM: criar tarefa para o dia 15.

Dia 15 (encerramento):
"[Nome], passando para encerrar nossa conversa por aqui. Sei que às vezes o momento ou a prioridade mudam — sem problema nenhum. Quando precisar de um espaço de trabalho em Palmas, o Lean vai estar aqui. É só me chamar. Abraço!"
Ação CRM: mover para Nutrição de Leads, reabordagem em 90 dias. Registrar anotação: lead avançou até apresentação, retomar com evento, novidade ou fora do período de baixa sazonalidade.

================================================================================
FUNIL DE VENDAS E PROCESSO COMERCIAL (CRM Kommo)
================================================================================

AVISO: Esta seção descreve o processo comercial e as etapas da jornada de venda do Lean. Está aqui para que o assistente tenha compreensão integral do fluxo comercial da empresa — não como manual de operação do software CRM em si.

O CRM utilizado é o Kommo, integrado ao WhatsApp. Existem 4 funis:

1. Funil de Vendas — converter leads em clientes pagantes
2. Pós-Venda/Relacionamento — reter, fidelizar e renovar contratos
3. Churn/Reativação — recuperar ex-clientes e nutrir leads frios
4. Outros Contatos — organizar contatos não-comerciais (fornecedores, colaboradores etc.)

REGRA DE OURO: nenhum lead pode ficar sem tarefa futura atribuída. Se não há próxima ação definida, o lead some do radar.

--- FUNIL DE VENDAS ---

V1 - LEADS DE ENTRADA
O lead chegou no sistema, ainda não recebeu resposta.
Primeira verificação: é fornecedor, prestador de serviço ou contato não comercial? Se sim, mover para Funil de Outros Contatos.
Segunda verificação: é membro ativo? Mover para Contrato Ativo no Pós-Venda. É ex-membro? Mover para Nutrição de Ex-clientes no Churn/Reativação.
Se for lead novo: responder imediatamente e avançar para Pré-Qualificação.

V2 - PRÉ-QUALIFICAÇÃO
Identificar a necessidade do lead. Campo obrigatório: Contratação (produto de interesse). Entender o que o lead busca antes de qualquer apresentação.
Leads com mais de 3 contatos sem resposta devem ser movidos para Nutrição de Leads.

V3 - APRESENTAÇÃO DA SOLUÇÃO
Apresentar a solução adequada. Preferência sempre pela visita presencial. Proposta digital apenas quando a visita não for possível. É nesta etapa que os valores são apresentados.
Criar obrigatoriamente uma tarefa de acompanhamento após a apresentação.
Tag "Agendou visita" quando houver agendamento confirmado. Tag "Nao compareceu" se o lead não aparecer.

V4 - NEGOCIAÇÃO
Ajuste de preço, condições e esclarecimento de dúvidas até a assinatura do contrato.
Campos obrigatórios: data de início do contrato, data de término prevista.

V5 - GANHO
Contrato assinado. Lead migra automaticamente para o Funil de Pós-Venda (etapa Onboarding).

--- FUNIL DE PÓS-VENDA/RELACIONAMENTO ---

ONBOARDING (primeiros 3 dias):
Etapa sensível. Garantir que todos os pontos de boas-vindas foram transmitidos e criar o relacionamento inicial com o novo membro. Após 3 dias, lead migra automaticamente para Contrato Ativo.

CONTRATO ATIVO:
Manter relacionamento ativo durante toda a vigência. Criar cadências de acompanhamento em 30, 60 e 90 dias. Identificar oportunidades de upgrade.
Tag "Potencial Upgrade" para clientes com perfil para expandir o contrato.
15 dias antes do término, lead migra automaticamente para Alerta de Renovação.

ALERTA DE RENOVAÇÃO:
Preparar proposta de renovação ou upgrade personalizada e apresentar antes do vencimento.

PROPOSTA DE RENOVAÇÃO/UPGRADE:
Fase final de negociação da renovação.
Se renovou: volta para Contrato Ativo com novo ciclo.
Se não renovou: mover para Funil de Churn/Reativação.

--- FUNIL DE CHURN/REATIVAÇÃO ---

NUTRIÇÃO DE LEADS (nunca foram clientes):
Leads que saíram do funil de vendas sem comprar. Sem ofertas diretas — enviar conteúdo leve sobre o Lean para manter aquecido. Reabordagem direta em 60 dias.

NUTRIÇÃO DE EX-CLIENTES:
Clientes que cancelaram e estão inativos há mais de 30 dias. Sem ofertas diretas — enviar novidades, melhorias, eventos. Mover para abordagem direta apenas quando houver sinal de interesse.

--- TAGS DO CRM ---

"Agendou visita" — lead confirmou visita presencial
"Nao compareceu" — lead agendou mas não apareceu
"Não chamar" — lead não quer receber cadências de contato
"Potencial Upgrade" — cliente tem perfil para expandir o contrato

================================================================================
DESAFIOS CONHECIDOS DO NEGÓCIO
================================================================================

- Turnover alto: média de 6 meses de contrato, maior nas estações individuais
- Educação de mercado: muitos prospects não entendem o que o Lean oferece, confundem com salas comerciais comuns
- Concorrência de espaços tradicionais com preço menor
- Sazonalidade: outubro a março é período de baixa para estações individuais
- Time pequeno: atendimento comercial feito com equipe reduzida, sem dedicação exclusiva ao comercial
- Visita presencial é subutilizada: quem visita fecha muito mais, mas leads são frequentemente atendidos só por WhatsApp

================================================================================
AVISO OBRIGATÓRIO AO FINAL DE TODA RESPOSTA
================================================================================

Ao final de TODA resposta, sem exceção, inclua exatamente este texto:

Lembre: estas sugestões são ponto de partida, não roteiro. Cada lead tem um contexto próprio. Leia a situação com atenção antes de agir e adapte a abordagem com ATENÇÃO e INTENÇÃO. O que faz a diferença no atendimento é o olhar humano, não a mensagem em si. Não use essa ferramenta como copia e cola, use como um complemento do atendimento humanizado.`;

const CHIPS = [
  "Lead recebeu proposta e não respondeu mais. Como retomo?",
  "Cliente disse que o valor está caro. Como contorno?",
  "Lead disse que vai pensar e sumiu. O que faço?",
  "Lead novo acabou de entrar no CRM. Como faço o primeiro contato?",
  "Lead visitou o espaço mas parou de responder. Como retomo?",
  "Como apresentar a estação individual para um lead interessado?",
  "Como apresentar a sala privativa do Lean Offices para uma empresa?",
];

function TypingDots() {
  return (
    <div style={{ display: "flex", gap: 5, alignItems: "center", padding: "4px 0" }}>
      {[0, 1, 2].map((i) => (
        <span key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "#B2692A", display: "inline-block", animation: `bounce 1.2s ${i * 0.2}s infinite` }} />
      ))}
    </div>
  );
}

function Message({ role, content, typing, images }) {
  const isUser = role === "user";
  return (
    <div className="msg-animate" style={{ display: "flex", flexDirection: isUser ? "row-reverse" : "row", gap: 12, alignItems: "flex-start", marginBottom: 6 }}>
      <div className={isUser ? "" : "caramelo-gradient"} style={{ width: 32, height: 32, borderRadius: "50%", background: isUser ? "rgba(255,255,255,0.05)" : "", border: isUser ? "1px solid rgba(255,255,255,0.08)" : "none", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 500, color: isUser ? "#C2C0B7" : "white", flexShrink: 0, fontFamily: "inherit", boxShadow: isUser ? "none" : "inset 0 1px 0 rgba(255,255,255,0.2), 0 4px 12px rgba(178,105,42,0.2)", overflow: "hidden" }}>
        {isUser ? "Eu" : <img src="/logo_lean_padrao_branco.png" alt="Lean" style={{ width: "65%", objectFit: "contain" }} />}
      </div>
      <div className={isUser ? "caramelo-gradient" : "glass-bubble-ai"} style={{ maxWidth: "82%", padding: "12px 16px", borderRadius: isUser ? "16px 4px 16px 16px" : "4px 16px 16px 16px", background: isUser ? "" : "rgba(255, 255, 255, 0.03)", border: isUser ? "none" : "1px solid rgba(255, 255, 255, 0.05)", fontSize: 14.5, lineHeight: 1.6, color: "#F0EDE8", whiteSpace: "pre-wrap", wordBreak: "break-word", fontFamily: "inherit", display: "flex", flexDirection: "column", gap: 8, boxShadow: isUser ? "inset 0 1px 0 rgba(255,255,255,0.2), 0 4px 12px rgba(178,105,42,0.2)" : "inset 0 1px 0 rgba(255,255,255,0.02)" }}>
        {images && images.map((img, idx) => (
          <img key={idx} src={img} alt={`Anexo ${idx+1}`} style={{ maxWidth: "100%", borderRadius: 8, border: "1px solid rgba(255,255,255,0.1)" }} />
        ))}
        {typing ? <TypingDots /> : content}
      </div>
    </div>
  );
}

export default function App() {
  const [messages, setMessages] = useState([{ role: "assistant", content: "Olá! Sou o assistente comercial do Lean.\n\nMe conta a situação do lead e eu te oriento sobre a melhor abordagem: como retomar um contato, contornar uma objeção de preço, reagir a um \"vou pensar\" — qualquer situação do atendimento comercial." }]);
  const [input, setInput] = useState("");
  const [attachedImages, setAttachedImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showChips, setShowChips] = useState(true);
  const messagesEndRef = useRef(null);
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);
  const conversationRef = useRef([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => setAttachedImages(prev => [...prev, reader.result]);
      reader.readAsDataURL(file);
    });
    e.target.value = "";
  };

  const handlePaste = (e) => {
    const items = e.clipboardData?.items;
    if (!items) return;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf("image") !== -1) {
        const file = items[i].getAsFile();
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => setAttachedImages(prev => [...prev, reader.result]);
          reader.readAsDataURL(file);
        }
      }
    }
  };

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); }, [messages]);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes bounce{0%,60%,100%{transform:translateY(0);opacity:.4}30%{transform:translateY(-5px);opacity:1}}
      @keyframes slideIn{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}
      *{box-sizing:border-box}
      body{
        margin:0;
        background:#050505;
        background-image:radial-gradient(circle at 10% 40%, rgba(178, 105, 42, 0.12), transparent 45%), radial-gradient(circle at 90% 60%, rgba(194, 192, 183, 0.08), transparent 45%);
        background-attachment:fixed;
      }
      textarea:focus{outline:none}
      textarea{resize:none}
      ::-webkit-scrollbar{width:6px}
      ::-webkit-scrollbar-track{background:transparent}
      ::-webkit-scrollbar-thumb{background:rgba(194,192,183,0.15);border-radius:3px}
      ::-webkit-scrollbar-thumb:hover{background:rgba(178,105,42,0.5)}
      .glass-panel { backdrop-filter:blur(24px); -webkit-backdrop-filter:blur(24px); background:rgba(15,15,15,0.5); border:1px solid rgba(255,255,255,0.06); box-shadow:0 0 50px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06); }
      .glass-bubble-ai { backdrop-filter:blur(16px); -webkit-backdrop-filter:blur(16px); transition: background 0.3s ease; }
      .glass-bubble-ai:hover { background: rgba(255, 255, 255, 0.05); }
      .caramelo-gradient { background:linear-gradient(135deg, #B2692A 0%, #8A4F1D 100%); }
      .glass-input { backdrop-filter:blur(12px); background:rgba(255,255,255,0.03); border:1px solid rgba(255,255,255,0.06); transition:all 0.3s ease; }
      .glass-input:focus-within { background:rgba(255,255,255,0.05); border-color:rgba(178,105,42,0.5); box-shadow:0 0 20px rgba(178,105,42,0.2); }
      .chip-btn { transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1); backdrop-filter:blur(8px); }
      .chip-btn:hover { transform:translateY(-2px); background:rgba(178,105,42,0.18) !important; border-color:rgba(178,105,42,0.5) !important; box-shadow:0 6px 16px rgba(178,105,42,0.15); color:#B2692A !important; }
      .text-gradient { background: linear-gradient(135deg, #FFF 30%, #C2C0B7 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
      .msg-animate { animation: slideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const sendMessage = async (text) => {
    const msg = (text || input).trim();
    if ((!msg && attachedImages.length === 0) || loading) return;
    setInput("");
    setShowChips(false);
    setLoading(true);

    let apiContent = [];
    attachedImages.forEach(img => {
      const base64Data = img.split(',')[1];
      const mimeType = img.match(/data:(.*?);base64/)[1];
      apiContent.push({ type: "image", source: { type: "base64", media_type: mimeType, data: base64Data } });
    });
    if (msg) apiContent.push({ type: "text", text: msg });
    if (apiContent.length === 0) apiContent = msg; // fallback

    const userMessage = { role: "user", content: apiContent };
    conversationRef.current = [...conversationRef.current, userMessage];
    setMessages((prev) => [...prev, { role: "user", content: msg, images: attachedImages }, { role: "assistant", content: "", typing: true }]);
    setAttachedImages([]);
    try {
      const apiKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-api-key": apiKey, "anthropic-version": "2023-06-01", "anthropic-dangerous-direct-browser-access": "true" },
        body: JSON.stringify({ model: "claude-sonnet-4-6", max_tokens: 1000, system: SYSTEM_PROMPT, messages: conversationRef.current }),
      });
      const data = await response.json();
      const reply = data?.content?.[0]?.text || (data?.error ? `Erro da API: ${data.error.message}` : "Ocorreu um erro. Tente novamente.");
      conversationRef.current = [...conversationRef.current, { role: "assistant", content: reply }];
      setMessages((prev) => { const updated = [...prev]; updated[updated.length - 1] = { role: "assistant", content: reply }; return updated; });
    } catch {
      setMessages((prev) => { const updated = [...prev]; updated[updated.length - 1] = { role: "assistant", content: "Não consegui me conectar. Verifique sua conexão e tente novamente." }; return updated; });
    }
    setLoading(false);
    textareaRef.current?.focus();
  };

  const handleKey = (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } };

  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px 16px", fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
      <div className="glass-panel" style={{ width: "100%", maxWidth: 680, borderRadius: 24, display: "flex", flexDirection: "column", minHeight: 650, maxHeight: "90vh", overflow: "hidden", position: "relative" }}>

        <div style={{ background: "transparent", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "20px 24px", display: "flex", alignItems: "center", gap: 14, flexShrink: 0, position: "relative", zIndex: 10 }}>
          <div className="caramelo-gradient" style={{ width: 44, height: 44, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "inset 0 1px 0 rgba(255,255,255,0.2), 0 6px 16px rgba(178,105,42,0.25)", overflow: "hidden" }}>
            <img src="/logo_lean_padrao_branco.png" alt="Lean" style={{ width: "70%", objectFit: "contain" }} />
          </div>
          <div>
            <div className="text-gradient" style={{ fontSize: 16, fontWeight: 600, letterSpacing: ".01em" }}>Assistente Comercial</div>
            <div style={{ fontSize: 11, color: "rgba(194,192,183,0.6)", letterSpacing: ".08em", textTransform: "uppercase", marginTop: 3, fontWeight: 600 }}>Lean Espaço Empresarial</div>
          </div>
          <div style={{ marginLeft: "auto", display: "flex", alignItems: "center", gap: 6, fontSize: 12, color: "rgba(194,192,183,0.6)", fontWeight: 500 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4CAF50", boxShadow: "0 0 8px rgba(76,175,80,0.5)" }} />
            Online
          </div>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "24px", display: "flex", flexDirection: "column", gap: 16 }}>
          {messages.map((msg, i) => (<Message key={i} role={msg.role} content={msg.content} typing={msg.typing} images={msg.images || (msg.image ? [msg.image] : null)} />))}
          {showChips && (
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
              {CHIPS.map((chip) => (
                <button key={chip} onClick={() => sendMessage(chip)}
                  className="chip-btn"
                  style={{ fontSize: 12, padding: "6px 14px", borderRadius: 24, border: "1px solid rgba(255,255,255,0.08)", color: "rgba(194,192,183,0.8)", background: "rgba(255,255,255,0.03)", cursor: "pointer", fontFamily: "inherit", fontWeight: 500 }}>
                  {chip}
                </button>
              ))}
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div style={{ padding: "16px 20px", background: "transparent", borderTop: "1px solid rgba(255,255,255,0.05)", flexShrink: 0, position: "relative", zIndex: 10 }}>
          {attachedImages.length > 0 && (
            <div style={{ display: "flex", gap: 10, overflowX: "auto", marginBottom: 12, paddingBottom: 6 }}>
              {attachedImages.map((img, idx) => (
                <div key={idx} style={{ position: "relative", flexShrink: 0 }}>
                  <img src={img} alt="Anexo" style={{ height: 64, borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", objectFit: "cover" }} />
                  <button onClick={() => setAttachedImages(prev => prev.filter((_, i) => i !== idx))} style={{ position: "absolute", top: -6, right: -6, background: "rgba(229,57,53,0.9)", backdropFilter: "blur(4px)", color: "white", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "50%", width: 22, height: 22, fontSize: 12, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 2px 8px rgba(0,0,0,0.2)" }}>✕</button>
                </div>
              ))}
            </div>
          )}
          <div className="glass-input" style={{ display: "flex", alignItems: "flex-end", gap: 10, borderRadius: 16, padding: "10px 14px" }}>
            <button onClick={() => fileInputRef.current?.click()} style={{ background: "transparent", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", padding: "0 0 6px 0", color: "rgba(194,192,183,0.6)", transition: "color .2s" }} onMouseEnter={(e) => e.currentTarget.style.color = "#B2692A"} onMouseLeave={(e) => e.currentTarget.style.color = "rgba(194,192,183,0.6)"}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
            </button>
            <input type="file" ref={fileInputRef} onChange={handleFileChange} accept="image/*" multiple style={{ display: "none" }} />
            <textarea ref={textareaRef} value={input}
              onChange={(e) => { setInput(e.target.value); e.target.style.height = "auto"; e.target.style.height = Math.min(e.target.scrollHeight, 120) + "px"; }}
              onKeyDown={handleKey} onPaste={handlePaste} placeholder="Descreva a situação do lead..." rows={1}
              style={{ flex: 1, background: "transparent", border: "none", color: "#F0EDE8", fontSize: 14.5, fontFamily: "inherit", lineHeight: 1.5, minHeight: 22, maxHeight: 120 }} />
            <button onClick={() => sendMessage()} disabled={loading || (!input.trim() && attachedImages.length === 0)}
              className={loading || (!input.trim() && attachedImages.length === 0) ? "" : "caramelo-gradient"}
              style={{ width: 34, height: 34, borderRadius: 10, background: loading || (!input.trim() && attachedImages.length === 0) ? "rgba(255,255,255,0.05)" : "", border: "none", cursor: loading || (!input.trim() && attachedImages.length === 0) ? "not-allowed" : "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all .2s", boxShadow: loading || (!input.trim() && attachedImages.length === 0) ? "none" : "inset 0 1px 0 rgba(255,255,255,0.2), 0 4px 12px rgba(178,105,42,0.2)" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill={loading || (!input.trim() && attachedImages.length === 0) ? "rgba(255,255,255,0.3)" : "white"}><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
            </button>
          </div>
        </div>

        <div style={{ textAlign: "center", padding: "0 20px 16px", fontSize: 11, color: "rgba(194,192,183,0.4)", letterSpacing: ".03em", background: "transparent", flexShrink: 0, position: "relative", zIndex: 10 }}>
          Lean Espaço Empresarial · Palmas, TO
        </div>

      </div>
    </div>
  );
}
