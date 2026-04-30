# personal-website-mdg

Sito personale di **Mario Di Girolamo** — [mariodigirolamo.it](https://mariodigirolamo.it).

Sorgenti del sito personale, costruito con Astro e Tailwind v4, con contenuti bilingue (IT/EN). Il deploy avviene tramite GitHub Actions verso un branch `deploy`, che Plesk pulla per pubblicare il sito.

---

## Stack

- **[Astro 6](https://astro.build/)** — site generator statico
- **[Tailwind CSS v4](https://tailwindcss.com/)** — styling utility-first
- **i18n nativo Astro** — italiano (default) e inglese
- **GitHub Actions** — build & publish automatici
- **Plesk Git** — pubblicazione del branch `deploy`

---

## Sviluppo locale

Requisiti: **Node.js ≥ 22.12** e npm.

```bash
git clone https://github.com/mariodg90/personal-website-mdg.git
cd personal-website-mdg
npm install
npm run dev
```

Il sito è disponibile su `http://localhost:4321`.

### Comandi principali

| Comando            | Cosa fa                                          |
| ------------------ | ------------------------------------------------ |
| `npm run dev`      | Avvia il dev server con hot reload               |
| `npm run build`    | Genera la versione di produzione in `dist/`      |
| `npm run preview`  | Serve in locale la versione buildata             |

---

## Struttura del progetto

```
src/
├── assets/              # foto profilo (ottimizzata da Astro Image)
├── components/          # Hero, About, Experience, Education, Boosha, Contact, Header, Footer
├── i18n/
│   ├── ui.ts            # tutte le stringhe IT/EN del sito
│   └── utils.ts         # helper per traduzioni
├── layouts/
│   └── BaseLayout.astro # layout base con SEO, font, hreflang
├── pages/
│   ├── index.astro      # home in italiano (/)
│   └── en/index.astro   # home in inglese (/en/)
└── styles/
    └── global.css       # palette, font, utilities Tailwind
```

### Modificare i contenuti

Tutti i testi del sito vivono in `src/i18n/ui.ts`. Modifica lì sia la versione italiana che quella inglese — niente HTML, solo stringhe.

Per esempio, per cambiare l'headline dell'hero in italiano cerca la chiave `hero.headline` dentro `ui.it`.

### Sostituire la foto profilo

Sostituisci `src/assets/mario-portrait.jpg`. Astro genera automaticamente le varianti WebP responsive al prossimo `npm run build`.

---

## Deploy su Plesk

Il flusso a regime è automatico: ogni push su `main` triggera GitHub Actions, che builda il sito e pubblica i file statici sul branch `deploy`. Plesk poi pulla quel branch.

### Setup iniziale (una volta sola)

#### 0. Attiva il workflow GitHub Actions

Il workflow è già scritto e pronto in `_pending-workflows/deploy.yml`. Va spostato in `.github/workflows/deploy.yml` per essere riconosciuto da GitHub Actions. Due modi per farlo:

**Modo veloce (via GitHub web)** — non richiede di toccare nulla in locale:

1. Vai su `https://github.com/mariodg90/personal-website-mdg`.
2. Clicca **Add file** → **Create new file**.
3. Nel campo del nome scrivi: `.github/workflows/deploy.yml` (i caratteri `/` creano automaticamente le sottocartelle).
4. Apri `_pending-workflows/deploy.yml` dal repo, copia tutto il contenuto e incollalo nel nuovo file.
5. Commit con messaggio "Enable deploy workflow" direttamente sul branch `main`.

**Modo locale** — richiede di rinnovare lo scope del token gh:

```bash
gh auth refresh -s workflow
mkdir -p .github/workflows
git mv _pending-workflows/deploy.yml .github/workflows/deploy.yml
rmdir _pending-workflows
git commit -m "Enable deploy workflow"
git push
```

Una volta attivato, puoi cancellare la cartella `_pending-workflows/` (o lasciarla, è ignorata da GitHub Actions).

#### 1. Verifica che il workflow GitHub Actions sia attivo

Dopo il primo push su `main`, vai su `https://github.com/mariodg90/personal-website-mdg/actions` e controlla che il workflow **"Build & publish to deploy branch"** sia partito e abbia creato il branch `deploy`.

Se non parte automaticamente, vai sul tab **Actions** e clicca **Run workflow** manualmente sulla branch `main`.

Quando il workflow termina con successo, il branch `deploy` esisterà su GitHub e conterrà solo i file statici buildati (HTML, CSS, JS, immagini, sitemap).

#### 2. Configura Plesk per pullare dal branch `deploy`

1. Accedi al pannello Plesk e seleziona il dominio `mariodigirolamo.it`.
2. Apri **Git** dalla dashboard del dominio (sezione "Sviluppo di siti web").
3. Clicca **Aggiungi repository**.
4. Compila come segue:
   - **URL del repository remoto**: `https://github.com/mariodg90/personal-website-mdg.git`
   - **Modalità di Hosting**: *Repository locale del Server*
   - **Tipo di repository**: *Recupero del codice da un repository remoto* (pull mode)
   - **Percorso server**: `/httpdocs` (oppure la document root configurata)
   - **Branch del repository remoto**: `deploy`
   - **Chiave di distribuzione SSH**: solo se il repo fosse privato. Per un repo pubblico non serve.
5. Salva. Plesk eseguirà il primo `git clone` e copierà i file in `httpdocs/`.

#### 3. Configura il webhook GitHub → Plesk (deploy automatico)

Plesk genera un URL webhook. Lo trovi nella scheda Git del dominio, sotto la voce **Esegui distribuzione** → **Distribuzione automatica con webhook**. Copia quell'URL (è qualcosa tipo `https://<tuo-dominio>.plesk.page/git/...`).

Poi su GitHub:

1. Vai su `https://github.com/mariodg90/personal-website-mdg/settings/hooks`.
2. Clicca **Add webhook**.
3. **Payload URL**: incolla l'URL fornito da Plesk.
4. **Content type**: `application/json`.
5. **Which events?**: *Just the push event*.
6. Salva.

Da questo momento ogni push su `main` farà partire la catena:
```
push su main  →  GitHub Actions  →  branch deploy aggiornato  →  webhook  →  Plesk pull  →  sito online
```

#### 4. Verifica

Fai una piccola modifica (es. cambia un testo in `src/i18n/ui.ts`), commit e push su `main`. Dopo ~1–2 minuti il sito dovrebbe essere aggiornato su `mariodigirolamo.it`.

---

## Aggiornare i contenuti

Workflow tipico:

```bash
# 1. Modifica i testi
$EDITOR src/i18n/ui.ts

# 2. Verifica in locale
npm run dev

# 3. Quando sei contento, build di prova
npm run build

# 4. Commit e push
git add -A
git commit -m "Update hero copy"
git push
```

GitHub Actions farà il resto.

---

## Lingue

- Italiano (default): `https://mariodigirolamo.it/`
- English: `https://mariodigirolamo.it/en/`

Il selettore in alto a destra cambia lingua. Le pagine sono dichiarate con `<link rel="alternate" hreflang>` per il SEO multilingua.

---

## Note

- L'email pubblica è `mario@boosha.it` — modificala dentro `src/i18n/ui.ts` (chiave `contact.email`) se cambi indirizzo.
- Le sezioni **Esperienza** ed **Formazione** contengono placeholder in attesa di essere completati con le esperienze reali.
- La foto profilo originale è `src/assets/mario-portrait.jpg`. Astro la converte automaticamente in WebP responsive (5 varianti, ~13 KB la più piccola).
