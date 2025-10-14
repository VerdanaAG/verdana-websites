# Verdana AG - Multi-Site Project

Professional multi-site repository for lead generation landing pages and content marketing.

## 🏗️ Project Structure

```
verdana-websites/
├── landing-pages/          # All landing pages
│   ├── dachberater-schweiz/
│   ├── domain-2/
│   └── domain-3/
├── shared/                 # Shared resources
│   ├── components/         # Reusable components
│   └── styles/            # Shared stylesheets
├── scripts/               # Automation scripts
│   ├── deploy.sh
│   └── sync-content.js
└── README.md
```

## 🚀 Deployment

Each landing page is automatically deployed to Cloudflare Pages via GitHub Actions.

### Automatic Deployment Flow

```
Git Push → GitHub → Cloudflare Pages → Live Website
```

- **Branch:** `main` → Production deployment
- **Other branches:** Preview deployments

## 📋 Landing Pages

| Domain | Directory | Status | URL |
|--------|-----------|--------|-----|
| dachberater-schweiz.ch | `landing-pages/dachberater-schweiz` | ✅ Active | https://dachberater-schweiz.ch |
| ... | ... | ... | ... |

## 🛠️ Development

### Local Development

```bash
# Navigate to a landing page
cd landing-pages/dachberater-schweiz

# Start local server
python3 -m http.server 8000

# Open browser
open http://localhost:8000
```

### Creating a New Landing Page

```bash
# Copy template
cp -r landing-pages/dachberater-schweiz landing-pages/new-domain

# Edit content
cd landing-pages/new-domain
# Modify index.html, styles.css, etc.

# Commit and push
git add .
git commit -m "Add new landing page: new-domain"
git push
```

## 📝 Content Management

### Blog Posts (Future)

Blog posts will be stored in `main-site/content/blog/` as Markdown files and automatically:
- Published to verdana-ag.ch
- Syndicated to relevant landing pages
- Posted to social media channels

## 🔧 Automation

### GitHub Actions Workflows

- **Deploy Landing Pages:** Automatic deployment on push
- **Content Sync:** Distribute blog content to landing pages
- **Social Media:** Auto-post to LinkedIn, Facebook, Instagram

## 📊 Analytics

- **Cloudflare Analytics:** Built-in, free
- **Google Analytics:** Integrated on all pages
- **Form Tracking:** Via Formspree

## 🔐 Environment Variables

Required for Cloudflare Pages deployment:
- `CLOUDFLARE_API_TOKEN`: For API access
- `CLOUDFLARE_ACCOUNT_ID`: Your account ID

## 📞 Contact

**Verdana AG**
- Website: www.verdana-ag.ch
- Email: info@verdana-ag.ch
- Phone: +41 44 552 44 55

## 📄 License

© 2025 Verdana AG. All rights reserved.

