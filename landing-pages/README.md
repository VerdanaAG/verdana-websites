# Landing Pages

This directory contains all lead generation landing pages.

## 📋 Active Landing Pages

### Dachberater Schweiz
- **Domain:** dachberater-schweiz.ch
- **Purpose:** Lead generation for roof renovation services
- **Target:** Homeowners and SMEs in Switzerland
- **Status:** ✅ Active
- **URL:** https://dachberater-schweiz.ch

## 🚀 Creating a New Landing Page

### Option 1: Copy Existing Template

```bash
# Copy dachberater-schweiz as template
cp -r dachberater-schweiz new-domain

# Navigate to new directory
cd new-domain

# Customize content
# Edit index.html, styles.css, script.js
```

### Option 2: Start from Scratch

```bash
# Create new directory
mkdir new-domain
cd new-domain

# Create basic structure
touch index.html styles.css script.js
mkdir images
```

## 📝 Landing Page Structure

Each landing page should have:

```
landing-page-name/
├── index.html          # Main HTML file
├── styles.css          # Stylesheet
├── script.js           # JavaScript for interactions
├── images/             # Image assets
│   ├── hero-bg.jpg
│   └── ...
└── README.md           # Page-specific documentation
```

## ✅ Best Practices

### 1. **Consistent Structure**
- Use the same file naming conventions
- Keep the same section order (Hero, Benefits, Process, Form, Footer)
- Maintain consistent styling

### 2. **SEO Optimization**
- Unique title and meta description for each page
- Semantic HTML structure
- Alt text for all images
- Fast loading times

### 3. **Lead Generation**
- Clear value proposition
- Prominent CTA buttons
- Trust indicators
- Simple, focused forms

### 4. **Mobile-First**
- Responsive design
- Touch-friendly buttons
- Fast mobile loading
- Mobile-optimized forms

## 🔧 Configuration

### Formspree Integration

Each landing page uses Formspree for form handling:

1. Create a new form at https://formspree.io
2. Update the form action in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Contact Information

Update these in each landing page:
- Email address in footer
- Phone number in footer
- Formspree endpoint
- Google Analytics ID (if different)

## 📊 Tracking

All landing pages include:
- Google Analytics 4
- Cloudflare Analytics
- Formspree submission tracking

## 🚀 Deployment

Landing pages are automatically deployed via GitHub Actions:
- Push to `main` branch → Production deployment
- Push to other branches → Preview deployment

Each landing page has its own Cloudflare Pages project.

## 📞 Support

For questions or issues:
- Email: info@verdana-ag.ch
- Phone: +41 44 552 44 55

