# Design system — Estúdio Agartha

Este documento registra a linguagem visual já usada no site e a forma correta de ampliá-la. A fonte de verdade dos tokens é [`src/styles/global.css`](../src/styles/global.css).

Prévia visual: `/design-system` no site ou servidor local. A página não aparece na navegação e possui `noindex`; como o site é estático, o endereço não é privado.

## Princípios

1. **Editorial e direto:** composição arejada, títulos expressivos e pouco ruído visual.
2. **Turquesa com função:** a cor viva identifica a marca; tons escuros garantem leitura e ação.
3. **Superfícies suaves:** cartões e painéis usam branco ou cinzas frios sobre o fundo cinza-claro.
4. **Movimento discreto:** transições reforçam hierarquia sem bloquear leitura e respeitam `prefers-reduced-motion`.
5. **Multilíngue por padrão:** componentes devem acomodar PT, EN e ES sem larguras rígidas para texto.

## Tokens

Os tokens são declarados com `@theme`, portanto funcionam como variáveis CSS e como utilitários Tailwind (`text-brand`, `bg-canvas`, `rounded-card`, por exemplo).

### Cores

| Token | Valor | Uso |
| --- | --- | --- |
| `brand` | `#00A69C` | Títulos grandes, ícones e áreas decorativas |
| `brand-strong` | `#007A73` | Ações, links e texto pequeno; contraste 5,21:1 sobre branco |
| `brand-active` | `#006B66` | Hover/active de ações; contraste 6,37:1 sobre branco |
| `brand-soft` | `#8DCAC7` | Acentos gráficos não textuais |
| `brand-tint` | turquesa a 10% | Fundo de ícones e realces leves |
| `canvas` | `#E5E5E5` | Fundo geral da página |
| `surface-muted` | `#E1E4ED` | Cartões de portfólio e mídia |
| `surface-soft` | `#F7F8FA` | Cartões internos e hover suave |
| `ink` | `#333333` | Títulos e conteúdo de alta ênfase |
| `ink-muted` | `#686D85` | Corpo de texto e conteúdo secundário |
| `line` | `#F1F5F9` | Divisórias em superfícies claras |

Não use `brand` para texto pequeno sobre branco nem como fundo de botão com rótulo pequeno. Nesses casos, use `brand-strong`; reserve `brand` para títulos grandes, ícones ou blocos com texto grande.

### Tipografia

| Token/classe | Família | Uso |
| --- | --- | --- |
| `font-sans` | Coolvetica RG | Interface, corpo e títulos padrão |
| `font-poppins` | Poppins (400, 500, 600, 700) | Alternativa para textos longos, interface e peças que peçam geometria mais regular |
| `font-condensed` | Coolvetica Condensed RG | Títulos editoriais compactos |
| `font-compressed` | Coolvetica Compressed HV | Destaques de alto impacto e pouco texto |
| `font-crammed` | Coolvetica Crammed RG | Composição display excepcional |

- Corpo: `text-base leading-relaxed`; descrições dos cartões de serviços: `text-sm leading-[1.55]`.
- Título de página: `text-4xl leading-tight sm:text-5xl`.
- Título de seção: `text-2xl sm:text-3xl`.
- Eyebrow: `text-sm uppercase tracking-[0.18em]`.
- Evite peso artificial alto em Coolvetica; Poppins possui arquivos locais para os pesos 400, 500, 600 e 700.
- Poppins está disponível localmente com `font-poppins`; não substitui a fonte padrão. Arquivos sob [SIL Open Font License 1.1](../src/assets/fonts/OFL-poppins.txt).

Escala de referência medida na home:

| Uso | Tamanho | Entrelinha | Espaçamento entre letras |
| --- | --- | --- | --- |
| Hero | 35,2 / 56 / 80px | 1,2 (42,24 / 67,2 / 96px) | 0,48px |
| Título de seção | 30 / 36px | 36 / 40px | 0,48px |
| Corpo de seção | 16px | 26px | 0,48px |
| Título de serviço | 18px | 28px | 0,48px |
| Descrição de serviço | 14px | 21,7px | 0,48px |
| Rótulo em caixa alta | 14px | 20px | 2,52px |

Os tamanhos separados por barra correspondem a mobile, tablet e desktop. O `letter-spacing: 0.03em` herdado do corpo equivale a 0,48px na configuração atual; rótulos usam `tracking-[0.18em]`. Kerning entre pares de letras fica a cargo da fonte e do navegador, sem correção manual global. Variações específicas, como `tracking-tight`, devem ser conferidas no componente de origem.

### Espaçamento e layout

- A escala de espaçamento é a escala padrão do Tailwind; não crie um segundo conjunto numérico.
- Container do site: `max-w-7xl`, com `px-4 sm:px-6 lg:px-8`.
- Seções principais: fundo branco, `rounded-3xl`, `px-4/6` e `py-10/12`, com 40px de separação na home.
- Grades: comece em uma coluna e expanda em `sm`/`lg`; textos nunca devem depender de largura fixa.

### Forma, elevação e movimento

| Token | Valor | Uso |
| --- | --- | --- |
| `rounded-control` | `10px` | Navegação e controles compactos |
| `rounded-card` | `16px` | Cartões e campos |
| `rounded-panel` | `24px` | Seções e painéis principais |
| `shadow-selected` | sombra teal suave | Seleção explícita de cartão |
| `ease-reveal` | curva de desaceleração | Entrada de conteúdo |

Use `200–300ms` em hover/estado e `650ms` somente no reveal de seções. Não dependa de animação para comunicar estado.

## Componentes e padrões

### Botões

**Primário**

```html
<button class="rounded-xl bg-brand-strong px-6 py-3 font-medium text-white transition-colors hover:bg-brand-active">
  Solicitar orçamento
</button>
```

- Uma ação primária por bloco.
- `disabled` mantém o rótulo legível e remove expectativa de interação.
- Use `aria-controls` quando o botão abrir drawer ou menu.

**Secundário**

```html
<button class="rounded-lg border border-brand-strong px-5 py-2 text-sm text-brand-strong">
  Ação secundária
</button>
```

### Links

- Links no corpo: `text-brand-strong underline`.
- Links de navegação podem usar `text-ink` e revelar `brand` no hover.
- Links externos abertos em nova aba precisam de `rel="noopener noreferrer"` e rótulo acessível quando o contexto não for evidente.

### Ícones e símbolos

- A interface usa SVG de `@lucide/astro` (serviços, setas, menu e contato); redes sociais usam SVG de `astro-icon` com os nomes `mdi:instagram`, `mdi:linkedin` e `mdi:telegram`.
- Medidas em uso: 20px nos serviços, 16px em ações e contato, 14px nas setas dos projetos e 24px no menu mobile. A cor segue o contexto; ícones decorativos recebem `aria-hidden="true"`.
- Não use emoji ou caracteres de seta como ícones de interface. Preserve o logotipo oficial como arquivo de marca.

### Campos

```html
<input class="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand focus:ring-2 focus:ring-brand/10" />
```

- Todo campo possui `label` visível.
- Mensagens de erro/sucesso usam `role="status"` e `aria-live` quando atualizadas dinamicamente.
- Validação nativa e limites de tamanho permanecem ativos.
- Quando o menu aberto precisar seguir a identidade do site, use o padrão demonstrado na página de design system: `details`/`summary` com opções em botões, indicação de seleção, retorno de foco e fechamento por `Escape` ou clique fora. O exemplo é visual e não envia dados.

### Cartões

- Portfólio: `surface-muted`, mídia dominante, cantos de 32px, título turquesa centralizado e categoria abaixo.
- Serviço/conteúdo: `surface-soft` ou branco, borda discreta e raio de 16–24px.
- Estado selecionado precisa de mais de um sinal: borda/sombra e `aria-pressed`, não apenas cor.
- Depoimento: superfície suave, ícone de citação, texto curto, avatar de 56px, controles discretos e link para o perfil ou empresa do cliente. Não publique textos ou nomes de exemplo.

### Navegação, drawer e consentimento

- Menus e drawers fecham por botão, overlay e `Escape`.
- Ao fechar drawer, devolva foco ao controle que o abriu.
- Bloqueie scroll do corpo somente enquanto o painel estiver aberto.
- Consentimento analítico deve continuar recusável e não pode bloquear o site.

## Inventário de elementos em uso

| Elemento | Implementação de referência | Regra principal |
| --- | --- | --- |
| Logo, navegação, idiomas e menu mobile | `src/components/Header.astro` | PT/EN/ES, menu lateral com foco e fechamento |
| Hero, seções, CTA e processo expansível | `src/pages/index.astro` | Painéis brancos, 40px entre seções, chamada visível |
| Cards de serviço | `src/pages/index.astro` | `surface-soft`, ícone SVG, título turquesa, hover sutil |
| Filtros e cards de portfólio | `src/pages/projects/index.astro` | Estado ativo, imagem fluida, 32px de raio |
| Imagem do card e variantes | `src/components/ProjectThumbnail.astro` | Listagem e destaque preservam sua regra de enquadramento |
| Breadcrumb, projeto e galeria | `src/pages/projects/[slug].astro` | Caminho centrado, mídia e detalhes do projeto |
| Logos de marcas e galeria da home | `src/pages/index.astro` | Logos com `object-contain`; imagens de galeria com recorte |
| Carrossel de depoimentos (aguardando conteúdo real; não publicado na home) | `src/components/Testimonials.astro` | Autoavanço, pausa por seleção e movimento reduzido |
| Formulário e gaveta de contato | `src/components/DrawerForm.astro` | Campos, status, validação e foco no painel |
| Consentimento analítico | `src/components/Analytics.astro` | Escolha explícita e ajuste posterior |
| Rodapé e redes sociais | `src/components/Footer.astro` | CTA, logo, navegação, contato e SVGs sociais |
| Páginas de serviço e privacidade | `src/components/EditorialPage.astro`, `BrandingPage.astro`, `PrivacyPage.astro` | Leitura longa e blocos de conteúdo |
| Revelação e movimento reduzido | `src/layouts/Layout.astro`, `src/styles/global.css` | Entrada por rolagem e preferência do sistema |

## Motion design

- Entrada das seções: opacidade de 0 a 1 e deslocamento vertical de 24px a 0 em 650ms, com `--ease-reveal` e atrasos curtos quando necessário. A página do design system reproduz esse comportamento.
- Cards de portfólio e serviço: subida de 4px em 300ms; a imagem da galeria amplia até 1,05 em 500ms. Botões e links mudam cor em cerca de 200–300ms.
- Menus e gaveta de contato: translação lateral e overlay em 300ms; abertura e fechamento continuam acessíveis por teclado.
- Depoimentos (quando publicados): avanço automático a cada 6s quando visíveis, pausa ao clicar em um cartão e ampliação discreta da seleção.
- Com `prefers-reduced-motion: reduce`, conteúdo aparece sem reveal e depoimentos não avançam automaticamente. Nunca dependa do movimento para comunicar uma informação.

## Acessibilidade

- O foco global usa contorno de 2px em `brand-strong` com offset de 3px.
- Alvos de toque chegam a pelo menos 44×44px em dispositivos de ponteiro grosseiro.
- `brand`, sobre branco, só é adequado a texto grande (3,03:1). Texto normal usa `brand-strong` (5,21:1).
- Imagens informativas precisam de `alt`; imagens decorativas usam `alt=""` ou `aria-hidden="true"`.
- Movimento reduzido desativa transições e reveals globais.

## Governança

Antes de adicionar uma cor, fonte, raio ou sombra:

1. confirme que nenhum token existente expressa a mesma função;
2. nomeie pela função, não pela aparência (`brand-strong`, não `teal-dark`);
3. adicione o token em `global.css` e documente-o aqui;
4. valide `npm run check` e contraste quando houver texto;
5. confira PT, EN e ES em viewport móvel e desktop.

Valores específicos de uma composição podem continuar arbitrários quando não representam uma decisão reutilizável, como `tracking-[0.18em]` de eyebrow ou dimensões de uma ilustração.
