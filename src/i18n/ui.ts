export const languages = {
  it: 'IT',
  en: 'EN',
} as const;

export const defaultLang = 'it' as const;

export type Lang = keyof typeof languages;

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
    'hero.headline': 'Costruisco aziende che usano l’intelligenza artificiale per crescere meglio.',
    'hero.lede':
      'Sono Mario Di Girolamo. Insieme alla mia socia Giada Franceschini ho fondato Boosha, dove aiutiamo realtà italiane — dalle PMI alle grandi organizzazioni — a integrare l’AI nei processi quotidiani in modo concreto, sicuro e misurabile.',
    'hero.cta.boosha': 'Scopri Boosha',
    'hero.cta.contact': 'Scrivimi',
    'hero.portraitAlt': 'Ritratto di Mario Di Girolamo',

    'about.kicker': 'Chi sono',
    'about.title': 'AI e leadership, al servizio dell’impresa.',
    'about.p1':
      'Lavoro all’incrocio tra tecnologia e business. Mi occupo di tradurre le possibilità dell’intelligenza artificiale in soluzioni che generano valore reale: meno tempo speso in attività ripetitive, più decisioni basate sui dati, processi che scalano senza appesantire l’organizzazione.',
    'about.p2':
      'Il mio approccio è pragmatico. Parto sempre dal processo, non dalla tecnologia: capisco dove c’è frizione, dove si perde tempo, dove un agente AI o un assistente virtuale può fare la differenza. Poi costruisco — con un team che unisce competenze tecniche, design e strategia.',
    'about.p3':
      'Credo che l’AI in azienda funzioni quando le persone la sentono come un alleato, non come un’imposizione. Per questo Boosha lavora tanto sulla formazione quanto sulla tecnologia.',
    'about.expertise.title': 'Aree di expertise',
    'about.expertise.ai': 'Intelligenza Artificiale applicata al business',
    'about.expertise.leadership': 'Leadership e gestione di team multidisciplinari',
    'about.expertise.strategy': 'Strategia di prodotto e go-to-market',
    'about.expertise.consulting': 'Consulenza AI per PMI e grandi aziende',

    'experience.kicker': 'Esperienza',
    'experience.title': 'Il percorso.',
    'experience.boosha.role': 'CEO & Cofondatore',
    'experience.boosha.company': 'Boosha',
    'experience.boosha.period': 'Oggi',
    'experience.boosha.description':
      'Cofondata insieme a Giada Franceschini. Aiutiamo le aziende a integrare soluzioni AI in processi come riunioni, HR, ricerca documentale, sviluppo prodotti e controllo di gestione. Tra i clienti che ci hanno scelto: CNA, Save the Children, Coldiretti, Hera, Allianz, Coesiva.',
    'experience.placeholderTitle': '[Esperienza precedente]',
    'experience.placeholderRole': 'Ruolo da inserire',
    'experience.placeholderCompany': 'Azienda da inserire',
    'experience.placeholderPeriod': 'Anno – Anno',
    'experience.placeholderDescription':
      'Breve descrizione di cosa hai fatto, di cosa ti occupavi e dell’impatto che hai generato. (Compila questa sezione con le esperienze più rilevanti — almeno due o tre, se vuoi.)',

    'education.kicker': 'Formazione',
    'education.title': 'Cosa ho studiato.',
    'education.placeholderTitle': '[Titolo / Diploma]',
    'education.placeholderSchool': 'Università o istituto',
    'education.placeholderPeriod': 'Anno',
    'education.placeholderDescription':
      'Aggiungi qui i titoli di studio principali, certificazioni rilevanti, programmi executive, ecc.',

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
    'hero.headline': 'I build companies that use artificial intelligence to grow better.',
    'hero.lede':
      'I’m Mario Di Girolamo. With my cofounder Giada Franceschini I started Boosha, where we help Italian organisations — from SMEs to large enterprises — embed AI into their daily operations in a concrete, safe and measurable way.',
    'hero.cta.boosha': 'Discover Boosha',
    'hero.cta.contact': 'Get in touch',
    'hero.portraitAlt': 'Portrait of Mario Di Girolamo',

    'about.kicker': 'About',
    'about.title': 'AI and leadership, in service of the business.',
    'about.p1':
      'I work at the intersection of technology and business. My job is turning AI possibilities into solutions that generate real value: less time spent on repetitive work, more decisions backed by data, processes that scale without weighing the organisation down.',
    'about.p2':
      'My approach is pragmatic. I start from the process, not the technology: I look for friction, for time leaks, for places where an AI agent or a virtual assistant can make a difference. Then we build — with a team that brings together engineering, design and strategy.',
    'about.p3':
      'I believe AI works in a company when people experience it as an ally, not as something imposed on them. That’s why at Boosha we invest as much in training as we do in technology.',
    'about.expertise.title': 'Areas of expertise',
    'about.expertise.ai': 'Artificial Intelligence applied to business',
    'about.expertise.leadership': 'Leadership and cross-functional team management',
    'about.expertise.strategy': 'Product strategy and go-to-market',
    'about.expertise.consulting': 'AI consulting for SMEs and enterprises',

    'experience.kicker': 'Experience',
    'experience.title': 'The path.',
    'experience.boosha.role': 'CEO & Cofounder',
    'experience.boosha.company': 'Boosha',
    'experience.boosha.period': 'Today',
    'experience.boosha.description':
      'Cofounded with Giada Franceschini. We help companies bring AI into processes such as meetings, HR, document search, product development and management control. Among the clients who chose us: CNA, Save the Children, Coldiretti, Hera, Allianz, Coesiva.',
    'experience.placeholderTitle': '[Previous experience]',
    'experience.placeholderRole': 'Role to be added',
    'experience.placeholderCompany': 'Company to be added',
    'experience.placeholderPeriod': 'Year – Year',
    'experience.placeholderDescription':
      'Brief description of what you did, what you focused on and the impact you generated. (Fill this section with two or three relevant experiences.)',

    'education.kicker': 'Education',
    'education.title': 'Where I trained.',
    'education.placeholderTitle': '[Degree / Diploma]',
    'education.placeholderSchool': 'University or institute',
    'education.placeholderPeriod': 'Year',
    'education.placeholderDescription':
      'Add your main qualifications, relevant certifications, executive programmes, etc.',

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
