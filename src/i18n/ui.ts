export const languages = {
  it: 'IT',
  en: 'EN',
} as const;

export const defaultLang = 'it' as const;

export type Lang = keyof typeof languages;

export const experienceOrder = [
  'boosha',
  'parla',
  'ied',
  'blowhammer',
  'zero',
  'cegeka',
] as const;

export type ExperienceId = (typeof experienceOrder)[number];

export const educationOrder = [
  'master',
  'sdaBocconi',
  'erasmus',
  'bachelor',
] as const;

export type EducationId = (typeof educationOrder)[number];

export const ui = {
  it: {
    'meta.title': 'Mario Di Girolamo — CEO & Cofondatore di Boosha',
    'meta.description':
      "Mario Di Girolamo, CEO e cofondatore di Boosha. Aiuto le aziende italiane a integrare l'intelligenza artificiale nei processi quotidiani.",

    'nav.about': 'Chi sono',
    'nav.experience': 'Esperienza',
    'nav.education': 'Formazione',
    'nav.boosha': 'Boosha',
    'nav.contact': 'Contatti',
    'nav.skipLink': 'Salta al contenuto principale',

    'hero.eyebrow': 'CEO & Cofondatore di Boosha',
    'hero.headline': 'Aiuto le imprese a crescere con l’intelligenza artificiale.',
    'hero.lede':
      'Sono Mario Di Girolamo. Insieme alla mia socia Giada Franceschini ho fondato Boosha, dove portiamo l’AI nei processi delle aziende italiane — dalla formazione all’implementazione — in modo concreto, sicuro e misurabile.',
    'hero.cta.boosha': 'Scopri Boosha',
    'hero.cta.contact': 'Scrivimi',
    'hero.portraitAlt': 'Ritratto di Mario Di Girolamo',

    'about.kicker': 'Chi sono',
    'about.title': 'AI e leadership, al servizio dell’impresa.',
    'about.p1':
      'Lavoro all’incrocio tra tecnologia e business. Dal 2014 fondo e contribuisco a far crescere realtà che mettono il digitale e l’AI al centro: dalle prime esperienze nello sviluppo software con Merge-is, fino al cluster AI di oggi formato da Boosha, Parla e Impara ChatGPT.',
    'about.p2':
      'Il mio approccio è pragmatico. Parto sempre dal processo, non dalla tecnologia: capisco dove c’è frizione, dove si perde tempo, dove un agente AI o un assistente virtuale può fare la differenza. Poi costruisco — con team multidisciplinari che uniscono ingegneria, design e strategia.',
    'about.p3':
      'Credo che l’AI in azienda funzioni quando le persone la sentono come un alleato, non come un’imposizione. Per questo affianco l’implementazione tecnica con un lavoro continuo sulla formazione, anche in aula come docente allo IED.',
    'about.quote':
      '“Among all the experience that I had, I’ve learnt that only being humble you can improve yourself.”',
    'about.expertise.title': 'Aree di expertise',
    'about.expertise.ai': 'Intelligenza Artificiale applicata al business',
    'about.expertise.leadership': 'Leadership e gestione di team multidisciplinari',
    'about.expertise.strategy': 'Strategia di prodotto e go-to-market',
    'about.expertise.consulting': 'Consulenza AI per PMI e grandi aziende',
    'about.languages.title': 'Lingue',
    'about.languages.value': 'Italiano (madrelingua) · Inglese (Professional Working)',
    'about.location.title': 'Sede',
    'about.location.value': 'Caserta, Italia',

    'experience.kicker': 'Esperienza',
    'experience.title': 'Il percorso.',

    'experience.boosha.role': 'CEO & Cofondatore',
    'experience.boosha.company': 'Boosha AI',
    'experience.boosha.period': '2024 — oggi',
    'experience.boosha.description':
      'Cofondata insieme a Giada Franceschini. Aiutiamo le aziende a integrare soluzioni AI in processi come riunioni, HR, ricerca documentale, sviluppo prodotti e controllo di gestione. Tra i clienti che ci hanno scelto: CNA, Save the Children, Coldiretti, Hera, Allianz, Coesiva.',

    'experience.parla.role': 'CMO & Cofondatore — Co-Founder',
    'experience.parla.company': 'Parla · Impara ChatGPT',
    'experience.parla.period': '2024 — oggi',
    'experience.parla.description':
      'Cofondatore di Parla, piattaforma all-in-one che unisce i migliori modelli linguistici per il business, e di Impara ChatGPT, realtà formativa dedicata a corsi base e avanzati di AI e ChatGPT per professionisti e aziende.',

    'experience.ied.role': 'Docente — Social Media Marketing',
    'experience.ied.company': 'IED Istituto Europeo di Design — Roma',
    'experience.ied.period': '2022 — oggi',
    'experience.ied.description':
      'Insegno Social Media Marketing nella sede di Roma. In aula porto casi reali di go-to-market e l’uso strategico dei contenuti digitali per il branding.',

    'experience.blowhammer.role': 'Executive Board Member — Strategic PMO',
    'experience.blowhammer.company': 'Blowhammer',
    'experience.blowhammer.period': '2022 — 2024',
    'experience.blowhammer.description':
      'Entrato come Strategic PMO per definire priorità e governance dei progetti, sono poi passato in Executive Board contribuendo alla strategia di crescita del marchio streetwear. Sono tuttora investitore.',

    'experience.zero.role': 'Business Development',
    'experience.zero.company': 'ZERO — Digital Business Partner',
    'experience.zero.period': '2019 — 2022',
    'experience.zero.description':
      'Acquisizione e gestione di clienti enterprise, con definizione di strategie digitali e di crescita per progetti complessi.',

    'experience.cegeka.role': 'Business Consultant',
    'experience.cegeka.company': 'Cegeka Italia',
    'experience.cegeka.period': '2017 — 2018',
    'experience.cegeka.description':
      'Consulenza IT enterprise: progetti di trasformazione digitale e ottimizzazione dei processi per clienti corporate, con sede a Milano.',

    'education.kicker': 'Formazione',
    'education.title': 'Cosa ho studiato.',

    'education.master.title': 'Master in Marketing',
    'education.master.school': 'Seconda Università degli Studi di Napoli',
    'education.master.period': '2014 — 2016',
    'education.master.description':
      'Master di II livello focalizzato su marketing strategico, comportamento del consumatore e marketing digitale.',

    'education.sdaBocconi.title': 'MDA — Microsoft Dynamics Academy',
    'education.sdaBocconi.school': 'SDA Bocconi',
    'education.sdaBocconi.period': '2017',
    'education.sdaBocconi.description':
      'Programma intensivo su Microsoft Dynamics e IT administration & management per ambienti enterprise.',

    'education.erasmus.title': 'Marketing & Gestione marketing (Erasmus)',
    'education.erasmus.school': 'Instituto Politécnico do Cávado e do Ave — Portogallo',
    'education.erasmus.period': '2015 — 2016',
    'education.erasmus.description':
      'Periodo Erasmus dedicato a marketing internazionale e management delle relazioni B2B/B2C.',

    'education.bachelor.title': 'Laurea triennale in Economia Aziendale',
    'education.bachelor.school': 'Seconda Università degli Studi di Napoli',
    'education.bachelor.period': '2010 — 2014',
    'education.bachelor.description':
      'Indirizzo Management. Solide basi di economia, finanza, organizzazione aziendale e gestione operativa.',

    'boosha.kicker': 'L’azienda che guido',
    'boosha.title': 'Boosha — Potenzia la tua azienda con l’intelligenza artificiale.',
    'boosha.lede':
      'Boosha integra soluzioni AI nei processi aziendali per liberare tempo, ridurre costi e accelerare la crescita. Lo facciamo con quattro leve.',
    'boosha.pillars.agents.title': 'Agenti AI',
    'boosha.pillars.agents.body': 'Automazione di task ripetitivi, attivi 24/7, integrati con i sistemi che già usi.',
    'boosha.pillars.assistants.title': 'Assistenti virtuali',
    'boosha.pillars.assistants.body': 'Chatbot per il servizio clienti e per i team interni, addestrati sui tuoi documenti.',
    'boosha.pillars.consulting.title': 'Consulenza AI',
    'boosha.pillars.consulting.body': 'Analisi dei processi, fattibilità, scelta delle tecnologie, soluzioni su misura.',
    'boosha.pillars.training.title': 'Formazione',
    'boosha.pillars.training.body': 'Corsi pratici per portare le competenze AI dentro al team, non solo sulla carta.',
    'boosha.clients.label': 'Hanno scelto Boosha',
    'boosha.cta': 'Vai a boosha.it',

    'contact.kicker': 'Contatti',
    'contact.title': 'Parliamone.',
    'contact.body':
      'Se vuoi capire come l’AI può fare la differenza nella tua azienda, o se hai un’idea da esplorare, scrivimi. Rispondo personalmente.',
    'contact.email': 'mario@boosha.it',
    'contact.linkedin': 'LinkedIn',

    'footer.copyright': '© {year} Mario Di Girolamo. Tutti i diritti riservati.',
    'footer.builtWith': 'Costruito con Astro. Ospitato su Plesk.',

    'lang.switchTo': 'English',
    'lang.switchToHref': '/en/',
  },

  en: {
    'meta.title': 'Mario Di Girolamo — CEO & Cofounder of Boosha',
    'meta.description':
      'Mario Di Girolamo, CEO and cofounder of Boosha. I help Italian companies bring artificial intelligence into their everyday operations.',

    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.education': 'Education',
    'nav.boosha': 'Boosha',
    'nav.contact': 'Contact',
    'nav.skipLink': 'Skip to main content',

    'hero.eyebrow': 'CEO & Cofounder of Boosha',
    'hero.headline': 'Helping companies grow with artificial intelligence.',
    'hero.lede':
      'I’m Mario Di Girolamo. With my cofounder Giada Franceschini I started Boosha, where we bring AI into Italian companies — from training to implementation — in a concrete, safe and measurable way.',
    'hero.cta.boosha': 'Discover Boosha',
    'hero.cta.contact': 'Get in touch',
    'hero.portraitAlt': 'Portrait of Mario Di Girolamo',

    'about.kicker': 'About',
    'about.title': 'AI and leadership, in service of the business.',
    'about.p1':
      'I work at the intersection of technology and business. Since 2014 I’ve been founding and helping grow companies that put digital and AI at the centre — from my first software-development venture, Merge-is, to today’s AI cluster made of Boosha, Parla and Impara ChatGPT.',
    'about.p2':
      'My approach is pragmatic. I start from the process, not the technology: I look for friction, for time leaks, for places where an AI agent or a virtual assistant can make a difference. Then we build — with cross-functional teams that bring together engineering, design and strategy.',
    'about.p3':
      'I believe AI works in a company when people experience it as an ally, not as something imposed on them. That’s why I pair technical implementation with continuous training — including in the classroom, as a lecturer at IED.',
    'about.quote':
      '“Among all the experience that I had, I’ve learnt that only being humble you can improve yourself.”',
    'about.expertise.title': 'Areas of expertise',
    'about.expertise.ai': 'Artificial Intelligence applied to business',
    'about.expertise.leadership': 'Leadership and cross-functional team management',
    'about.expertise.strategy': 'Product strategy and go-to-market',
    'about.expertise.consulting': 'AI consulting for SMEs and enterprises',
    'about.languages.title': 'Languages',
    'about.languages.value': 'Italian (native) · English (Professional Working)',
    'about.location.title': 'Based in',
    'about.location.value': 'Caserta, Italy',

    'experience.kicker': 'Experience',
    'experience.title': 'The path.',

    'experience.boosha.role': 'CEO & Cofounder',
    'experience.boosha.company': 'Boosha AI',
    'experience.boosha.period': '2024 — present',
    'experience.boosha.description':
      'Cofounded with Giada Franceschini. We help companies bring AI into processes such as meetings, HR, document search, product development and management control. Among the clients who chose us: CNA, Save the Children, Coldiretti, Hera, Allianz, Coesiva.',

    'experience.parla.role': 'CMO & Cofounder — Cofounder',
    'experience.parla.company': 'Parla · Impara ChatGPT',
    'experience.parla.period': '2024 — present',
    'experience.parla.description':
      'Cofounder of Parla, an all-in-one platform that brings together leading language models for business, and of Impara ChatGPT, a training company offering basic and advanced AI/ChatGPT courses for professionals and organisations.',

    'experience.ied.role': 'Lecturer — Social Media Marketing',
    'experience.ied.company': 'IED Istituto Europeo di Design — Rome',
    'experience.ied.period': '2022 — present',
    'experience.ied.description':
      'I teach Social Media Marketing at the Rome campus. In class I bring real go-to-market case studies and the strategic use of digital content for branding.',

    'experience.blowhammer.role': 'Executive Board Member — Strategic PMO',
    'experience.blowhammer.company': 'Blowhammer',
    'experience.blowhammer.period': '2022 — 2024',
    'experience.blowhammer.description':
      'Joined as Strategic PMO to set project priorities and governance, then moved to the Executive Board contributing to growth strategy for the streetwear brand. Still an investor today.',

    'experience.zero.role': 'Business Development',
    'experience.zero.company': 'ZERO — Digital Business Partner',
    'experience.zero.period': '2019 — 2022',
    'experience.zero.description':
      'Acquisition and management of enterprise clients, defining digital and growth strategies for complex projects.',

    'experience.cegeka.role': 'Business Consultant',
    'experience.cegeka.company': 'Cegeka Italia',
    'experience.cegeka.period': '2017 — 2018',
    'experience.cegeka.description':
      'Enterprise IT consulting: digital transformation and process optimisation projects for corporate clients, based in Milan.',

    'education.kicker': 'Education',
    'education.title': 'Where I trained.',

    'education.master.title': 'Master’s degree in Marketing',
    'education.master.school': 'Seconda Università degli Studi di Napoli',
    'education.master.period': '2014 — 2016',
    'education.master.description':
      'Second-level master’s degree focused on strategic marketing, consumer behaviour and digital marketing.',

    'education.sdaBocconi.title': 'MDA — Microsoft Dynamics Academy',
    'education.sdaBocconi.school': 'SDA Bocconi',
    'education.sdaBocconi.period': '2017',
    'education.sdaBocconi.description':
      'Intensive programme on Microsoft Dynamics and IT administration & management for enterprise environments.',

    'education.erasmus.title': 'Marketing & marketing management (Erasmus)',
    'education.erasmus.school': 'Instituto Politécnico do Cávado e do Ave — Portugal',
    'education.erasmus.period': '2015 — 2016',
    'education.erasmus.description':
      'Erasmus exchange focused on international marketing and B2B/B2C relationship management.',

    'education.bachelor.title': 'Bachelor’s degree in Business Economics',
    'education.bachelor.school': 'Seconda Università degli Studi di Napoli',
    'education.bachelor.period': '2010 — 2014',
    'education.bachelor.description':
      'Management track. Solid foundations in economics, finance, organisational design and operations.',

    'boosha.kicker': 'The company I lead',
    'boosha.title': 'Boosha — Power your company with artificial intelligence.',
    'boosha.lede':
      'Boosha embeds AI solutions into business processes to free up time, reduce costs and accelerate growth. We do it with four levers.',
    'boosha.pillars.agents.title': 'AI Agents',
    'boosha.pillars.agents.body': 'Automating repetitive tasks, working 24/7, integrated with the systems you already use.',
    'boosha.pillars.assistants.title': 'Virtual assistants',
    'boosha.pillars.assistants.body': 'Chatbots for customer service and internal teams, trained on your own documents.',
    'boosha.pillars.consulting.title': 'AI Consulting',
    'boosha.pillars.consulting.body': 'Process analysis, feasibility, technology choices, tailored solutions.',
    'boosha.pillars.training.title': 'Training',
    'boosha.pillars.training.body': 'Hands-on courses that bring AI skills inside the team, not just on paper.',
    'boosha.clients.label': 'They chose Boosha',
    'boosha.cta': 'Visit boosha.it',

    'contact.kicker': 'Contact',
    'contact.title': 'Let’s talk.',
    'contact.body':
      'If you want to understand how AI can make a difference in your company — or if you have an idea worth exploring — drop me a line. I read and answer personally.',
    'contact.email': 'mario@boosha.it',
    'contact.linkedin': 'LinkedIn',

    'footer.copyright': '© {year} Mario Di Girolamo. All rights reserved.',
    'footer.builtWith': 'Built with Astro. Hosted on Plesk.',

    'lang.switchTo': 'Italiano',
    'lang.switchToHref': '/',
  },
} as const;

export type UIKey = keyof typeof ui['it'];
