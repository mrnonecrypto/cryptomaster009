# MrNoneCrypto

Sito statico (HTML + CSS + JS puri, nessuna build) pronto per **GitHub Pages**.

## Struttura

```
MrNoneCrypto/
├── index.html      home con cerchi rotanti + tutte le pagine (navigazione con #)
├── style.css
├── script.js
├── .nojekyll
└── assets/
    ├── images/ (poster.jpg, logo-mrn.jpg, metamask/, futures/)
    └── video/strategia.mp4
```

Le pagine (Guida MetaMask, Telegram, FAQ, Strategia, Futures, Regole, Invia UID, VIP) sono sezioni di `index.html` e si aprono con indirizzi tipo `index.html#faq`.

## Pubblicare su GitHub Pages

1. Crea un repository su GitHub (es. `MrNoneCrypto`) e carica il contenuto di questa cartella nella root, compreso il file nascosto `.nojekyll`.
2. Vai su **Settings → Pages**.
3. In **Build and deployment** scegli **Deploy from a branch**, branch `main`, cartella `/ (root)`.
4. Salva: dopo qualche minuto il sito sarà su `https://TUO-USERNAME.github.io/MrNoneCrypto/`.

Tutti i percorsi sono relativi.

## Cosa modificare

- Link referral, Telegram e contatto diretto (@MrNonexc): cerca `bingx.com`, `greentreeone.com`, `t.me` in `index.html`.
- Video: sostituisci `assets/video/strategia.mp4` mantenendo il nome.
- Domande FAQ: sono blocchi `<details>` in `index.html`.

## Disclaimer

Contenuti a scopo educativo e informativo, non consulenza finanziaria. Alcuni link sono di affiliazione.
