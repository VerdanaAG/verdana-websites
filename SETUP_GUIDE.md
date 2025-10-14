# Verdana Websites - Setup Guide

Komplette Anleitung für das Management Ihrer Multi-Site Lead-Generation-Plattform.

---

## 📋 Inhaltsverzeichnis

1. [Übersicht](#übersicht)
2. [Repository-Struktur](#repository-struktur)
3. [Neue Landingpage erstellen](#neue-landingpage-erstellen)
4. [Website deployen](#website-deployen)
5. [Updates durchführen](#updates-durchführen)
6. [Formular konfigurieren](#formular-konfigurieren)
7. [Domain verbinden](#domain-verbinden)
8. [Content-Marketing-Workflow](#content-marketing-workflow)
9. [Troubleshooting](#troubleshooting)

---

## 🎯 Übersicht

Dieses Repository verwaltet alle Ihre Landingpages zentral. Jede Landingpage ist:
- ✅ Optimiert für Lead-Generierung
- ✅ SEO-freundlich
- ✅ Responsive (Mobile, Tablet, Desktop)
- ✅ Mit Formspree-Integration
- ✅ Auf Cloudflare Pages gehostet (kostenlos!)

**Aktueller Stand:**
- 1 Live-Landingpage: dachberater-schweiz.ch
- 19 weitere Domains bereit für Setup
- GitHub Repository: https://github.com/VerdanaAG/verdana-websites

---

## 📁 Repository-Struktur

```
verdana-websites/
├── landing-pages/
│   ├── _TEMPLATE/              # Template für neue Landingpages
│   │   ├── index.html
│   │   ├── styles.css
│   │   ├── script.js
│   │   └── images/
│   ├── dachberater-schweiz/    # Erste Live-Landingpage
│   │   ├── index.html
│   │   ├── styles.css
│   │   ├── script.js
│   │   ├── images/
│   │   └── README.md
│   └── [weitere-landingpages]/
├── blog/                        # Zukünftig: Blog-Content
├── deploy.sh                    # Deployment-Script
├── README.md
└── SETUP_GUIDE.md              # Diese Datei
```

---

## 🚀 Neue Landingpage erstellen

### Schritt 1: Template kopieren

```bash
cd /path/to/verdana-websites/landing-pages
cp -r _TEMPLATE neue-landingpage-name
cd neue-landingpage-name
```

### Schritt 2: Platzhalter ersetzen

Öffnen Sie `index.html` und ersetzen Sie alle `[PLATZHALTER]`:

**Meta-Tags:**
- `[TITEL]` - z.B. "Fassadensanierung Schweiz"
- `[UNTERTITEL]` - z.B. "Professionelle Fassadenrenovierung"
- `[BESCHREIBUNG]` - 150-160 Zeichen für Google
- `[KEYWORDS]` - Komma-getrennte Keywords

**Content:**
- `[HAUPTÜBERSCHRIFT]` - Hero-Headline
- `[VALUE PROPOSITION]` - Untertitel im Hero
- `[CALL-TO-ACTION TEXT]` - Button-Text, z.B. "Jetzt Offerte anfordern"
- `[VORTEIL 1-4 TITEL/BESCHREIBUNG]` - Ihre 4 Hauptvorteile
- `[SCHRITT 1-3 TITEL/BESCHREIBUNG]` - Ihr Prozess in 3 Schritten
- `[FORMULAR ÜBERSCHRIFT]` - z.B. "Fordern Sie jetzt Ihre Offerte an!"
- `[TRUST ELEMENT 1-3]` - z.B. "100% kostenlos & unverbindlich"
- `[SUBMIT BUTTON TEXT]` - z.B. "Ja, ich will meine kostenlose Offerte!"
- `[FIRMENNAME]` - Im Footer
- `[EMAIL]` - Ihre Kontakt-E-Mail
- `[TELEFON]` - Ihre Telefonnummer

**Formspree:**
- `[FORMSPREE_ID]` - Ihre Formspree Form-ID (siehe unten)

### Schritt 3: Bilder hinzufügen

Ersetzen Sie die Platzhalter-Bilder:
- `images/hero-bg.jpg` - Hero-Hintergrundbild (1920x1080px empfohlen)
- Weitere Bilder nach Bedarf

### Schritt 4: README erstellen

```bash
cat > README.md << 'EOF'
# [Landingpage-Name]

**Domain:** [domain.ch]
**Ziel:** Lead-Generierung für [Dienstleistung]
**Zielgruppe:** [Beschreibung]

## Deployment

```bash
cd /path/to/verdana-websites
./deploy.sh [landingpage-name]
```

## Formular

E-Mails gehen an: [email@domain.ch]
Formspree Form ID: [form-id]
EOF
```

---

## 🚀 Website deployen

### Methode 1: Deployment-Script (empfohlen)

```bash
cd /path/to/verdana-websites
./deploy.sh neue-landingpage-name
```

Das Script:
1. Validiert, dass das Projekt existiert
2. Deployed zu Cloudflare Pages
3. Zeigt die Live-URL an

### Methode 2: Manuell mit Wrangler

```bash
cd landing-pages/neue-landingpage-name
export CLOUDFLARE_API_TOKEN="[IHR_TOKEN]"
export CLOUDFLARE_ACCOUNT_ID="ca7c3e3a35b3107c64ded0281eefb682"
wrangler pages deploy . --project-name=neue-landingpage-name --branch=main
```

### Methode 3: Git Push (wenn GitHub Actions konfiguriert)

```bash
git add .
git commit -m "Add neue-landingpage-name"
git push
```

---

## 🔄 Updates durchführen

### Kleine Änderungen (Text, Telefonnummer, etc.)

1. Datei bearbeiten:
```bash
cd landing-pages/dachberater-schweiz
nano index.html  # oder Ihr bevorzugter Editor
```

2. Deployen:
```bash
cd ../..
./deploy.sh dachberater-schweiz
```

3. Optional: Zu Git committen:
```bash
git add .
git commit -m "Update phone number"
git push
```

### Grössere Änderungen (Design, neue Sektionen)

1. Lokal testen (optional):
```bash
cd landing-pages/dachberater-schweiz
python3 -m http.server 8000
# Öffnen Sie http://localhost:8000
```

2. Änderungen vornehmen

3. Deployen und committen wie oben

---

## 📧 Formular konfigurieren

### Neues Formspree-Formular erstellen

1. Gehen Sie zu https://formspree.io
2. Loggen Sie sich ein (info@verdana-ag.ch / Verdana2025!)
3. Klicken Sie auf "+" → "New Form"
4. **Form Name:** [Landingpage-Name] - Kontaktformular
5. **Email:** [ziel-email@domain.ch]
6. Klicken Sie auf "Create Form"
7. Kopieren Sie die **Form ID** (z.B. `xwprakga`)

### Form ID in Website eintragen

Öffnen Sie `index.html` und ersetzen Sie:

```html
<form action="https://formspree.io/f/[FORMSPREE_ID]" method="POST">
```

mit:

```html
<form action="https://formspree.io/f/xwprakga" method="POST">
```

### Formular testen

1. Website deployen
2. Formular ausfüllen und absenden
3. Prüfen Sie Ihr E-Mail-Postfach
4. Beim ersten Submit: Bestätigen Sie die E-Mail von Formspree

---

## 🌐 Domain verbinden

### Option A: DNS-Only (empfohlen, schnell)

**Bei Hostpoint:**

1. Loggen Sie sich ins Hostpoint Control Panel ein
2. Gehen Sie zu "Domains" → Ihre Domain auswählen
3. Klicken Sie auf "DNS-Einstellungen"
4. Ändern Sie die **Nameserver** auf:
   - `bjorn.ns.cloudflare.com`
   - `jean.ns.cloudflare.com`
5. Speichern Sie die Änderungen

**In Cloudflare:**

1. Gehen Sie zu https://dash.cloudflare.com
2. Klicken Sie auf Ihre Domain
3. Gehen Sie zu "DNS" → "Einträge"
4. Der CNAME-Eintrag sollte automatisch erstellt werden:
   - Typ: CNAME
   - Name: @ (oder Ihre Domain)
   - Ziel: [landingpage-name].pages.dev
   - Proxy: Ein (orange Cloud)

**Warten:** 5-60 Minuten für DNS-Propagation

### Option B: Domain transferieren (optional, langfristig günstiger)

Siehe: `/home/ubuntu/hostpoint-to-cloudflare-transfer-guide.md`

---

## 📝 Content-Marketing-Workflow

### Blog-Post erstellen und verteilen

**Zukünftiger Workflow (noch nicht implementiert):**

1. **Blog-Post schreiben** auf verdana-ag.ch
2. **Automatisch verteilen** zu:
   - LinkedIn
   - Facebook
   - Instagram
   - Twitter/X
3. **Snippet auf Landingpages** anzeigen
4. **SEO-Boost** durch frischen Content

**Aktuell:**
- Manuell Blog-Posts erstellen
- Manuell auf Social Media teilen
- Später: Automatisierung mit GitHub Actions + APIs

---

## 🛠️ Troubleshooting

### Website zeigt "Deployment Not Found"

**Problem:** Deployment wurde nicht als Production markiert

**Lösung:**
```bash
./deploy.sh [landingpage-name]
```

### Formular sendet keine E-Mails

**Problem 1:** Formspree-ID fehlt oder falsch

**Lösung:** Prüfen Sie die Form Action URL in `index.html`

**Problem 2:** Formspree-E-Mail nicht bestätigt

**Lösung:** Beim ersten Submit erhalten Sie eine Bestätigungs-E-Mail von Formspree. Klicken Sie auf den Link.

### Domain funktioniert nicht

**Problem:** DNS-Propagation noch nicht abgeschlossen

**Lösung:** Warten Sie 5-60 Minuten. Prüfen Sie mit:
```bash
dig [ihre-domain.ch]
```

### API Token funktioniert nicht

**Problem:** Token hat nicht alle Berechtigungen

**Lösung:** Erstellen Sie einen neuen Token mit:
- Account → Cloudflare Pages → Edit
- User → User Details → Read
- Account → Account Settings → Read

---

## 📊 Kosten-Übersicht

| Service | Kosten |
|---------|--------|
| Cloudflare Pages (Hosting) | **CHF 0.00/Monat** |
| Cloudflare DNS | **CHF 0.00/Monat** |
| GitHub (Repository) | **CHF 0.00/Monat** |
| Formspree (bis 50 Submissions/Monat) | **CHF 0.00/Monat** |
| Domain-Renewals (.ch, 20 Domains) | **CHF 300-400/Jahr** |
| **Total** | **CHF 25-33/Monat** |

**Ersparnis gegenüber traditionellem Hosting:** CHF 500+/Jahr

---

## 🎯 Nächste Schritte

### Kurzfristig (diese Woche):
1. ✅ Dachberater-Schweiz live
2. ⏳ DNS-Propagation abwarten
3. ⏳ Formular testen
4. ⏳ Zweite Landingpage erstellen

### Mittelfristig (nächste 2 Wochen):
1. Alle 20 Landingpages erstellen
2. Alle Domains verbinden
3. SEO-Optimierung (Meta-Tags, Keywords)
4. Google Analytics einrichten

### Langfristig (nächste 3 Monate):
1. Blog auf verdana-ag.ch starten
2. Content-Marketing-Automatisierung
3. Social Media Integration
4. A/B-Testing für Conversion-Optimierung

---

## 📞 Support

Bei Fragen oder Problemen:
- GitHub Issues: https://github.com/VerdanaAG/verdana-websites/issues
- E-Mail: info@verdana-ag.ch
- Dokumentation: Dieses Dokument

---

**Erstellt:** Oktober 2025  
**Letzte Aktualisierung:** Oktober 2025  
**Version:** 1.0

