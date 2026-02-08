import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en' | 'va' | 'ca' | 'fr' | 'de' | 'zh';

interface Translations {
  nav: {
    season: string;
    howWorks: string;
    challenges: string;
    skypixel: string;
    register: string;
    join: string;
  };
  hero: {
    mission: string;
    titleMain: string;
    titleSub: string;
    subtitle: string;
    modalities: string;
    routePersonal: string;
    routePro: string;
    noDrone: string;
    start: string;
    watch: string;
    vertical: string;
    sysStatus: string;
    runCheck: string;
    analyzing: string;
    optimal: string;
  };
  manifesto: {
    label: string;
    title: string;
    subtitle: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
  };
  creativeRoutes: {
    bgText: string;
    title: string;
    subtitle: string;
    card1Label: string;
    card1Title: string;
    card1Desc: string;
    card1Button: string;
    card2Label: string;
    card2Title: string;
    card2Desc: string;
    card2Button: string;
    card3Label: string;
    card3Title: string;
    card3Desc: string;
    card3Button: string;
    card1Equipment: string;
    card2Equipment: string;
  };
  seasonMap: {
    title: string;
    subtitle: string;
    link: string;
    heroStatus: string;
    heroTitle: string;
    heroDesc: string;
    heroButton: string;
    weeks: string[];
    weekDescriptions: string[];
  };
  citySpots: {
    title: string;
    subtitle: string;
    selectCity: string;
    spotType: string;
    viewOnMaps: string;
    clickToExplore: string;
    cityNames: {
      madrid: string;
      barcelona: string;
      valencia: string;
    };
    spots: {
      madrid: { id: string; name: string; desc: string; }[];
      barcelona: { id: string; name: string; desc: string; }[];
      valencia: { id: string; name: string; desc: string; }[];
    }
  };
  process: {
    label: string;
    title: string;
    steps: { id: string; title: string; desc: string }[];
  };
  showcase: {
    inspiration: string;
    title: string;
    button: string;
    card1Title: string;
    card1Desc: string;
    card2Title: string;
    card2Desc: string;
    card3Title: string;
    card3Desc: string;
  };
  registration: {
    label: string;
    title: string;
    subtitle: string;
    nameLabel: string;
    emailLabel: string;
    cityLabel: string;
    profileLabel: string;
    terms: string;
    button: string;
    cities: string[];
    profiles: string[];
  };
  videoTest: {
    title: string;
    desc: string;
    btnStart: string;
    btnTesting: string;
    resultLabel: string;
    recLabel: string;
    recHD: string;
    recSD: string;
    error: string;
    retry: string;
  };
  footer: {
    brandDesc: string;
    supportTitle: string;
    legalTitle: string;
    socialTitle: string;
    copyright: string;
    tagline: string;
    links: {
      faq: string;
      contact: string;
      forum: string;
      privacy: string;
      terms: string;
      cookies: string;
    };
  };
  gearExchange: {
    title: string;
    subtitle: string;
    feature1Title: string;
    feature1Desc: string;
    feature2Title: string;
    feature2Desc: string;
    feature3Title: string;
    feature3Desc: string;
    cta: string;
  };
  routeModal: {
    explorer: {
      title: string;
      subtitle: string;
      desc: string;
      steps: string[];
      equipment: string;
    };
    storyteller: {
      title: string;
      subtitle: string;
      desc: string;
      steps: string[];
      equipment: string;
    };
    keyPoints: string;
    startRoute: string;
    close: string;
  };
  gearModal: {
    verification: {
      title: string;
      subtitle: string;
      desc: string;
      benefits: string[];
    };
    community: {
      title: string;
      subtitle: string;
      desc: string;
      benefits: string[];
    };
    upgrades: {
      title: string;
      subtitle: string;
      desc: string;
      benefits: string[];
    };
    close: string;
  };
}

const translations: Record<Language, Translations> = {
  es: {
    nav: { season: 'Temporada 1', howWorks: 'Manifiesto', challenges: 'Rutas', skypixel: 'SkyPixel', register: 'Registro', join: 'Inicia Tu Viaje' },
    hero: { mission: 'Misión Artística 001', titleMain: 'La Ciudad en', titleSub: 'Dos Miradas', subtitle: 'Tres meses. Dos caminos. Una visión.', modalities: 'Perfiles de Creación', routePersonal: 'Explorador Urbano (Social)', routePro: 'Narrador Visual (Pro)', noDrone: 'Tu visión supera a tu equipo', start: 'Comenzar Ahora', watch: 'Ver Manifiesto', vertical: 'Est. 2025 — Urban Perspective', sysStatus: 'Sistema Operativo', runCheck: 'Verificar Conexión', analyzing: 'Optimizando...', optimal: 'Listo para 4K' },
    manifesto: { label: 'Filosofía', title: 'No solo capturas imágenes', subtitle: 'Capturas perspectivas. Esta iniciativa transforma tu mirada urbana en arte visual.', card1Title: 'Retos Evolutivos', card1Desc: 'Desafíos diseñados para que tu técnica crezca con tu visión.', card2Title: 'Progresión Real', card2Desc: 'Un sistema gamificado donde desbloqueas gear y estatus.', card3Title: 'Impacto Global', card3Desc: 'Tu barrio visto por ojos de todo el mundo en SkyPixel.' },
    creativeRoutes: {
      bgText: 'Crear', title: 'Define tu Camino', subtitle: 'Dos perfiles. Una misma misión.',
      card1Label: 'Perfil 1: Social / Personal (70%)', card1Title: 'Explorador Urbano', card1Desc: 'Para quien busca inmediatez y diversión. Documenta tu viaje con smartphone, pocket y drones ultraligeros (Neo/Mini).', card1Button: 'Descubrir Ruta Social', card1Equipment: 'Smartphone / Pocket / Neo / Mini',
      card2Label: 'Perfil 2: Profesional / Técnico (30%)', card2Title: 'Narrador Visual', card2Desc: 'Para quien busca credibilidad. Calidad cinematográfica con mirrorless, ronin y drones potentes (Mavic/Air).', card2Button: 'Descubrir Ruta Pro', card2Equipment: 'Mirrorless / Ronin / Mavic / Air',
      card3Label: '', card3Title: '', card3Desc: '', card3Button: ''
    },
    seasonMap: {
      title: 'Mapa de Temporada',
      subtitle: '8 semanas para redescubrir tu ciudad.',
      link: 'Ver Roadmap Completo',
      heroStatus: 'Fase Actual: La Llegada',
      heroTitle: 'Semana 1: Primer Impacto',
      heroDesc: 'Reinterpreta lo cotidiano. ¿Cómo se ve tu ciudad cuando nadie mira?',
      heroButton: 'Aceptar Reto',
      weeks: ['Sabores', 'Ritmos', 'Alturas', 'Sombras', 'Voces', 'Futuro', 'El Adiós'],
      weekDescriptions: ['La identidad culinaria.', 'El beat urbano.', 'Perspectiva de dron.', 'Juego de luces.', 'Micro-documental.', 'Sci-fi urbano.', 'Tu obra maestra.']
    },
    citySpots: {
      title: 'Zonas de Despegue', subtitle: 'Spots curados para máxima seguridad y creatividad.', selectCity: 'Tu Ciudad', spotType: 'Categoría', viewOnMaps: 'Navegar al Spot', clickToExplore: 'Haz clic para explorar',
      cityNames: { madrid: 'Madrid', barcelona: 'Barcelona', valencia: 'Valencia' },
      spots: {
        madrid: [
          { id: 'm1', name: 'Templo de Debod', desc: 'Mejor para siluetas al atardecer y reflejos en el agua.' },
          { id: 'm2', name: 'Gran Vía & Callao', desc: 'Luces de neón cinematográficas y flujo de tráfico intenso.' },
          { id: 'm3', name: 'Madrid Río', desc: 'Puentes modernos y espacios abiertos para tomas con dron.' }
        ],
        barcelona: [
          { id: 'b1', name: 'Bunkers del Carmel', desc: 'Vistas panorámicas de la ciudad, perfecto para el amanecer.' },
          { id: 'b2', name: 'Plaza MACBA', desc: 'Cultura skate, movimiento y arquitectura marcada.' },
          { id: 'b3', name: 'Barrio Gótico', desc: 'Juego de luces y sombras en calles estrechas.' }
        ],
        valencia: [
          { id: 'v1', name: 'Ciudad de las Artes', desc: 'Arquitectura futurista, líneas limpias y agua.' },
          { id: 'v2', name: 'El Carmen', desc: 'Arte urbano y texturas vibrantes.' },
          { id: 'v3', name: 'Albufera', desc: 'Naturaleza, hora dorada y aguas tranquilas.' }
        ]
      }
    },
    process: { label: 'Evolución', title: 'Tu Ascenso Creativo', steps: [{ id: '01', title: 'Reclama tu ID', desc: 'Tu perfil es tu pasaporte al ecosistema.' }, { id: '02', title: 'Desbloquea Misiones', desc: 'Briefs semanales directos a tu app.' }, { id: '03', title: 'Publica y Valida', desc: 'Sube a SkyPixel. Recibe feedback real.' }, { id: '04', title: 'Gear Exchange', desc: 'Accede a upgrades y eventos exclusivos.' }] },
    gearExchange: {
      title: 'DJI GEAR EXCHANGE',
      subtitle: 'Evoluciona tu equipo. Sin riesgos. Sin barreras.',
      feature1Title: 'Verificación Oficial',
      feature1Desc: 'Staff certificado valida el estado de cada equipo (Grado A/B/C) en eventos presenciales.',
      feature2Title: 'Comunidad Segura',
      feature2Desc: 'Trato directo entre creadores verificados. Adiós a las estafas y envíos dudosos.',
      feature3Title: 'Upgrades Orgánicos',
      feature3Desc: 'Gamificamos tu ascenso. Usa tus créditos de creador para acceder a mejores herramientas.',
      cta: 'Explorar Gear Exchange'
    },
    gearModal: {
      verification: {
        title: "Verificación Oficial",
        subtitle: "Calidad Certificada",
        desc: "Nuestros expertos certificados inspeccionan cada artículo. Aseguramos integridad funcional, batería y estética.",
        benefits: ["Inspección de 70 puntos", "Garantía de 12 meses", "Certificado Oficial"]
      },
      community: {
        title: "Comunidad Segura",
        subtitle: "Confianza y Conexión",
        desc: "Conecta con creadores verificados. Sin bots, sin estafas. Solo narradores mejorando su equipo.",
        benefits: ["Perfiles Verificados", "Chat Directo", "Pago Seguro"]
      },
      upgrades: {
        title: "Sube de Nivel",
        subtitle: "Asciende y Mejora",
        desc: "Usa tus Créditos de Creador para descuentos. Cuanto más creas, mejores herramientas desbloqueas.",
        benefits: ["Gana Créditos", "Acceso Exclusivo", "Bonus de Intercambio"]
      },
      close: "Cerrar"
    },
    routeModal: {
      explorer: {
        title: "EXPLORADOR URBANO",
        subtitle: "Tu ciudad con alma. Inmediatez y diversión.",
        desc: "Perfil Ideal (70%): Para creadores que valoran la experiencia sobre la técnica. Priorizas la agilidad. Usas herramientas ligeras como Smartphone, Osmo Pocket o drones compactos (Neo, Mini 4 Pro) para capturar momentos únicos sin complicaciones.",
        steps: ["Inmediatez: Grabar y publicar rápido", "Diversión: Retos y gamificación", "Comunidad: Siente parte del movimiento"],
        equipment: "Smartphone / Pocket 3 / Neo / Mini 4 Pro"
      },
      storyteller: {
        title: "NARRADOR VISUAL",
        subtitle: "La ciudad como relato oficial. Calidad y Credibilidad.",
        desc: "Perfil Ideal (30%): Para profesionales que construyen portafolio. Necesitas calidad portátil. Tu set incluye Cámaras Mirrorless, Ronin y Drones de alto rendimiento (Mavic 3, Air 3S, Avata) para una estética cinematográfica sin perder movilidad.",
        steps: ["Calidad Superior: Producción High-End", "Credibilidad: Portafolio profesional", "Técnica: Mirrorless & Drones Pro"],
        equipment: "Mirrorless / Ronin / Mavic 3 / Air 3S"
      },
      keyPoints: "Puntos Clave",
      startRoute: "Iniciar Ruta",
      close: "Cerrar"
    },
    showcase: { inspiration: 'Showcase', title: 'Salón de la Fama', button: 'Ver Galería Completa', card1Title: 'Selección del Jurado', card1Desc: 'Lo mejor de la semana, curado por expertos.', card2Title: 'Ranking de Creadores', card2Desc: '¿Quién domina la narrativa visual en tu ciudad?', card3Title: 'Exhibición Física', card3Desc: 'Tu obra, impresa y proyectada en la Gala Final.' },
    registration: { label: 'Acceso', title: 'Inicia tu Legado', subtitle: 'El equipo es temporal. La visión es eterna.', nameLabel: 'Nombre de Creador', emailLabel: 'Correo Electrónico', cityLabel: 'Ciudad Base', profileLabel: 'Nivel Inicial', terms: 'Acepto desafiar mis límites.', button: 'Generar ID de Creador', cities: ['Madrid', 'Barcelona', 'Valencia', 'Otra'], profiles: ['Starter', 'Narrador Visual', 'Cineasta'] },
    videoTest: { title: 'Diagnóstico de Red', desc: 'Asegura que tu conexión soporte streaming 4K.', btnStart: 'Testear Red', btnTesting: 'Midiendo...', resultLabel: 'Ping', recLabel: 'Capacidad', recHD: 'Ready for 4K', recSD: 'Standard Quality', error: 'Sin Conexión', retry: 'Reintentar' },
    footer: {
      brandDesc: 'El mundo se ve diferente desde aquí.', supportTitle: 'Ayuda', legalTitle: 'Términos', socialTitle: 'Redes', copyright: '© 2025 Creator Journey.', tagline: 'Perspectiva sin límites',
      links: { faq: 'FAQ', contact: 'Contacto', forum: 'Foro', privacy: 'Privacidad', terms: 'Términos', cookies: 'Cookies' }
    }
  },
  en: {
    nav: { season: 'Season 1', howWorks: 'How it Works', challenges: 'Challenges', skypixel: 'SkyPixel', register: 'Register', join: 'Join' },
    hero: { mission: 'Artistic Mission 01', titleMain: 'The City in', titleSub: 'Two Perspectives', subtitle: 'A 3-month creative journey.', modalities: 'Modalities', routePersonal: 'Personal Route (15–30s)', routePro: 'Professional Route (2–5 min)', noDrone: 'No drone required', start: 'Start Now', watch: 'Watch How-To', vertical: 'Est. 2024 — Urban Perspective', sysStatus: 'System Status', runCheck: 'Run Diagnostics', analyzing: 'Analyzing Network...', optimal: 'Optimal Quality' },
    manifesto: { label: 'Manifesto', title: 'What is it', subtitle: 'An initiative to transform your creative vision.', card1Title: 'Monthly Challenges', card1Desc: 'Creative challenges designed to push your limits.', card2Title: 'Adaptive Levels', card2Desc: 'From beginners to film professionals.', card3Title: 'Global Community', card3Desc: 'Connect with other creators and share your unique vision.' },
    creativeRoutes: {
      bgText: 'Choose', title: 'Choose Your Creative Route', subtitle: 'Your entry depends on intention, not gear.',
      card1Label: '01 / Starter', card1Title: 'Urban Explorer', card1Desc: 'For those capturing spontaneous moments.', card1Button: 'View My Route', card1Equipment: 'Smartphone / Pocket / Neo / Mini',
      card2Label: '02 / Popular', card2Title: 'Visual Storyteller', card2Desc: 'For experienced creators.', card2Button: 'View My Route', card2Equipment: 'Mirrorless / Ronin / Mavic / Air',
      card3Label: '03 / Pro', card3Title: 'Filmmaker', card3Desc: 'High-level productions.', card3Button: 'View My Route'
    },
    seasonMap: {
      title: 'Season Map',
      subtitle: '8 weeks, 8 different perspectives.',
      link: 'View Full Calendar',
      heroStatus: 'Status: Ongoing',
      heroTitle: 'Week 1: The Arrival',
      heroDesc: 'Capture the city\'s first impression at dawn.',
      heroButton: 'Participate',
      weeks: ['Flavors', 'Rhythms', 'Heights', 'Shadows', 'Voices', 'Future', 'Farewell'],
      weekDescriptions: ['Taste the culinary soul.', 'The beat of the streets.', 'Find new perspectives.', 'Light and contrast.', 'Stories of the people.', 'The city of tomorrow.', 'The final chapter.']
    },
    citySpots: {
      title: 'Creation Spots', subtitle: 'Recommended locations for your shoots.', selectCity: 'Select City', spotType: 'Spot Type', viewOnMaps: 'View on Google Maps', clickToExplore: 'Click on markers to explore',
      cityNames: { madrid: 'Madrid', barcelona: 'Barcelona', valencia: 'Valencia' },
      spots: {
        madrid: [
          { id: 'm1', name: 'Templo de Debod', desc: 'Best for sunset silhouettes and water reflections.' },
          { id: 'm2', name: 'Gran Vía & Callao', desc: 'Cinematic neon lights and heavy traffic flow.' },
          { id: 'm3', name: 'Madrid Rio', desc: 'Modern bridges and open spaces for drone shots.' }
        ],
        barcelona: [
          { id: 'b1', name: 'Bunkers del Carmel', desc: 'Panoramic city views, perfect for sunrise.' },
          { id: 'b2', name: 'MACBA Plaza', desc: 'Skate culture, movement, and stark architecture.' },
          { id: 'b3', name: 'Gothic Quarter', desc: 'Light and shadow play in narrow streets.' }
        ],
        valencia: [
          { id: 'v1', name: 'City of Arts', desc: 'Futuristic architecture, clean lines and water.' },
          { id: 'v2', name: 'El Carmen', desc: 'Street art and vibrant textures.' },
          { id: 'v3', name: 'Albufera', desc: 'Nature, golden hour, and calm waters.' }
        ]
      }
    },
    process: { label: 'The Process', title: 'Your Journey Starts Here', steps: [{ id: '01', title: 'Register', desc: 'Create profile and choose level.' }, { id: '02', title: 'Get the Challenge', desc: 'Receive the theme every Monday.' }, { id: '03', title: 'Upload Creation', desc: 'Share your work on SkyPixel.' }, { id: '04', title: 'Win & Connect', desc: 'Weekly prizes and exhibitions.' }] },
    showcase: { inspiration: 'Inspiration', title: 'SkyPixel Showcase', button: 'View Showcase', card1Title: 'Expert Curation', card1Desc: 'Weekly selections by renowned photographers.', card2Title: 'Global Rankings', card2Desc: 'Compete with the best visual creators worldwide.', card3Title: 'Final Exhibition', card3Desc: 'Top works will be displayed at an exclusive gala.' },
    registration: { label: 'Union', title: 'Join the Journey', subtitle: 'Limited spots for unlimited minds.', nameLabel: 'Full Name', emailLabel: 'Email', cityLabel: 'City', profileLabel: 'Profile', terms: 'I accept terms and conditions.', button: 'Join Now', cities: ['Madrid', 'Barcelona', 'Valencia', 'Other'], profiles: ['Starter', 'Visual Storyteller', 'Filmmaker'] },
    videoTest: { title: 'System Diagnostic', desc: 'Check your connection speed to ensure the best playback experience.', btnStart: 'Start Test', btnTesting: 'Analyzing...', resultLabel: 'Latency', recLabel: 'Recommended Quality', recHD: 'High Definition (1080p/4K)', recSD: 'Standard Definition (360p)', error: 'Connection Error', retry: 'Retry' },
    gearExchange: {
      title: 'DJI GEAR EXCHANGE',
      subtitle: 'Upgrade your gear. Confidently.',
      feature1Title: 'Official Verification',
      feature1Desc: 'Certified staff validates gear condition (Grade A/B/C) at events.',
      feature2Title: 'Secure Community',
      feature2Desc: 'Direct deals between verified creators.',
      feature3Title: 'Organic Upgrades',
      feature3Desc: 'Gamified progression to unlock better tools.',
      cta: 'Explore Gear Exchange'
    },
    gearModal: {
      verification: {
        title: "Official Verification",
        subtitle: "Certified Quality",
        desc: "Our DJI certified experts inspect every single item. We ensure functional integrity, battery life, and aesthetic condition.",
        benefits: ["70-point inspection", "12-month warranty", "Official certificate"]
      },
      community: {
        title: "Verified Community",
        subtitle: "Trust & Connection",
        desc: "Connect directly with other verified creators. No bots, no scams. Just passionate storytellers upgrading their gear.",
        benefits: ["Verified Profiles", "Direct Chat", "Secure Escrow"]
      },
      upgrades: {
        title: "Level Up",
        subtitle: "Earn & Upgrade",
        desc: "Use your Creator Credits earned from challenges to get discounts on new or pre-owned gear.",
        benefits: ["Earn Credits", "Exclusive Access", "Trade-in Bonus"]
      },
      close: "Close"
    },
    routeModal: {
      explorer: {
        title: "URBAN EXPLORER",
        subtitle: "Your city with soul. Immediacy and fun.",
        desc: "Ideal Profile (70%): For creators who value experience over technique. You prioritize agility. You use lightweight tools like Smartphone, Osmo Pocket, or compact drones (Neo, Mini 4 Pro) to capture unique moments without complications.",
        steps: ["Immediacy: Shoot and publish fast", "Fun: Challenges and gamification", "Community: Feel part of the movement"],
        equipment: "Smartphone / Pocket 3 / Neo / Mini 4 Pro"
      },
      storyteller: {
        title: "VISUAL STORYTELLER",
        subtitle: "The city as an official narrative. Quality and Credibility.",
        desc: "Ideal Profile (30%): For professionals building a portfolio. You need portable quality. Your set includes Mirrorless Cameras, Ronin, and High-performance Drones (Mavic 3, Air 3S, Avata) for a cinematic aesthetic without losing mobility.",
        steps: ["Superior Quality: High-End Production", "Credibility: Professional portfolio", "Technique: Mirrorless & Pro Drones"],
        equipment: "Mirrorless / Ronin / Mavic 3 / Air 3S"
      },
      keyPoints: "Key Points",
      startRoute: "Start Route",
      close: "Close"
    },
    footer: {
      brandDesc: 'Driving creativity from sky and earth.', supportTitle: 'Support', legalTitle: 'Legal', socialTitle: 'Social', copyright: '© 2024 Creator Journey.', tagline: 'Designed for visionaries',
      links: { faq: 'FAQ', contact: 'Contact', forum: 'Forum', privacy: 'Privacy', terms: 'Terms', cookies: 'Cookies' }
    }
  },
  va: {
    nav: { season: 'Temporada 1', howWorks: 'Com funciona', challenges: 'Reptes', skypixel: 'SkyPixel', register: 'Registre', join: 'Uneix-te' },
    hero: { mission: 'Missió Artística 01', titleMain: 'La Ciutat en', titleSub: 'Dues Mirades', subtitle: 'Un viatge creatiu de 3 mesos.', modalities: 'Modalitats', routePersonal: 'Ruta Personal (15–30s)', routePro: 'Ruta Professional (2–5 min)', noDrone: 'Sense dron també funciona', start: 'Començar', watch: 'Veure Com Funciona', vertical: 'Establert 2024 — Perspectiva Urbana', sysStatus: 'Estat del Sistema', runCheck: 'Executar Diagnòstic', analyzing: 'Analitzant Xarxa...', optimal: 'Qualitat Òptima' },
    manifesto: { label: 'Manifest', title: 'Què és', subtitle: 'Una iniciativa per transformar la teua visió creativa.', card1Title: 'Reptes Mensuals', card1Desc: 'Desafiaments creatius dissenyats per superar els teus límits.', card2Title: 'Nivells Adaptables', card2Desc: 'Des de principiants fins a professionals del cinema.', card3Title: 'Comunitat Global', card3Desc: 'Connecta amb altres creadors i comparteix la teua visió única.' },
    creativeRoutes: {
      bgText: 'Tria', title: 'Tria la teua Ruta Creativa', subtitle: 'La teua entrada depèn de la intenció, no de l\'equip.',
      card1Label: '01 / Starter', card1Title: 'Explorador Urbà', card1Desc: 'Per als qui capturen moments espontanis.', card1Button: 'Veure la meua Ruta', card1Equipment: 'Smartphone / Pocket / Neo / Mini',
      card2Label: '02 / Popular', card2Title: 'Narrador Visual', card2Desc: 'Per a creadors amb experiència.', card2Button: 'Veure la meua Ruta', card2Equipment: 'Mirrorless / Ronin / Mavic / Air',
      card3Label: '03 / Pro', card3Title: 'Cineasta', card3Desc: 'Produccions d\'alt nivell.', card3Button: 'Veure la meua Ruta'
    },
    seasonMap: {
      title: 'Mapa de la Temporada',
      subtitle: '8 setmanes, 8 perspectives diferents.',
      link: 'Veure Calendari Complet',
      heroStatus: 'Estat: En Curs',
      heroTitle: 'Setmana 1: L\'Arribada',
      heroDesc: 'Captura la primera impressió de la ciutat a l\'alba.',
      heroButton: 'Participar',
      weeks: ['Sabors', 'Ritmes', 'Altures', 'Ombres', 'Veus', 'Futur', 'El Comiat'],
      weekDescriptions: ['Assaboreix l\'ànima.', 'El pols dels carrers.', 'Noves perspectives.', 'Llum i contrast.', 'Històries de la gent.', 'La ciutat del demà.', 'El capítol final.']
    },
    citySpots: {
      title: 'Punts de Creació', subtitle: 'Localitzacions recomanades per als teus rodatges.', selectCity: 'Selecciona Ciutat', spotType: 'Tipus de Spot', viewOnMaps: 'Veure en Google Maps', clickToExplore: 'Fes clic per explorar',
      cityNames: { madrid: 'Madrid', barcelona: 'Barcelona', valencia: 'València' },
      spots: {
        madrid: [
          { id: 'm1', name: 'Temple de Debod', desc: 'Millor per a siluetes al capvespre i reflexos a l\'aigua.' },
          { id: 'm2', name: 'Gran Via i Callao', desc: 'Llums de neó cinematogràfics i flux de trànsit intens.' },
          { id: 'm3', name: 'Madrid Río', desc: 'Ponts moderns i espais oberts per a preses amb dron.' }
        ],
        barcelona: [
          { id: 'b1', name: 'Bunkers del Carmel', desc: 'Vistes panoràmiques de la ciutat, perfecte per a l\'alba.' },
          { id: 'b2', name: 'Plaça MACBA', desc: 'Cultura skate, moviment i arquitectura marcada.' },
          { id: 'b3', name: 'Barri Gòtic', desc: 'Joc de llums i ombres en carrers estrets.' }
        ],
        valencia: [
          { id: 'v1', name: 'Ciutat de les Arts', desc: 'Arquitectura futurista, línies netes i aigua.' },
          { id: 'v2', name: 'El Carme', desc: 'Art urbà i textures vibrants.' },
          { id: 'v3', name: 'Albufera', desc: 'Natura, hora daurada i aigües tranquil·les.' }
        ]
      }
    },
    process: { label: 'El Procés', title: 'El teu Viatge Comença Així', steps: [{ id: '01', title: 'Registra\'t', desc: 'Crea el teu perfil i tria nivell.' }, { id: '02', title: 'Rep el Repte', desc: 'Cada dilluns rebràs el tema.' }, { id: '03', title: 'Puja la teua Creació', desc: 'Comparteix el teu treball a SkyPixel.' }, { id: '04', title: 'Guanya i Connecta', desc: 'Premis setmanals i exhibicions.' }] },
    showcase: { inspiration: 'Inspiració', title: 'SkyPixel Showcase', button: 'Veure el Showcase', card1Title: 'Comissariat Expert', card1Desc: 'Seleccions setmanals per fotògrafs de renom.', card2Title: 'Rànquings Globals', card2Desc: 'Competeix amb els millors creadors visuals.', card3Title: 'Exhibició Final', card3Desc: 'Els millors treballs seran exposats en una gala.' },
    registration: { label: 'Unió', title: 'Uneix-te al Viatge', subtitle: 'Places limitades per a ments il·limitades.', nameLabel: 'Nom Complet', emailLabel: 'Email', cityLabel: 'Ciutat', profileLabel: 'Perfil', terms: 'Accepte els termes i condicions.', button: 'Unir-me Ara', cities: ['Madrid', 'Barcelona', 'València', 'Altra'], profiles: ['Starter', 'Narrador Visual', 'Cineasta'] },
    videoTest: { title: 'Diagnòstic de Sistema', desc: 'Verifica la teua velocitat de connexió per assegurar la millor experiència.', btnStart: 'Iniciar Test', btnTesting: 'Analitzant...', resultLabel: 'Latència', recLabel: 'Qualitat Recomanada', recHD: 'Alta Definició (1080p/4K)', recSD: 'Definició Estàndard (360p)', error: 'Error de connexió', retry: 'Reintentar' },
    gearExchange: {
      title: 'DJI GEAR EXCHANGE',
      subtitle: 'Evoluciona el teu equip. Sense riscos.',
      feature1Title: 'Verificació Oficial',
      feature1Desc: 'Staff certificat valida l\'estat de cada equip.',
      feature2Title: 'Comunitat Segura',
      feature2Desc: 'Tracte directe entre creadors verificats.',
      feature3Title: 'Upgrades Orgànics',
      feature3Desc: 'Gamifiquem el teu ascens.',
      cta: 'Explorar Gear Exchange'
    },
    gearModal: {
      verification: {
        title: "Verificació Oficial",
        subtitle: "Qualitat Certificada",
        desc: "Els nostres experts certifiquen cada article. Assegurem integritat funcional, bateria i estètica.",
        benefits: ["Inspecció de 70 punts", "Garantia de 12 mesos", "Certificat Oficial"]
      },
      community: {
        title: "Comunitat Segura",
        subtitle: "Confiança i Connexió",
        desc: "Connecta amb creadors verificats. Sense bots ni estafes. Només narradors millorant el seu equip.",
        benefits: ["Perfils Verificats", "Xat Directe", "Pagament Segur"]
      },
      upgrades: {
        title: "Puja de Nivell",
        subtitle: "Guanya i Millora",
        desc: "Usa els teus Crèdits de Creador per a descomptes. Com més crees, millors eines desbloqueges.",
        benefits: ["Guanya Crèdits", "Accés Exclusiu", "Bonus d'Intercanvi"]
      },
      close: "Tancar"
    },
    routeModal: {
      explorer: {
        title: "EXPLORADOR URBÀ",
        subtitle: "La teua ciutat amb ànima. Immediatesa i diversió.",
        desc: "Perfil Ideal (70%): Per a creadors que valoren l'experiència sobre la tècnica. Prioritzes l'agilitat. Uses eines lleugeres com Smartphone, Osmo Pocket o drons compactes (Neo, Mini 4 Pro) per capturar moments únics sense complicacions.",
        steps: ["Immediatesa: Gravar i publicar ràpid", "Diversió: Reptes i gamificació", "Comunitat: Sent part del moviment"],
        equipment: "Smartphone / Pocket 3 / Neo / Mini 4 Pro"
      },
      storyteller: {
        title: "NARRADOR VISUAL",
        subtitle: "La ciutat com a relat oficial. Qualitat i Credibilitat.",
        desc: "Perfil Ideal (30%): Per a professionals que construeixen portafoli. Necessites qualitat portàtil. El teu set inclou Càmeres Mirrorless, Ronin i Drons d'alt rendiment (Mavic 3, Air 3S, Avata) per a una estètica cinematogràfica sense perdre mobilitat.",
        steps: ["Qualitat Superior: Producció High-End", "Credibilitat: Portafoli professional", "Tècnica: Mirrorless i Drons Pro"],
        equipment: "Mirrorless / Ronin / Mavic 3 / Air 3S"
      },
      keyPoints: "Punts Clau",
      startRoute: "Iniciar Ruta",
      close: "Tancar"
    },
    footer: {
      brandDesc: 'Impulsant la creativitat des del cel i la terra.', supportTitle: 'Suport', legalTitle: 'Legal', socialTitle: 'Social', copyright: '© 2024 Creator Journey.', tagline: 'Dissenyat per a visionaris',
      links: { faq: 'FAQ', contact: 'Contacte', forum: 'Fòrum', privacy: 'Privacitat', terms: 'Termes', cookies: 'Cookies' }
    }
  },
  ca: {
    nav: { season: 'Temporada 1', howWorks: 'Com funciona', challenges: 'Reptes', skypixel: 'SkyPixel', register: 'Registre', join: 'Uneix-te' },
    hero: { mission: 'Missió Artística 01', titleMain: 'La Ciutat en', titleSub: 'Dues Mirades', subtitle: 'Un viatge creatiu de 3 mesos.', modalities: 'Modalitats', routePersonal: 'Ruta Personal (15–30s)', routePro: 'Ruta Professional (2–5 min)', noDrone: 'Sense dron també funciona', start: 'Començar', watch: 'Veure Com Funciona', vertical: 'Establert 2024 — Perspectiva Urbana', sysStatus: 'Estat del Sistema', runCheck: 'Executar Diagnòstic', analyzing: 'Analitzant Xarxa...', optimal: 'Qualitat Òptima' },
    manifesto: { label: 'Manifest', title: 'Què és', subtitle: 'Una iniciativa per transformar la teva visió creativa.', card1Title: 'Reptes Mensuals', card1Desc: 'Desafiaments creatius dissenyats per superar els teus límits.', card2Title: 'Nivells Adaptables', card2Desc: 'Des de principiants fins a professionals del cinema.', card3Title: 'Comunitat Global', card3Desc: 'Connecta amb altres creadors i comparteix la teva visió única.' },
    creativeRoutes: {
      bgText: 'Tria', title: 'Tria la teva Ruta Creativa', subtitle: 'La teva entrada depèn de la intenció, no de l\'equip.',
      card1Label: '01 / Starter', card1Title: 'Explorador Urbà', card1Desc: 'Per als qui capturen moments espontanis.', card1Button: 'Veure la meva Ruta', card1Equipment: 'Smartphone / Pocket / Neo / Mini',
      card2Label: '02 / Popular', card2Title: 'Narrador Visual', card2Desc: 'Per a creadors amb experiència.', card2Button: 'Veure la meva Ruta', card2Equipment: 'Mirrorless / Ronin / Mavic / Air',
      card3Label: '03 / Pro', card3Title: 'Cineasta', card3Desc: 'Produccions d\'alt nivell.', card3Button: 'Veure la meva Ruta'
    },
    seasonMap: {
      title: 'Mapa de la Temporada',
      subtitle: '8 setmanes, 8 perspectives diferents.',
      link: 'Veure Calendari Complet',
      heroStatus: 'Estat: En Curs',
      heroTitle: 'Setmana 1: L\'Arribada',
      heroDesc: 'Captura la primera impressió de la ciutat a l\'alba.',
      heroButton: 'Participar',
      weeks: ['Sabors', 'Ritmes', 'Altures', 'Ombres', 'Veus', 'Futur', 'El Comiat'],
      weekDescriptions: ['Assaboreix l\'ànima.', 'El pols dels carrers.', 'Noves perspectives.', 'Llum i contrast.', 'Històries de la gent.', 'La ciutat del demà.', 'El capítol final.']
    },
    citySpots: {
      title: 'Punts de Creació', subtitle: 'Localitzacions recomanades per als teus rodatges.', selectCity: 'Selecciona Ciutat', spotType: 'Tipus de Spot', viewOnMaps: 'Veure a Google Maps', clickToExplore: 'Fes clic per explorar',
      cityNames: { madrid: 'Madrid', barcelona: 'Barcelona', valencia: 'València' },
      spots: {
        madrid: [
          { id: 'm1', name: 'Temple de Debod', desc: 'Millor per a siluetes al capvespre i reflexos a l\'aigua.' },
          { id: 'm2', name: 'Gran Via i Callao', desc: 'Llums de neó cinematogràfics i flux de trànsit intens.' },
          { id: 'm3', name: 'Madrid Río', desc: 'Ponts moderns i espais oberts per a preses amb dron.' }
        ],
        barcelona: [
          { id: 'b1', name: 'Bunkers del Carmel', desc: 'Vistes panoràmiques de la ciutat, perfecte per a l\'alba.' },
          { id: 'b2', name: 'Plaça MACBA', desc: 'Cultura skate, moviment i arquitectura marcada.' },
          { id: 'b3', name: 'Barri Gòtic', desc: 'Joc de llums i ombres en carrers estrets.' }
        ],
        valencia: [
          { id: 'v1', name: 'Ciutat de les Arts', desc: 'Arquitectura futurista, línies netes i aigua.' },
          { id: 'v2', name: 'El Carme', desc: 'Art urbà i textures vibrants.' },
          { id: 'v3', name: 'Albufera', desc: 'Natura, hora daurada i aigües tranquil·les.' }
        ]
      }
    },
    process: { label: 'El Procés', title: 'El teu Viatge Comença Així', steps: [{ id: '01', title: 'Registra\'t', desc: 'Crea el teu perfil i tria nivell.' }, { id: '02', title: 'Rep el Repte', desc: 'Cada dilluns rebràs el tema.' }, { id: '03', title: 'Puja la teva Creació', desc: 'Comparteix el teu treball a SkyPixel.' }, { id: '04', title: 'Guanya i Connecta', desc: 'Premis setmanals i exhibicions.' }] },
    showcase: { inspiration: 'Inspiració', title: 'SkyPixel Showcase', button: 'Veure el Showcase', card1Title: 'Comissariat Expert', card1Desc: 'Seleccions setmanals per fotògrafs de renom.', card2Title: 'Rànquings Globals', card2Desc: 'Competeix amb els millors creadors visuals.', card3Title: 'Exhibició Final', card3Desc: 'Els millors treballs seran exposats en una gala.' },
    registration: { label: 'Unió', title: 'Uneix-te al Viatge', subtitle: 'Places limitades per a ments il·limitades.', nameLabel: 'Nom Complet', emailLabel: 'Email', cityLabel: 'Ciutat', profileLabel: 'Perfil', terms: 'Accepto els termes i condicions.', button: 'Unir-me Ara', cities: ['Madrid', 'Barcelona', 'València', 'Altra'], profiles: ['Starter', 'Narrador Visual', 'Cineasta'] },
    videoTest: { title: 'Diagnòstic de Sistema', desc: 'Verifica la teva velocitat de connexió per assegurar la millor experiència.', btnStart: 'Iniciar Test', btnTesting: 'Analitzant...', resultLabel: 'Latència', recLabel: 'Qualitat Recomanada', recHD: 'Alta Definició (1080p/4K)', recSD: 'Definició Estàndard (360p)', error: 'Error de connexió', retry: 'Reintentar' },
    gearExchange: {
      title: 'DJI GEAR EXCHANGE',
      subtitle: 'Evoluciona el teu equip. Sense riscos.',
      feature1Title: 'Verificació Oficial',
      feature1Desc: 'Staff certificat valida l\'estat de cada equip.',
      feature2Title: 'Comunitat Segura',
      feature2Desc: 'Tracte directe entre creadors verificats.',
      feature3Title: 'Upgrades Orgànics',
      feature3Desc: 'Gamifiquem el teu ascens.',
      cta: 'Explorar Gear Exchange'
    },
    gearModal: {
      verification: {
        title: "Verificació Oficial",
        subtitle: "Qualitat Certificada",
        desc: "Els nostres experts certifiquen cada article. Assegurem integritat funcional, bateria i estètica.",
        benefits: ["Inspecció de 70 punts", "Garantia de 12 mesos", "Certificat Oficial"]
      },
      community: {
        title: "Comunitat Segura",
        subtitle: "Confiança i Connexió",
        desc: "Connecta amb creadors verificats. Sense bots ni estafes. Només narradors millorant el seu equip.",
        benefits: ["Perfils Verificats", "Xat Directe", "Pagament Segur"]
      },
      upgrades: {
        title: "Puja de Nivell",
        subtitle: "Guanya i Millora",
        desc: "Usa els teus Crèdits de Creador per a descomptes. Com més crees, millors eines desbloqueges.",
        benefits: ["Guanya Crèdits", "Accés Exclusiu", "Bonus d'Intercanvi"]
      },
      close: "Tancar"
    },
    routeModal: {
      explorer: {
        title: "EXPLORADOR URBÀ",
        subtitle: "La teva ciutat amb ànima. Immediatesa i diversió.",
        desc: "Perfil Ideal (70%): Per a creadors que valoren l'experiència sobre la tècnica. Prioritzes l'agilitat. Uses eines lleugeres com Smartphone, Osmo Pocket o drons compactes (Neo, Mini 4 Pro) per capturar moments únics sense complicacions.",
        steps: ["Immediatesa: Gravar i publicar ràpid", "Diversió: Reptes i gamificació", "Comunitat: Sent part del moviment"],
        equipment: "Smartphone / Pocket 3 / Neo / Mini 4 Pro"
      },
      storyteller: {
        title: "NARRADOR VISUAL",
        subtitle: "La ciutat com a relat oficial. Qualitat i Credibilitat.",
        desc: "Perfil Ideal (30%): Per a professionals que construeixen portafoli. Necessites qualitat portàtil. El teu set inclou Càmeres Mirrorless, Ronin i Drons d'alt rendiment (Mavic 3, Air 3S, Avata) per a una estètica cinematogràfica sense perdre mobilitat.",
        steps: ["Qualitat Superior: Producció High-End", "Credibilitat: Portafoli professional", "Tècnica: Mirrorless i Drons Pro"],
        equipment: "Mirrorless / Ronin / Mavic 3 / Air 3S"
      },
      keyPoints: "Punts Clau",
      startRoute: "Iniciar Ruta",
      close: "Tancar"
    },
    footer: {
      brandDesc: 'Impulsant la creativitat des del cel i la terra.', supportTitle: 'Suport', legalTitle: 'Legal', socialTitle: 'Social', copyright: '© 2024 Creator Journey.', tagline: 'Dissenyat per a visionaris',
      links: { faq: 'FAQ', contact: 'Contacte', forum: 'Fòrum', privacy: 'Privacitat', terms: 'Termes', cookies: 'Cookies' }
    }
  },
  fr: {
    nav: { season: 'Saison 1', howWorks: 'Comment ça marche', challenges: 'Défis', skypixel: 'SkyPixel', register: 'S\'inscrire', join: 'Rejoindre' },
    hero: { mission: 'Mission Artistique 01', titleMain: 'La Ville en', titleSub: 'Deux Regards', subtitle: 'Un voyage créatif de 3 mois.', modalities: 'Modalités', routePersonal: 'Route Personnelle (15–30s)', routePro: 'Route Pro (2–5 min)', noDrone: 'Sans drone ça marche aussi', start: 'Commencer', watch: 'Voir la démo', vertical: 'Fondé 2024 — Perspective Urbaine', sysStatus: 'État du Système', runCheck: 'Lancer Diagnostic', analyzing: 'Analyse Réseau...', optimal: 'Qualité Optimale' },
    manifesto: { label: 'Manifeste', title: 'Qu\'est-ce que c\'est', subtitle: 'Une initiative pour transformer votre vision créative.', card1Title: 'Défis Mensuels', card1Desc: 'Défis créatifs conçus pour repousser vos limites.', card2Title: 'Niveaux Adaptatifs', card2Desc: 'Des débutants aux professionnels du cinéma.', card3Title: 'Communauté Mondiale', card3Desc: 'Connectez-vous avec d\'autres créateurs et partagez votre vision.' },
    creativeRoutes: {
      bgText: 'Choisir', title: 'Choisissez votre Route', subtitle: 'Votre entrée dépend de votre intention, pas de l\'équipement.',
      card1Label: '01 / Starter', card1Title: 'Explorateur Urbain', card1Desc: 'Pour ceux qui capturent des moments spontanés.', card1Button: 'Voir Ma Route', card1Equipment: 'Smartphone / Pocket / Neo / Mini',
      card2Label: '02 / Populaire', card2Title: 'Conteur Visuel', card2Desc: 'Pour les créateurs expérimentés.', card2Button: 'Voir Ma Route', card2Equipment: 'Mirrorless / Ronin / Mavic / Air',
      card3Label: '03 / Pro', card3Title: 'Cinéaste', card3Desc: 'Productions de haut niveau.', card3Button: 'Voir Ma Route'
    },
    seasonMap: {
      title: 'Carte de la Saison',
      subtitle: '8 semaines, 8 perspectives différentes.',
      link: 'Voir le Calendrier',
      heroStatus: 'Statut : En Cours',
      heroTitle: 'Semaine 1 : L\'Arrivée',
      heroDesc: 'Capturez la première impression de la ville à l\'aube.',
      heroButton: 'Participer',
      weeks: ['Saveurs', 'Rythmes', 'Hauteurs', 'Ombres', 'Voix', 'Futur', 'Adieu'],
      weekDescriptions: ['Goûtez l\'âme culinaire.', 'Le pouls des rues.', 'Nouvelles perspectives.', 'Ombre et lumière.', 'Histoires des gens.', 'La ville de demain.', 'Le dernier chapitre.']
    },
    citySpots: {
      title: 'Lieux de Création', subtitle: 'Lieux recommandés pour vos tournages.', selectCity: 'Sélectionner Ville', spotType: 'Type de Lieu', viewOnMaps: 'Voir sur Google Maps', clickToExplore: 'Cliquez pour explorer',
      cityNames: { madrid: 'Madrid', barcelona: 'Barcelone', valencia: 'Valence' },
      spots: {
        madrid: [
          { id: 'm1', name: 'Temple de Debod', desc: 'Idéal pour les silhouettes au coucher du soleil et les reflets.' },
          { id: 'm2', name: 'Gran Vía & Callao', desc: 'Lumières néon cinématiques et trafic intense.' },
          { id: 'm3', name: 'Madrid Río', desc: 'Ponts modernes et grands espaces pour drones.' }
        ],
        barcelona: [
          { id: 'b1', name: 'Bunkers del Carmel', desc: 'Vues panoramiques, parfait pour le lever du soleil.' },
          { id: 'b2', name: 'Place MACBA', desc: 'Culture skate, mouvement et architecture brute.' },
          { id: 'b3', name: 'Quartier Gothique', desc: 'Jeux d\'ombre et de lumière dans les ruelles.' }
        ],
        valencia: [
          { id: 'v1', name: 'Cité des Arts', desc: 'Architecture futuriste, lignes épurées et eau.' },
          { id: 'v2', name: 'El Carmen', desc: 'Street art et textures vibrantes.' },
          { id: 'v3', name: 'Albufera', desc: 'Nature, heure dorée et eaux calmes.' }
        ]
      }
    },
    process: { label: 'Le Processus', title: 'Votre Voyage Commence', steps: [{ id: '01', title: 'Inscrivez-vous', desc: 'Créez votre profil et choisissez votre niveau.' }, { id: '02', title: 'Recevez le Défi', desc: 'Chaque lundi, recevez le thème.' }, { id: '03', title: 'Téléchargez', desc: 'Partagez votre travail sur SkyPixel.' }, { id: '04', title: 'Gagnez & Connectez', desc: 'Prix hebdomadaires et expositions.' }] },
    showcase: { inspiration: 'Inspiration', title: 'Vitrine SkyPixel', button: 'Voir la Vitrine', card1Title: 'Curation Experte', card1Desc: 'Sélections hebdomadaires par des photographes renommés.', card2Title: 'Classements Mondiaux', card2Desc: 'Affrontez les meilleurs créateurs visuels.', card3Title: 'Exposition Finale', card3Desc: 'Les meilleures œuvres seront exposées lors d\'un gala.' },
    registration: { label: 'Union', title: 'Rejoignez le Voyage', subtitle: 'Places limitées pour des esprits illimités.', nameLabel: 'Nom Complet', emailLabel: 'Email', cityLabel: 'Ville', profileLabel: 'Profil', terms: 'J\'accepte les termes et conditions.', button: 'Rejoindre Maintenant', cities: ['Madrid', 'Barcelone', 'Valence', 'Autre'], profiles: ['Débutant', 'Conteur Visuel', 'Cinéaste'] },
    videoTest: { title: 'Diagnostic Système', desc: 'Vérifiez votre connexion pour une expérience optimale.', btnStart: 'Lancer le test', btnTesting: 'Analyse...', resultLabel: 'Latence', recLabel: 'Qualité Recommandée', recHD: 'Haute Définition (1080p/4K)', recSD: 'Définition Standard (360p)', error: 'Erreur de connexion', retry: 'Réessayer' },
    gearExchange: {
      title: 'DJI GEAR EXCHANGE',
      subtitle: 'Upgrade your gear. Confidently.',
      feature1Title: 'Official Verification',
      feature1Desc: 'Certified staff validates gear condition.',
      feature2Title: 'Secure Community',
      feature2Desc: 'Direct deals between verified creators.',
      feature3Title: 'Organic Upgrades',
      feature3Desc: 'Gamified progression.',
      cta: 'Explore Gear Exchange'
    },
    gearModal: {
      verification: {
        title: "Vérification Officielle",
        subtitle: "Qualité Certifiée",
        desc: "Nos experts inspectent chaque article. Intégrité fonctionnelle et esthétique garantie.",
        benefits: ["Inspection 70 points", "Garantie 12 mois", "Certificat Officiel"]
      },
      community: {
        title: "Communauté Sécurisée",
        subtitle: "Confiance & Lien",
        desc: "Connectez-vous avec des créateurs vérifiés. Pas de bots, pas d'arnaques.",
        benefits: ["Profils Vérifiés", "Chat Direct", "Paiement Sécurisé"]
      },
      upgrades: {
        title: "Niveau Supérieur",
        subtitle: "Gagnez & Améliorez",
        desc: "Utilisez vos Crédits Créateur pour des remises. Plus vous créez, meilleurs sont vos outils.",
        benefits: ["Gagnez des Crédits", "Accès Exclusif", "Bonus d'Échange"]
      },
      close: "Fermer"
    },
    routeModal: {
      explorer: {
        title: "EXPLORATEUR URBAIN",
        subtitle: "Votre ville, avec une âme. Immédiateté et plaisir.",
        desc: "Profil Idéal (70%) : Pour les créateurs privilégiant l'expérience sur la technique. Vous aimez l'agilité. Outils légers : Smartphone, Osmo Pocket ou drones compacts (Neo, Mini 4 Pro) pour capturer l'unique sans complications.",
        steps: ["Immédiateté : Filmez et publiez vite", "Plaisir : Défis et gamification", "Communauté : Rejoignez le mouvement"],
        equipment: "Smartphone / Pocket 3 / Neo / Mini 4 Pro"
      },
      storyteller: {
        title: "CONTEUR VISUEL",
        subtitle: "La ville comme récit officiel. Qualité et Crédibilité.",
        desc: "Profil Idéal (30%) : Pour les pros bâtissant un portfolio. Vous avez besoin de qualité portable. Votre set : Hybrides, Ronin et Drones performants (Mavic 3, Air 3S, Avata) pour un rendu cinéma tout en restant mobile.",
        steps: ["Qualité Supérieure : Production High-End", "Crédibilité : Portfolio pro", "Technique : Hybrides & Drones Pro"],
        equipment: "Mirrorless / Ronin / Mavic 3 / Air 3S"
      },
      keyPoints: "Points Clés",
      startRoute: "Commencer la Route",
      close: "Fermer"
    },
    footer: {
      brandDesc: 'Stimuler la créativité du ciel et de la terre.', supportTitle: 'Support', legalTitle: 'Légal', socialTitle: 'Social', copyright: '© 2024 Creator Journey.', tagline: 'Conçu pour les visionnaires',
      links: { faq: 'FAQ', contact: 'Contact', forum: 'Forum', privacy: 'Confidentialité', terms: 'Conditions', cookies: 'Cookies' }
    }
  },
  de: {
    nav: { season: 'Staffel 1', howWorks: 'Wie es funktioniert', challenges: 'Herausforderungen', skypixel: 'SkyPixel', register: 'Registrieren', join: 'Beitreten' },
    hero: { mission: 'Künstlerische Mission 01', titleMain: 'Die Stadt in', titleSub: 'Zwei Perspektiven', subtitle: 'Eine 3-monatige kreative Reise.', modalities: 'Modalitäten', routePersonal: 'Persönliche Route (15–30s)', routePro: 'Profi-Route (2–5 min)', noDrone: 'Auch ohne Drohne', start: 'Starten', watch: 'Ansehen', vertical: 'Gegründet 2024 — Urbane Perspektive', sysStatus: 'Systemstatus', runCheck: 'Diagnose starten', analyzing: 'Netzwerk analysieren...', optimal: 'Optimale Qualität' },
    manifesto: { label: 'Manifest', title: 'Was ist es', subtitle: 'Eine Initiative, um Ihre kreative Vision zu transformieren.', card1Title: 'Monatliche Herausforderungen', card1Desc: 'Kreative Herausforderungen, um Ihre Grenzen zu erweitern.', card2Title: 'Adaptive Niveaus', card2Desc: 'Vom Anfänger bis zum Filmprofi.', card3Title: 'Globale Community', card3Desc: 'Verbinden Sie sich mit anderen Schöpfern.' },
    creativeRoutes: {
      bgText: 'Wählen', title: 'Wählen Sie Ihre Route', subtitle: 'Ihr Einstieg hängt von der Absicht ab, nicht von der Ausrüstung.',
      card1Label: '01 / Starter', card1Title: 'Stadterkunder', card1Desc: 'Für spontane Momente.', card1Button: 'Meine Route ansehen', card1Equipment: 'Smartphone / Pocket / Neo / Mini',
      card2Label: '02 / Beliebt', card2Title: 'Visueller Geschichtenerzähler', card2Desc: 'Für erfahrene Schöpfer.', card2Button: 'Meine Route ansehen', card2Equipment: 'Mirrorless / Ronin / Mavic / Air',
      card3Label: '03 / Profi', card3Title: 'Filmemacher', card3Desc: 'Produktionen auf hohem Niveau.', card3Button: 'Meine Route ansehen'
    },
    seasonMap: {
      title: 'Saisonkarte',
      subtitle: '8 Wochen, 8 verschiedene Perspektiven.',
      link: 'Vollständigen Kalender ansehen',
      heroStatus: 'Status: Laufend',
      heroTitle: 'Woche 1: Die Ankunft',
      heroDesc: 'Fangen Sie den ersten Eindruck der Stadt im Morgengrauen ein.',
      heroButton: 'Teilnehmen',
      weeks: ['Geschmäcker', 'Rhythmen', 'Höhen', 'Schatten', 'Stimmen', 'Zukunft', 'Abschied'],
      weekDescriptions: ['Die kulinarische Seele.', 'Der Puls der Straßen.', 'Neue Perspektiven.', 'Licht und Schatten.', 'Geschichten der Menschen.', 'Stadt von morgen.', 'Das letzte Kapitel.']
    },
    citySpots: {
      title: 'Kreativorte', subtitle: 'Empfohlene Orte für Ihre Dreharbeiten.', selectCity: 'Stadt wählen', spotType: 'Ortstyp', viewOnMaps: 'Auf Google Maps ansehen', clickToExplore: 'Klicken zum Erkunden',
      cityNames: { madrid: 'Madrid', barcelona: 'Barcelona', valencia: 'Valencia' },
      spots: {
        madrid: [
          { id: 'm1', name: 'Tempel von Debod', desc: 'Beste Silhouetten bei Sonnenuntergang und Spiegelungen.' },
          { id: 'm2', name: 'Gran Vía & Callao', desc: 'Filmische Neonlichter und dichter Verkehr.' },
          { id: 'm3', name: 'Madrid Rio', desc: 'Moderne Brücken und offene Räume für Drohnen.' }
        ],
        barcelona: [
          { id: 'b1', name: 'Bunkers del Carmel', desc: 'Panoramablick, perfekt für den Sonnenaufgang.' },
          { id: 'b2', name: 'MACBA Platz', desc: 'Skate-Kultur, Bewegung und starke Architektur.' },
          { id: 'b3', name: 'Gotisches Viertel', desc: 'Licht- und Schattenspiele in engen Gassen.' }
        ],
        valencia: [
          { id: 'v1', name: 'Stadt der Künste', desc: 'Futuristische Architektur, klare Linien und Wasser.' },
          { id: 'v2', name: 'El Carmen', desc: 'Street Art und lebendige Texturen.' },
          { id: 'v3', name: 'Albufera', desc: 'Natur, goldene Stunde und ruhiges Wasser.' }
        ]
      }
    },
    process: { label: 'Der Prozess', title: 'Ihre Reise beginnt hier', steps: [{ id: '01', title: 'Registrieren', desc: 'Profil erstellen und Level wählen.' }, { id: '02', title: 'Herausforderung erhalten', desc: 'Jeden Montag ein neues Thema.' }, { id: '03', title: 'Hochladen', desc: 'Teilen Sie Ihre Arbeit auf SkyPixel.' }, { id: '04', title: 'Gewinnen & Verbinden', desc: 'Wöchentliche Preise und Ausstellungen.' }] },
    showcase: { inspiration: 'Inspiration', title: 'SkyPixel Showcase', button: 'Showcase ansehen', card1Title: 'Experten-Kuration', card1Desc: 'Wöchentliche Auswahl renommierter Fotografen.', card2Title: 'Globale Rankings', card2Desc: 'Messen Sie sich mit den besten visuellen Schöpfern.', card3Title: 'Abschlussausstellung', card3Desc: 'Die besten Werke werden auf einer Gala ausgestellt.' },
    registration: { label: 'Union', title: 'Reise beitreten', subtitle: 'Begrenzte Plätze für unbegrenzte Köpfe.', nameLabel: 'Vollständiger Name', emailLabel: 'E-Mail', cityLabel: 'Stadt', profileLabel: 'Profil', terms: 'Ich akzeptiere die Bedingungen.', button: 'Jetzt beitreten', cities: ['Madrid', 'Barcelona', 'Valencia', 'Andere'], profiles: ['Starter', 'Visueller Geschichtenerzähler', 'Filmmaker'] },
    videoTest: { title: 'Systemdiagnose', desc: 'Überprüfen Sie Ihre Verbindung für optimale Wiedergabe.', btnStart: 'Test starten', btnTesting: 'Analysiere...', resultLabel: 'Latenz', recLabel: 'Empfohlene Qualität', recHD: 'High Definition (1080p/4K)', recSD: 'Standard Definition (360p)', error: 'Verbindungsfehler', retry: 'Wiederholen' },
    gearExchange: {
      title: 'DJI GEAR EXCHANGE',
      subtitle: 'Upgrade your gear. Confidently.',
      feature1Title: 'Official Verification',
      feature1Desc: 'Certified staff validates gear condition.',
      feature2Title: 'Secure Community',
      feature2Desc: 'Direct deals between verified creators.',
      feature3Title: 'Organic Upgrades',
      feature3Desc: 'Gamified progression.',
      cta: 'Explore Gear Exchange'
    },
    gearModal: {
      verification: {
        title: "Offizielle Verifizierung",
        subtitle: "Zertifizierte Qualität",
        desc: "Unsere Experten prüfen jeden Artikel. Wir garantieren Funktionsfähigkeit, Akkulaufzeit und Ästhetik.",
        benefits: ["70-Punkte-Inspektion", "12 Monate Garantie", "Offizielles Zertifikat"]
      },
      community: {
        title: "Sichere Community",
        subtitle: "Vertrauen & Verbindung",
        desc: "Verbinde dich mit verifizierten Schöpfern. Keine Bots, kein Betrug.",
        benefits: ["Verifizierte Profile", "Direkt-Chat", "Sichere Zahlung"]
      },
      upgrades: {
        title: "Level Up",
        subtitle: "Verdienen & Upgrade",
        desc: "Nutze deine Creator Credits für Rabatte. Je mehr du erschaffst, desto besser deine Ausrüstung.",
        benefits: ["Credits verdienen", "Exklusiver Zugang", "Eintausch-Bonus"]
      },
      close: "Schließen"
    },
    routeModal: {
      explorer: {
        title: "STADTERKUNDER",
        subtitle: "Deine Stadt mit Seele. Unmittelbarkeit und Spaß.",
        desc: "Ideales Profil (70%): Für Schöpfer, die Erlebnis über Technik stellen. Du magst es agil. Leichtes Gerät: Smartphone, Osmo Pocket oder kompakte Drohnen (Neo, Mini 4 Pro) für unkomplizierte, einzigartige Momente.",
        steps: ["Unmittelbarkeit: Schnell filmen & posten", "Spaß: Challenges & Gamification", "Community: Sei Teil der Bewegung"],
        equipment: "Smartphone / Pocket 3 / Neo / Mini 4 Pro"
      },
      storyteller: {
        title: "VISUELLER STORYTELLER",
        subtitle: "Die Stadt als offizielle Erzählung. Qualität & Glaubwürdigkeit.",
        desc: "Ideales Profil (30%): Für Profis, die ein Portfolio aufbauen. Du brauchst portable Qualität. Dein Set: Spiegellose Kameras, Ronin und Hochleistungsdrohnen (Mavic 3, Air 3S, Avata) für filmische Ästhetik bei voller Mobilität.",
        steps: ["Top-Qualität: High-End Produktion", "Glaubwürdigkeit: Profi-Portfolio", "Technik: Mirrorless & Pro Drohnen"],
        equipment: "Mirrorless / Ronin / Mavic 3 / Air 3S"
      },
      keyPoints: "Wichtige Punkte",
      startRoute: "Route Starten",
      close: "Schließen"
    },
    footer: {
      brandDesc: 'Förderung der Kreativität von Himmel und Erde.', supportTitle: 'Support', legalTitle: 'Rechtliches', socialTitle: 'Sozial', copyright: '© 2024 Creator Journey.', tagline: 'Entwickelt für Visionäre',
      links: { faq: 'FAQ', contact: 'Kontakt', forum: 'Forum', privacy: 'Datenschutz', terms: 'AGB', cookies: 'Cookies' }
    }
  },
  zh: {
    nav: { season: '第一季', howWorks: '运作方式', challenges: '挑战', skypixel: 'SkyPixel', register: '注册', join: '加入' },
    hero: { mission: '艺术使命 01', titleMain: '城市', titleSub: '两种视角', subtitle: '为期3个月的创意之旅。', modalities: '模式', routePersonal: '个人路线 (15–30秒)', routePro: '专业路线 (2–5分钟)', noDrone: '无需无人机', start: '开始', watch: '观看演示', vertical: '成立于 2024 — 城市视角', sysStatus: '系统状态', runCheck: '运行诊断', analyzing: '正在分析网络...', optimal: '最佳质量' },
    manifesto: { label: '宣言', title: '这是什么', subtitle: '一项旨在改变您的创意视野的举措。', card1Title: '每月挑战', card1Desc: '旨在突破您极限的创意挑战。', card2Title: '适应性等级', card2Desc: '从初学者到电影专业人士。', card3Title: '全球社区', card3Desc: '与其他创作者联系并分享您的独特视野。' },
    creativeRoutes: {
      bgText: '选择', title: '选择您的创意路线', subtitle: '您的入门取决于意图，而不是装备。',
      card1Label: '01 / 初学者', card1Title: '城市探险家', card1Desc: '适合捕捉自发时刻的人。', card1Button: '查看我的路线', card1Equipment: '智能手机 / Pocket / Neo / Mini',
      card2Label: '02 / 热门', card2Title: '视觉讲故事者', card2Desc: '适合经验丰富的创作者。', card2Button: '查看我的路线', card2Equipment: '无反相机 / Ronin / Mavic / Air',
      card3Label: '03 / 专业', card3Title: '电影制作人', card3Desc: '高水平制作。', card3Button: '查看我的路线'
    },
    seasonMap: {
      title: '赛季地图',
      subtitle: '8周，8种不同的视角。',
      link: '查看完整日历',
      heroStatus: '状态：进行中',
      heroTitle: '第一周：到来',
      heroDesc: '捕捉黎明时分对城市的第一印象。',
      heroButton: '参加',
      weeks: ['风味', '节奏', '高度', '阴影', '声音', '未来', '告别'],
      weekDescriptions: ['品味烹饪灵魂。', '捕捉街道的脉搏。', '寻找新视角。', '玩转光影对比。', '记录人们的故事。', '想象明天的城市。', '旅程的最终章。']
    },
    citySpots: {
      title: '创作地点', subtitle: '推荐的拍摄地点。', selectCity: '选择城市', spotType: '地点类型', viewOnMaps: '在 Google 地图中查看', clickToExplore: '点击标记以探索',
      cityNames: { madrid: '马德里', barcelona: '巴塞罗那', valencia: '瓦伦西亚' },
      spots: {
        madrid: [
          { id: 'm1', name: '德波神庙', desc: '适合日落剪影和水面倒影。' },
          { id: 'm2', name: '格兰大道 & Callao', desc: '电影般的霓虹灯和繁忙的交通流。' },
          { id: 'm3', name: '马德里河', desc: '现代桥梁和适合无人机拍摄的开阔空间。' }
        ],
        barcelona: [
          { id: 'b1', name: 'Carmel 碉堡', desc: '城市全景，日出的完美选择。' },
          { id: 'b2', name: 'MACBA 广场', desc: '滑板文化、运动和鲜明的建筑。' },
          { id: 'b3', name: '哥特区', desc: '狭窄街道中的光影游戏。' }
        ],
        valencia: [
          { id: 'v1', name: '艺术科学城', desc: '未来主义建筑、简洁的线条和水景。' },
          { id: 'v2', name: 'El Carmen', desc: '街头艺术和充满活力的纹理。' },
          { id: 'v3', name: 'Albufera', desc: '自然风光、黄金时刻和平静的水面。' }
        ]
      }
    },
    process: { label: '过程', title: '您的旅程从这里开始', steps: [{ id: '01', title: '注册', desc: '创建个人资料并选择等级。' }, { id: '02', title: '接受挑战', desc: '每周一接收主题。' }, { id: '03', title: '上传作品', desc: '在SkyPixel上分享您的作品。' }, { id: '04', title: '赢取与连接', desc: '每周奖品和展览。' }] },
    showcase: { inspiration: '灵感', title: 'SkyPixel展示', button: '查看展示', card1Title: '专家策展', card1Desc: '由知名摄影师每周精选。', card2Title: '全球排名', card2Desc: '与全球最佳视觉创作者一较高下。', card3Title: '最终展览', card3Desc: '优秀作品将在独家晚会上展出。' },
    registration: { label: '联合', title: '加入旅程', subtitle: '名额有限，思维无限。', nameLabel: '全名', emailLabel: '电子邮件', cityLabel: '城市', profileLabel: '个人资料', terms: '我接受条款和条件。', button: '立即加入', cities: ['马德里', '巴塞罗那', '瓦伦西亚', '其他'], profiles: ['初学者', '视觉讲述者', '电影制作人'] },
    videoTest: { title: '系统诊断', desc: '检查您的连接速度以确保最佳播放体验。', btnStart: '开始测试', btnTesting: '分析中...', resultLabel: '延迟', recLabel: '推荐画质', recHD: '高清 (1080p/4K)', recSD: '标清 (360p)', error: '连接错误', retry: '重试' },
    gearExchange: {
      title: 'DJI 装备交换',
      subtitle: '升级您的装备。自信无忧。',
      feature1Title: '官方验证',
      feature1Desc: '认证工作人员在活动现场验证装备状况（等级 A/B/C）。',
      feature2Title: '安全社区',
      feature2Desc: '经过验证的创作者之间直接交易。',
      feature3Title: '有机升级',
      feature3Desc: '游戏化进程以解锁更好的工具。',
      cta: '探索装备交换'
    },
    gearModal: {
      verification: {
        title: "官方验证",
        subtitle: "认证质量",
        desc: "我们的 DJI 认证专家检查每一件物品。我们确保功能完整性、电池寿命和外观状况。",
        benefits: ["70点检查", "12个月保修", "官方证书"]
      },
      community: {
        title: "验证社区",
        subtitle: "信任与连接",
        desc: "与其他经过验证的创作者直接联系。没有机器人，没有诈骗。只是热情的讲故事者升级装备以讲述更好的故事。",
        benefits: ["验证档案", "直接聊天", "安全托管"]
      },
      upgrades: {
        title: "升级",
        subtitle: "赚取与升级",
        desc: "使用您从挑战中赚取的创作者积分获得新装备或二手装备的折扣。您创作得越多，您的工具就越好。",
        benefits: ["赚取积分", "独家访问", "以旧换新奖金"]
      },
      close: "关闭"
    },
    routeModal: {
      explorer: {
        title: "城市探险家",
        subtitle: "有灵魂的城市。即时与乐趣。",
        desc: "理想档案 (70%): 适合重视体验胜过技术的创作者。你优先考虑灵活性。使用智能手机、Osmo Pocket 或紧凑型无人机 (Neo, Mini 4 Pro) 等轻量级工具，轻松捕捉独特时刻。",
        steps: ["即时性: 快速拍摄和发布", "乐趣: 挑战和游戏化", "社区: 感受运动的一部分"],
        equipment: "智能手机 / Pocket 3 / Neo / Mini 4 Pro"
      },
      storyteller: {
        title: "视觉讲述者",
        subtitle: "作为官方叙事的城市。质量与可信度。",
        desc: "理想档案 (30%): 适合建立作品集的专业人士。你需要便携的高画质。你的装备包括无反相机、Ronin 和高性能无人机 (Mavic 3, Air 3S, Avata)，在不失灵活性的同时获得电影级美感。",
        steps: ["卓越品质: 高端制作", "可信度: 专业作品集", "技术: 无反相机 & 专业无人机"],
        equipment: "无反相机 / Ronin / Mavic 3 / Air 3S"
      },
      keyPoints: "关键点",
      startRoute: "开始路线",
      close: "关闭"
    },
    footer: {
      brandDesc: '从天空和大地推动创造力。', supportTitle: '支持', legalTitle: '法律', socialTitle: '社交', copyright: '© 2024 Creator Journey.', tagline: '专为有远见的人设计',
      links: { faq: '常见问题', contact: '联系方式', forum: '论坛', privacy: '隐私政策', terms: '服务条款', cookies: 'Cookies' }
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};