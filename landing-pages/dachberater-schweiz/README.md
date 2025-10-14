# Dachberater Schweiz - Landingpage

Eine professionelle, conversion-optimierte Landingpage für Dachsanierungen in der Schweiz.

## 🎯 Projektziel

Lead-Generierung für Dachsanierungen durch eine moderne, vertrauenswürdige Landingpage, die Eigenheimbesitzer und KMU anspricht.

## 🎨 Design-Konzept: "Der Bergführer"

Das Design verbindet Schweizer Präzision mit alpiner Natur:

- **Farbpalette:**
  - Anthrazit (#2C3E50) - Professionalität und Vertrauen
  - Orange (#E67E22) - Energie und Call-to-Action
  - Helles Grau (#ECF0F1) - Sauberkeit und Raum
  - Weiss (#FFFFFF) - Klarheit

- **Typografie:**
  - Poppins (Überschriften) - Modern und kraftvoll
  - Inter (Fliesstext) - Lesbar und professionell

## 📋 Seitenstruktur

### 1. Hero Section
- Vollbild-Hintergrund mit Schweizer Alpen-Chalet
- Klare Hauptbotschaft: "Professionell, günstig und sorgenfrei"
- Prominenter CTA-Button
- Parallax-Effekt beim Scrollen
- Animierter Scroll-Indikator

### 2. Vorteile-Sektion
Vier Hauptvorteile mit Icons:
- ✓ Geprüfte Fachbetriebe
- ✓ Beste Preise vergleichen
- ✓ Umfassende Beratung
- ✓ Für Eigenheime & KMU

### 3. Prozess-Sektion
3-Schritte-Darstellung:
1. Anfrage starten (2 Minuten)
2. Beratung & Offerte erhalten
3. Sanierung geniessen

### 4. Kontaktformular
Vollständiges Lead-Capture-Formular mit:
- Vorname & Nachname
- E-Mail
- Telefon
- Strasse & Hausnummer
- PLZ & Ort
- Art des Gebäudes
- Optionale Beschreibung

**Formular-Integration:** Formspree (https://formspree.io)

### 5. Footer
- Kontaktinformationen
- Rechtliche Links (Impressum, Datenschutz, AGB)
- Copyright-Hinweis

## 🚀 Technische Features

### Responsive Design
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

### Animationen & Interaktionen
- Smooth Scrolling zu Ankern
- Fade-in Animationen beim Scrollen
- Hover-Effekte auf Cards und Buttons
- Parallax-Effekt im Hero-Bereich
- Pulsierender CTA-Button

### Performance
- Optimierte Bilder
- Minimales JavaScript
- Sauberer, semantischer HTML-Code
- CSS-Variablen für einfache Anpassungen

### SEO
- Semantisches HTML5
- Meta-Tags (Title, Description, Keywords)
- Alt-Texte für Bilder
- Strukturierte Überschriften (H1-H4)

## 📁 Dateistruktur

```
dachberater-website/
├── index.html          # Hauptseite
├── styles.css          # Alle Styles
├── script.js           # JavaScript-Funktionalität
├── images/
│   ├── hero-bg.jpg     # Hero-Hintergrundbild
│   └── modern-chalet.jpg # Zusätzliches Bild
└── README.md           # Diese Datei
```

## 🔧 Anpassungen & Wartung

### Farben ändern
Bearbeiten Sie die CSS-Variablen in `styles.css`:
```css
:root {
    --anthracite: #2C3E50;
    --orange: #E67E22;
    --light-grey: #ECF0F1;
    --white: #FFFFFF;
}
```

### Texte ändern
Alle Texte befinden sich in `index.html` und können direkt bearbeitet werden.

### Formular-Ziel ändern
Ändern Sie das `action`-Attribut im `<form>`-Tag in `index.html`:
```html
<form action="IHRE-FORMSPREE-URL" method="POST">
```

### Bilder ersetzen
Ersetzen Sie die Dateien im `images/`-Ordner oder passen Sie die Pfade in `index.html` und `styles.css` an.

## 📧 Formular-Einrichtung

Das Formular verwendet Formspree für die E-Mail-Weiterleitung.

**Aktuelle Konfiguration:**
- Formspree-Endpunkt: `https://formspree.io/f/xyzgkjpq` (Platzhalter)

**So richten Sie Ihr eigenes Formular ein:**
1. Gehen Sie zu [formspree.io](https://formspree.io)
2. Erstellen Sie ein kostenloses Konto
3. Erstellen Sie ein neues Formular
4. Kopieren Sie den Formular-Endpunkt
5. Ersetzen Sie die URL im `action`-Attribut in `index.html`

## 🌐 Deployment

### Option 1: Manus Deployment (aktuell)
Die Website ist über Manus deployed und öffentlich zugänglich.

### Option 2: Eigenes Hosting
Laden Sie alle Dateien auf Ihren Webserver hoch. Stellen Sie sicher, dass:
- `index.html` im Root-Verzeichnis liegt
- Alle Pfade zu CSS, JS und Bildern korrekt sind
- Der Server HTTPS unterstützt (empfohlen)

### Option 3: Netlify / Vercel
1. Erstellen Sie ein Git-Repository
2. Verbinden Sie es mit Netlify oder Vercel
3. Deploy erfolgt automatisch bei jedem Push

## 📊 Conversion-Optimierung

Die Seite ist für maximale Conversion optimiert:

✓ **Klare Value Proposition** in der Hero Section
✓ **Trust-Elemente** (geprüfte Betriebe, 24h Antwortzeit)
✓ **Einfacher 3-Schritte-Prozess** reduziert Komplexität
✓ **Prominentes Formular** mit minimalen Feldern
✓ **Social Proof** durch Vertrauensindikatoren
✓ **Mobile-First Design** für alle Geräte
✓ **Schnelle Ladezeiten** durch optimierte Assets

## 🔒 Datenschutz

Denken Sie daran, folgende Seiten zu erstellen:
- [ ] Impressum
- [ ] Datenschutzerklärung
- [ ] AGB

Diese sind aktuell als Platzhalter-Links im Footer vorhanden.

## 📈 Nächste Schritte

1. **Domain verbinden:** Verbinden Sie www.dachberater-schweiz.ch mit dem Deployment
2. **Formular konfigurieren:** Richten Sie Formspree mit Ihrer echten E-Mail ein
3. **Rechtliches:** Erstellen Sie Impressum, Datenschutz und AGB
4. **Analytics:** Integrieren Sie Google Analytics oder eine Alternative
5. **Testing:** Testen Sie das Formular und alle Links
6. **SEO:** Reichen Sie die Sitemap bei Google Search Console ein

## 🎯 Zielgruppe

- **Primär:** Eigenheimbesitzer in der Schweiz mit Sanierungsbedarf
- **Sekundär:** KMU mit Gewerbeimmobilien
- **Alter:** 35-65 Jahre
- **Bedürfnis:** Vertrauenswürdige, transparente Offerte für Dachsanierung

## 📞 Support

Bei Fragen oder Anpassungswünschen wenden Sie sich an Ihren Entwickler oder nutzen Sie die Manus-Plattform für weitere Unterstützung.

---

**Erstellt mit:** HTML5, CSS3, Vanilla JavaScript
**Erstellt am:** 14. Oktober 2024
**Version:** 1.0

