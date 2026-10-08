export const locales = ['pt', 'en', 'es'] as const;
export type Locale = (typeof locales)[number];

export const languageNames: Record<Locale, string> = {
  pt: 'PT',
  en: 'EN',
  es: 'ES',
};

export const ui = {
  pt: {
    htmlLang: 'pt-BR',
    ogLocale: 'pt_BR',
    home: 'Home', projects: 'Projetos', services: 'Serviços', contact: 'Contato',
    openMenu: 'Abrir menu', closeMenu: 'Fechar menu', tagline: 'Design criativo que transforma marcas.',
    heroTitle: 'Design gráfico para marcas,', heroTitle2: 'editoras e projetos culturais.',
    heroText: 'Criamos identidades visuais, livros, sites, embalagens e conteúdo digital com olhar estratégico.', talk: 'Conte seu projeto',
    recentProjects: 'PROJETOS RECENTES', knowProject: 'Conhecer projeto', allProjects: 'Ver todos os projetos',
    journeyTitle: 'Sua jornada será assim',
    journey: [
      ['Estratégia de marca', 'Iniciamos com uma conversa profunda para entender suas ideias, desafios e objetivos. Através de reuniões estratégicas e análise detalhada, estruturamos um plano sólido que guia presente e futuro do seu projeto, garantindo consistência e impacto no mercado.'],
      ['Prototipação', 'Transformamos a estratégia em identidade visual tangível. Nossa equipe criativa alia conceito artístico com propósito comercial, criando designs originais que comunicam sua marca de forma clara, diferenciada e memorável.'],
      ['Apresentação', 'Apresentamos o projeto final com clareza e profissionalismo, seja presencialmente ou online. Explicamos as decisões de design, garantindo que cada elemento reflita sua visão e esteja alinhado com seus objetivos comerciais.'],
      ['Entrega', 'Com o projeto aprovado, organizamos todos os arquivos em um diretório seguro e bem estruturado. Você recebe documentação completa e suporte, garantindo acesso fácil e protegido à identidade da sua marca para sempre.'],
    ],
    brandsTitle: 'Marcas e projetos que confiam no Estúdio Agartha',
    servicesTitle: 'Design editorial e muito mais',
    serviceItems: [
      ['Identidade Visual', 'Conjunto de elementos gráficos que representa uma marca, incluindo logotipo, cores e tipografia, criando uma imagem coesa que transmite os valores e a personalidade da empresa.'],
      ['Desenvolvimento e criação de website', 'Criamos websites personalizados, unindo design moderno, navegação intuitiva e otimização para uma experiência eficiente e profissional.'],
      ['Embalagem & Rótulo', 'Desenvolvemos embalagens que oferecem uma experiência agradável e inesquecível aos clientes, comunicando a mensagem da marca de maneira clara e eficaz.'],
      ['Editorial', 'Design de publicações impressas e digitais que combina tipografia, imagens e layout, garantindo conteúdo legível, atraente e visualmente harmonioso.'],
      ['Criativos para Social Media', 'Criação de conteúdos visuais para plataformas digitais, como postagens, visando aumentar o engajamento e promover a marca de forma eficaz em cada rede.'],
    ],
    gallery: 'Galeria', galleryTitle: 'Criamos obras visuais e estratégicas para negócios memoráveis.',
    projectListTitle: 'Projetos de Design e Branding', projectDetails: 'Ver detalhes do projeto', moreProjects: 'Ver mais projetos',
    projectGallery: 'Galeria do projeto', image: 'Imagem', breadcrumb: 'Navegação estrutural',
    footerTitle: 'Transforme sua ideia em algo incrível.', footerTagline: 'Assim como o javali, nosso design é original e impossível de ignorar.', pages: 'Páginas', portfolio: 'Portfólio', rights: 'TODOS OS DIREITOS RESERVADOS',
    formTitle: 'Fale conosco', formIntro: 'Este formulário é uma etapa inicial crucial para entendermos claramente o seu projeto.',
    name: 'Nome', phone: 'Telefone', company: 'Nome da sua empresa', companyPlaceholder: 'Sua empresa', instagram: 'Qual é o Instagram da sua empresa?',
    referral: 'Como nos conheceu?', ad: 'Anúncio', recommendation: 'Recomendação', desiredServices: 'Quais serviços deseja contratar?',
    visualIdentity: 'Identidade visual', packaging: 'Embalagem', business: 'Descreva brevemente seu negócio', send: 'Enviar',
    seoDescription: 'Design criativo que transforma marcas. Especialistas em identidade visual, branding, websites, embalagens e conteúdos para redes sociais.',
  },
  en: {
    htmlLang: 'en', ogLocale: 'en_US',
    home: 'Home', projects: 'Projects', services: 'Services', contact: 'Contact', openMenu: 'Open menu', closeMenu: 'Close menu', tagline: 'Creative design that transforms brands.',
    heroTitle: 'Graphic design for brands,', heroTitle2: 'publishers and cultural projects.', heroText: 'We create visual identities, books, websites, packaging and digital content with a strategic approach.', talk: 'Tell us about your project',
    recentProjects: 'RECENT PROJECTS', knowProject: 'View project', allProjects: 'View all projects', journeyTitle: 'Your journey will look like this',
    journey: [
      ['Brand strategy', 'We begin with an in-depth conversation to understand your ideas, challenges, and goals. Through strategic meetings and detailed analysis, we build a solid plan that guides your project now and in the future.'],
      ['Prototyping', 'We turn strategy into a tangible visual identity. Our creative team combines artistic concepts with commercial purpose to create original, clear, and memorable designs.'],
      ['Presentation', 'We present the final project clearly and professionally, in person or online. We explain each design decision and ensure every element reflects your vision and business goals.'],
      ['Delivery', 'Once approved, we organize every file in a secure, well-structured directory. You receive complete documentation and support for safe, lasting access to your brand identity.'],
    ],
    brandsTitle: 'Brands and projects that trust Estúdio Agartha', servicesTitle: 'Editorial design and much more',
    serviceItems: [
      ['Visual Identity', 'A cohesive system of logos, colors, and typography that communicates a company’s values and personality.'],
      ['Website design and development', 'We create custom websites with modern design, intuitive navigation, and optimized, professional experiences.'],
      ['Packaging & Labels', 'We develop memorable packaging that communicates the brand message clearly and effectively.'],
      ['Editorial', 'Print and digital publication design that combines typography, images, and layout for clear and visually balanced reading.'],
      ['Social Media Creative', 'Visual content for digital platforms, including posts designed to increase engagement and promote the brand effectively.'],
    ],
    gallery: 'Gallery', galleryTitle: 'We create strategic visual work for memorable businesses.', projectListTitle: 'Design and Branding Projects', projectDetails: 'View project details', moreProjects: 'View more projects', projectGallery: 'Project gallery', image: 'Image', breadcrumb: 'Breadcrumb',
    footerTitle: 'Turn your idea into something remarkable.', footerTagline: 'Like the wild boar, our design is original and impossible to ignore.', pages: 'Pages', portfolio: 'Portfolio', rights: 'ALL RIGHTS RESERVED',
    formTitle: 'Talk to us', formIntro: 'This form is an important first step in helping us clearly understand your project.', name: 'Name', phone: 'Phone', company: 'Company name', companyPlaceholder: 'Your company', instagram: "What is your company's Instagram?", referral: 'How did you find us?', ad: 'Advertisement', recommendation: 'Recommendation', desiredServices: 'Which services are you interested in?', visualIdentity: 'Visual identity', packaging: 'Packaging', business: 'Briefly describe your business', send: 'Send',
    seoDescription: 'Creative design that transforms brands. Specialists in visual identity, branding, websites, packaging, and social media content.',
  },
  es: {
    htmlLang: 'es', ogLocale: 'es_ES',
    home: 'Inicio', projects: 'Proyectos', services: 'Servicios', contact: 'Contacto', openMenu: 'Abrir menú', closeMenu: 'Cerrar menú', tagline: 'Diseño creativo que transforma marcas.',
    heroTitle: 'Diseño gráfico para marcas,', heroTitle2: 'editoriales y proyectos culturales.', heroText: 'Diseñamos libros, identidades visuales, sitios web, packaging y contenido digital para editoriales, autores y marcas. Podemos colaborar a distancia con clientes en España.', talk: 'Hablemos de tu proyecto',
    recentProjects: 'PROYECTOS RECIENTES', knowProject: 'Ver proyecto', allProjects: 'Ver todos los proyectos', journeyTitle: 'Así será tu recorrido',
    journey: [
      ['Estrategia de marca', 'Comenzamos con una conversación profunda para comprender tus ideas, desafíos y objetivos. Mediante reuniones estratégicas y un análisis detallado, estructuramos un plan sólido que guía el presente y el futuro de tu proyecto.'],
      ['Creación de prototipos', 'Transformamos la estrategia en una identidad visual tangible. Nuestro equipo creativo combina el concepto artístico con el propósito comercial para crear diseños originales, claros y memorables.'],
      ['Presentación', 'Presentamos el proyecto final con claridad y profesionalidad, de forma presencial u online. Explicamos las decisiones de diseño para que cada elemento refleje tu visión y tus objetivos comerciales.'],
      ['Entrega', 'Una vez aprobado el proyecto, organizamos todos los archivos en un directorio seguro y bien estructurado. Recibes documentación completa y asistencia para acceder siempre a la identidad de tu marca.'],
    ],
    brandsTitle: 'Marcas y proyectos que han confiado en Estúdio Agartha', servicesTitle: 'Diseño editorial y mucho más',
    serviceItems: [
      ['Diseño editorial', 'Diseñamos cubiertas, libros y publicaciones impresas o digitales, cuidando la tipografía, las imágenes y la experiencia de lectura.'],
      ['Identidad visual', 'Creamos sistemas visuales coherentes —logotipo, color, tipografía y aplicaciones— para expresar la personalidad de cada marca.'],
      ['Diseño y desarrollo web', 'Creamos sitios web personalizados que combinan diseño moderno, navegación intuitiva y optimización para ofrecer una experiencia eficiente y profesional.'],
      ['Embalajes y etiquetas', 'Desarrollamos embalajes que ofrecen una experiencia agradable y memorable, comunicando el mensaje de la marca de forma clara y eficaz.'],
      ['Contenido para redes sociales', 'Creamos contenido visual para plataformas digitales, como publicaciones, con el objetivo de aumentar la interacción y promocionar la marca eficazmente.'],
    ],
    gallery: 'Galería', galleryTitle: 'Creamos obras visuales y estratégicas para negocios memorables.', projectListTitle: 'Proyectos de diseño y branding', projectDetails: 'Ver detalles del proyecto', moreProjects: 'Ver más proyectos', projectGallery: 'Galería del proyecto', image: 'Imagen', breadcrumb: 'Ruta de navegación',
    footerTitle: 'Transforma tu idea en algo increíble.', footerTagline: 'Como el jabalí, nuestro diseño es original e imposible de ignorar.', pages: 'Páginas', portfolio: 'Portafolio', rights: 'TODOS LOS DERECHOS RESERVADOS',
    formTitle: 'Hablemos', formIntro: 'Este formulario es un primer paso fundamental para que podamos comprender claramente tu proyecto.', name: 'Nombre', phone: 'Teléfono', company: 'Nombre de tu empresa', companyPlaceholder: 'Tu empresa', instagram: '¿Cuál es el Instagram de tu empresa?', referral: '¿Cómo nos conociste?', ad: 'Anuncio', recommendation: 'Recomendación', desiredServices: '¿Qué servicios deseas contratar?', visualIdentity: 'Identidad visual', packaging: 'Embalaje', business: 'Describe brevemente tu negocio', send: 'Enviar',
    seoDescription: 'Diseño gráfico para editoriales, autores y marcas en España. Libros, identidad visual, sitios web, packaging y contenido digital a distancia.',
  },
} as const;

export function localePath(locale: Locale, path = '/') {
  const clean = path === '/' ? '' : `/${path.replace(/^\/+|\/+$/g, '')}`;
  return locale === 'pt' ? clean || '/' : `/${locale}${clean || '/'}`;
}

export function localizedPath(pathname: string, locale: Locale) {
  const clean = pathname.replace(/^\/(en|es)(?=\/|$)/, '') || '/';
  return localePath(locale, clean);
}

const categoryTranslations = {
  en: { 'Livros': 'Books', 'Capa': 'Cover Design', 'Design Editorial': 'Editorial Design', 'Identidade Visual': 'Visual Identity', 'Estratégia de Marca': 'Brand Strategy' },
  es: { 'Livros': 'Libros', 'Capa': 'Diseño de portada', 'Design Editorial': 'Diseño editorial', 'Identidade Visual': 'Identidad visual', 'Estratégia de Marca': 'Estrategia de marca' },
} as const;

const projectDescriptions = {
  en: {
    'a-doutrina-sufi': 'For A Doutrina Súfi by Titus Burckhardt, published by Editora Stella Maris, I designed the cover and interior layout. Geometric patterns and typography echo the book’s study of Islam’s contemplative tradition.',
    'arte-cavalheiresca-do-arqueiro-zen': 'For Editora Ekayana’s edition of A Arte Cavalheiresca do Arqueiro Zen by Eugen Herrigel, I designed the cover and interior layout. The visual language follows the meeting of archery practice and the inner path described in the book.',
    'a-alma-do-indio': 'Designing the interior and cover of A Alma do Índio was a profoundly cross-cultural experience. To visually represent the spirituality of the North American Plains peoples, I immersed myself in their symbols, forms, and silences.',
    amana: 'This visual identity was, above all, a deep immersion in the Muslim universe.',
    'ecos-do-japao': 'The cover of Ecos do Japão was created to evoke the serenity and elegance of traditional Japanese aesthetics. Its composition translates the spirit of the work into a simple, contemplative invitation to explore Japanese culture.',
    'luan-cavalcanti': 'This brand authentically expresses the professionalism, commitment, and expertise that Dr. Luan Cavalcanti brings to his work in the legal field.',
    'o-romance-da-alma': 'Creating the cover and interior design of O Romance da Alma, by Lilian Staveley, was truly inspiring. Every detail—from the colors and medieval ornaments to the typographic harmony—reflects the beauty and spiritual depth of this work.',
    'raizes-da-condicao-humana': 'Designing Raízes da Condição Humana was an exercise in balancing clarity and transcendence. The book brings together articles on metaphysics, spirituality, and tradition, calling for a design of intellectual depth and visual serenity.',
    'resumo-da-metafisica-integral': 'Creating the graphic design for Resumo da Metafísica Integral was an exercise in visual synthesis and conceptual rigor. Its concise presentation of traditional metaphysics required a simple, clear, and contemplative design.',
    sheldon: 'Working with Sheldon Calçados was a remarkable experience. Every stage combined professionalism, good taste, and energy with a brand deeply committed to quality, style, comfort, and its customers.',
  },
  es: {
    'a-doutrina-sufi': 'Para A Doutrina Súfi, de Titus Burckhardt, publicado por Editora Stella Maris, diseñé la cubierta y maqueté el interior. Los motivos geométricos y la tipografía dialogan con el estudio de la tradición contemplativa del islam que presenta la obra.',
    'arte-cavalheiresca-do-arqueiro-zen': 'Para la edición de A Arte Cavalheiresca do Arqueiro Zen, de Eugen Herrigel, publicada por Editora Ekayana, diseñé la cubierta y maqueté el interior. El lenguaje visual acompaña el encuentro entre la práctica del arco y el camino interior narrado en el libro.',
    'a-alma-do-indio': 'Maquetar el interior y crear la portada de A Alma do Índio fue una experiencia profundamente transcultural. Para representar visualmente la espiritualidad de los pueblos de las llanuras norteamericanas, me sumergí en sus símbolos, formas y silencios.',
    amana: 'Esta identidad visual fue, ante todo, una profunda inmersión en el universo musulmán.',
    'ecos-do-japao': 'La portada de Ecos do Japão fue creada para evocar la serenidad y la elegancia de la estética tradicional japonesa. Su composición traduce el espíritu de la obra en una invitación sencilla y contemplativa a recorrer la cultura de Japón.',
    'luan-cavalcanti': 'Esta marca expresa de forma auténtica la profesionalidad, el compromiso y la experiencia que el Dr. Luan Cavalcanti aporta a su trabajo en el ámbito jurídico.',
    'o-romance-da-alma': 'Crear la portada y maquetar O Romance da Alma, de Lilian Staveley, fue una experiencia verdaderamente inspiradora. Cada detalle —desde los colores y ornamentos medievales hasta la armonía tipográfica— refleja la belleza y la profundidad espiritual de la obra.',
    'raizes-da-condicao-humana': 'Maquetar Raízes da Condição Humana fue un ejercicio de equilibrio entre claridad y trascendencia. La obra reúne artículos sobre metafísica, espiritualidad y tradición, y exigía un diseño de profundidad intelectual y serenidad visual.',
    'resumo-da-metafisica-integral': 'Crear el diseño gráfico de Resumo da Metafísica Integral fue un ejercicio de síntesis visual y rigor conceptual. Su presentación concisa de la metafísica tradicional requería un diseño sencillo, claro y contemplativo.',
    sheldon: 'Trabajar con Sheldon Calçados fue una experiencia magnífica. Cada etapa combinó profesionalidad, buen gusto y energía con una marca que valora profundamente la calidad, el estilo, la comodidad y a sus clientes.',
  },
} as const;

export function localizeProject(locale: Locale, id: string, description: string, categories: string[]) {
  if (locale === 'pt') return { description, categories };
  const categoryMap = categoryTranslations[locale] as Record<string, string>;
  const descriptions = projectDescriptions[locale] as Record<string, string>;
  return {
    description: descriptions[id] ?? description,
    categories: categories.map((category) => categoryMap[category] ?? category),
  };
}
