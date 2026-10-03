# MrNoneCrypto

Sito statico, semplice, veloce e responsive per MrNoneCrypto. Nessun framework, nessuna build: HTML + CSS + JS puri, pronto per **GitHub Pages**.

## Struttura del progetto

```
MrNoneCrypto/
│
├── index.html
├── guida-futures.html        → guida Futures/leva, si apre come pagina separata (no download)
├── regole-operative.html     → regole di gestione del rischio, pagina separata (no download)
├── style.css
├── script.js
│
├── assets/
│   ├── images/
│   │   ├── poster.jpg
│   │   ├── metamask/          → screenshot guida MetaMask (mm-01.jpg … mm-11.jpg)
│   │   └── futures/           → screenshot guida Futures (fu-01.jpg … fu-11.jpg)
│   ├── icons/                 → vuota, pronta per eventuali icone
│   ├── logo/                  → vuota, pronta per un logo in formato immagine
│   └── video/
│       └── strategia.mp4
│
└── README.md
```

## Pubblicare su GitHub Pages

1. Crea un repository su GitHub (es. `MrNoneCrypto`) e carica tutto il contenuto di questa cartella nella root del repository.
2. Vai su **Settings → Pages**.
3. In **Build and deployment**, seleziona come source il branch `main` e la cartella `/ (root)`.
4. Salva: dopo qualche minuto il sito sarà online all'indirizzo `https://TUO-USERNAME.github.io/MrNoneCrypto/`.

Tutti i percorsi nel progetto sono **relativi**, quindi funzionano correttamente sia in locale sia su GitHub Pages, senza bisogno di modifiche.

## Cosa personalizzare prima della pubblicazione

Cerca nel codice il commento `TODO` per trovare rapidamente i punti da completare:

- **Video della strategia** (`assets/video/strategia.mp4`): al momento è presente il video già usato in precedenza. Se vuoi sostituirlo, carica il nuovo file con lo stesso nome (`strategia.mp4`) dentro `assets/video/`, oppure aggiorna il percorso nel tag `<source>` in `index.html`.
- **Guida MetaMask**: le immagini in `assets/images/metamask/` sono gli screenshot già presenti nel progetto originale. I testi descrittivi dei passaggi sono stati scritti sulla base di queste immagini e delle procedure standard di MetaMask: se mi fornisci il PDF originale con il testo esatto, posso sostituire le didascalie con il contenuto preciso del documento.
- **Guida Futures/leva** (`guida-futures.html`): si apre come pagina separata (link "Operare con la leva" nella sezione Guide), non è scaricabile come PDF. Contiene il testo già estratto dal progetto originale più gli screenshot in `assets/images/futures/`.
- **Regole di gestione del rischio** (`regole-operative.html`): pagina separata raggiungibile dal pulsante sotto il video e dalla sezione Guide. Contiene le regole prima legate al video (rischio per trade, stop loss/take profit, disciplina).
- **Link già inseriti e verificati**: Partner 1 (BingX), Partner 2 (MEXC) e il pulsante Telegram puntano ai link reali già in uso sul sito precedente. Il terzo pulsante partner è stato rimosso su richiesta.

## Note tecniche

- Nessuna dipendenza esterna: niente font, librerie o script di terze parti da caricare.
- Le immagini della guida usano `loading="lazy"` per non rallentare il caricamento iniziale.
- Il video usa `preload="metadata"` e un poster, per evitare di scaricare l'intero file finché l'utente non lo avvia.
- Le animazioni (loader, hover, apertura FAQ) sono realizzate solo in CSS/JS leggero e rispettano `prefers-reduced-motion`.
- Le FAQ usano l'elemento nativo `<details>/<summary>`: espandibili senza JavaScript aggiuntivo.

## Disclaimer

I contenuti del sito sono forniti a scopo educativo e informativo e non costituiscono consulenza finanziaria. Alcuni link presenti sono link di affiliazione.
