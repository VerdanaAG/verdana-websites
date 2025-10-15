module.exports = {
  ci: {
    collect: {
      // Collect performance metrics from static files
      staticDistDir: './landing-pages',
      // Test all HTML files in landing pages
      url: [
        'http://localhost/dachberater-schweiz/index.html',
        // Add more landing pages as they are created
        // 'http://localhost/another-landing-page/index.html',
      ],
      numberOfRuns: 3, // Run Lighthouse 3 times and take median
    },
    assert: {
      preset: 'lighthouse:recommended',
      assertions: {
        // Performance thresholds
        'categories:performance': ['error', { minScore: 0.8 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['error', { minScore: 0.8 }],
        'categories:seo': ['error', { minScore: 0.9 }],
        
        // Specific metrics
        'first-contentful-paint': ['warn', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['warn', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['warn', { maxNumericValue: 0.1 }],
        'total-blocking-time': ['warn', { maxNumericValue: 300 }],
        
        // Best practices
        'uses-https': 'error',
        'uses-http2': 'warn',
        'viewport': 'error',
        'document-title': 'error',
        'meta-description': 'error',
      },
    },
    upload: {
      target: 'temporary-public-storage',
      // Results will be available for 7 days
    },
  },
};

