# Medição de campanhas e contatos

Propriedade GA4: 550127037, denominada `meu-antigravity-app-b50a8`. Fluxo web: Studio Agartha, `G-BK38XHQQYC`. O nome herdado do Firebase não indica uma propriedade diferente.

## Consentimento e testes

A tag só carrega após aceite. Recusar ou retirar o consentimento continua permitindo usar o formulário. Os eventos não enviam campos preenchidos pelo visitante.

Não há coleta nos hosts de desenvolvimento, incluindo localhost e 127.0.0.1. Para testar o site publicado sem enviar dados, abra:

https://studioagartha.com/?analytics_test=1

Essa preferência persiste no navegador utilizado, independentemente do idioma. Ative antes de testar os projetos ou o formulário. Para voltar à medição normal:

https://studioagartha.com/?analytics_test=0

O opt-out é por navegador/perfil; outros dispositivos precisam ser marcados separadamente. Se o navegador bloquear armazenamento, o parâmetro funciona apenas naquela página. Não alteramos filtros permanentes na propriedade nem excluímos dados anteriores.

## Campanhas

Use `utm_source`, `utm_medium` e `utm_campaign`. Opcionalmente `utm_content`, `utm_term` e `utm_id`. Valores aceitos: letras minúsculas sem acentos, números, `_` e `-`, até 80 caracteres. Não coloque nomes de pessoas, e-mails, telefones ou mensagens em parâmetros.

Exemplo para prospecção em Portugal:

https://studioagartha.com/?utm_source=prospeccao&utm_medium=email&utm_campaign=editorial_pt_2026_10

Exemplo para Espanha:

https://studioagartha.com/es/?utm_source=prospeccao&utm_medium=email&utm_campaign=editorial_es_2026_10

As configurações `campaign_source`, `campaign_medium` e `campaign_name` são explicitamente enviadas junto da URL sanitizada. A troca automática de idioma preserva a query. Outros parâmetros e fragmentos não entram em `page_location`; a query e o fragmento do referrer também são descartados. Links antigos enviados sem UTM não ganham atribuição retroativa. Não reenviar mensagens só para acrescentar rastreamento.

## Eventos

| Evento | Momento | Parâmetro adicional |
|---|---|---|
| page_view | Abertura de página com consentimento | URL sanitizada |
| project_view | Abertura de página individual de projeto com consentimento | project_path |
| project_click | Clique em link interno para projeto individual | project_path (destino) |
| contact_open | Abertura do formulário | contact_page (página atual) |
| generate_lead | Resposta de sucesso do provedor do formulário | contact_page (página atual) |

Os eventos personalizados também incluem `site_language` e `page_location`. `project_click` mede o clique; `project_view` mede a abertura, sem supor leitura completa. Não duplicar `generate_lead` com eventos automáticos de formulário. Um lead pode ser um teste se o navegador não tiver sido marcado.

As dimensões de escopo EVENT para `contact_page`, `project_path` e `site_language` permitem agrupar os resultados em relatórios. O relatório por campanha usa `sessionSourceMedium` e `sessionCampaignName`; por país usa `country`. Relatórios devem filtrar `hostName` por studioagartha.com e www.studioagartha.com e distinguir eventos de usuários únicos.

Dimensões criadas e confirmadas pela API em 23/10/2026 na propriedade 550127037: contact_page (16189588350), project_path (16189559147) e site_language (16189158394). Valores novos podem levar até 48 horas para ficar disponíveis nos relatórios; não há preenchimento retroativo dos parâmetros.

## Leitura dos resultados

Compare semanas completas: sessões por país e campanha, projetos visitados, abertura do contato e envio confirmado. Compare também respostas e propostas no controle privado de prospecção; visitas não comprovam interesse em contratar. Não calcule uma taxa de conversão confiável com uma amostra tão pequena. País é uma estimativa e pode estar ausente ou ser afetado por VPN.

Testes locais: `node scripts/check-analytics.mjs`. Verificação completa: `npm run check`. Para validação no navegador, use analytics_test=1 e confirme ausência de requisições à tag. Não aceitar cookies num navegador de QA sem essa marca apenas para fabricar visitas reais.
