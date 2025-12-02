# CHARRONNE - Luxury Fashion Website

A contemporary couture website featuring Vogue-inspired editorial design with high-end Parisian aesthetics.

## Features

- **6 Pages**: Home, Inspirations, Mock-ups, Products, Sketches, About
- **Luxury Design**: Black backgrounds, gold accents (#C89A3A), ivory sections
- **Theme Switcher**: Toggle between dark mode (default) and light mode with localStorage persistence
- **Bilingual Support**: Switch between English and Italian with full translations across all pages
- **Interactive Elements**:
  - Smooth scroll and parallax effects
  - Fade-in animations on scroll
  - Image lightbox/gallery for sketches
  - Product filtering system
  - Responsive mobile menu
- **Fully Responsive**: Mobile, tablet, and desktop optimized
- **Accessible**: Keyboard navigation, ARIA labels, focus states
- **Performance Optimized**: CSS transforms, lazy loading, debounced scroll events

## Project Structure

```
charronne/
├── index.html                 # Home page
├── inspirations.html          # Inspirations page
├── mockups.html              # Mock-ups page
├── products.html             # Products page
├── sketches.html             # Sketches page
├── about.html                # About page
├── css/
│   ├── reset.css            # CSS reset
│   ├── variables.css        # Design tokens
│   ├── typography.css       # Typography system
│   ├── navigation.css       # Navigation styles
│   ├── components.css       # Reusable components
│   ├── animations.css       # Animation styles
│   └── pages/               # Page-specific styles
├── js/
│   ├── navigation.js        # Navigation functionality
│   ├── scroll-animations.js # Scroll effects
│   ├── lightbox.js          # Image gallery
│   └── filters.js           # Filtering system
├── assets/
│   └── images/
│       ├── logo.jpeg        # CHARRONNE logo
│       └── placeholders/    # SVG placeholder images
└── generate_placeholders.py # Script to generate placeholders
```

## Getting Started

### 1. View the Website

Simply open `index.html` in a modern web browser:

```bash
open index.html
```

Or use a local server for the best experience:

```bash
# Using Python
python3 -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

### 2. Replacing Placeholder Images

The website currently uses SVG placeholders. To replace them with your own fashion images:

#### Quick Method:
Replace the SVG files in `assets/images/placeholders/` with your own images (JPG, PNG, or WebP format), keeping the same filenames.

#### Recommended Method:
1. Save your images in `assets/images/placeholders/` with the following names:

**Home Page:**
- `hero-fashion-photo.jpg` (1920x1080) - Hero background image
- `featured-look-1.jpg` through `featured-look-4.jpg` (800x1200) - Featured collection

**Inspirations:**
- `mood-paris-lights.jpg` (600x600) - Moodboard image
- `mood-golden-hour.jpg` (600x600) - Moodboard image
- `mood-fabric-texture.jpg` (600x600) - Moodboard image
- `mood-architecture.jpg` (600x600) - Moodboard image
- `mood-cinema.jpg` (600x600) - Moodboard image
- `mood-textures.jpg` (600x600) - Moodboard image

**Mock-ups:**
- `mockup-evening-1.jpg` through `mockup-evening-3.jpg` (800x1000)
- `mockup-street-1.jpg` through `mockup-street-3.jpg` (800x1000)
- `mockup-editorial-1.jpg` through `mockup-editorial-3.jpg` (800x1000)

**Products:**
- `product-1.jpg` through `product-12.jpg` (800x1000)

**Sketches:**
- `sketch-1.jpg` through `sketch-12.jpg` (600x800)

**About:**
- `designers-portrait.jpg` (1200x1200)

2. The CSS uses `data-image-type` attributes with pseudo-elements. Update the CSS to use actual `<img>` tags or background images for your photos.

### 3. Customizing Content

#### Update Text Content:
Edit the HTML files directly to replace placeholder text with your brand story, product descriptions, and contact information.

#### Customize Colors:
Edit `css/variables.css` to change colors:
```css
--color-gold: #C89A3A;    /* Change to your brand color */
--color-ivory: #F8F4EC;   /* Change to your secondary color */
```

#### Adjust Typography:
Modify font choices in `css/variables.css`:
```css
--font-serif: 'Playfair Display', Georgia, serif;
--font-sans: 'Inter', 'Helvetica Neue', Arial, sans-serif;
```

## Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Grid, Flexbox
- **Vanilla JavaScript** - No frameworks
- **Google Fonts** - Playfair Display & Inter

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Features Breakdown

### Navigation
- Sticky navigation bar with backdrop blur
- Gold underline animation on hover
- Mobile hamburger menu
- Smooth scroll to sections

### Animations
- Intersection Observer for fade-in effects
- Parallax scrolling on hero images (desktop only)
- Hover effects on images and buttons
- Staggered grid animations

### Theme Switcher
- Click the sun/moon icon in navigation to toggle themes
- Dark mode: Black background with white text (default)
- Light mode: White background with black text
- Preference saved in localStorage
- Smooth transitions between themes

### Language Switcher
- Click EN/IT button in navigation to switch languages
- Full translation coverage across all pages
- English (EN) and Italian (IT) supported
- Preference saved in localStorage
- Navigation, content, and buttons all translate

### Image Lightbox
- Click sketches to view in fullscreen
- Navigate with arrows or swipe on mobile
- Close with ESC key or X button
- Keyboard accessible

### Filtering System
- Filter mock-ups by category (All, Evening, Street, Editorial)
- Smooth transitions between filtered states

## Accessibility

- Semantic HTML5 structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus visible states
- Reduced motion support (prefers-reduced-motion)
- Sufficient color contrast

## Performance Tips

- Images are lazy-loaded below the fold
- CSS transforms used for animations (GPU-accelerated)
- Scroll events are debounced
- Parallax disabled on mobile for performance

## Customization Guide

### Adding New Products

1. Open `products.html`
2. Copy a product card:
```html
<div class="product-card fade-in" data-image-type="product-new">
    <div class="product-image"></div>
    <div class="product-info">
        <h3 class="product-name">Your Product Name</h3>
        <p class="product-description">Description</p>
        <p class="product-price">€Price</p>
        <button class="btn btn-product">View Piece</button>
    </div>
</div>
```
3. Add your product image to `assets/images/placeholders/`

### Adding New Mock-ups

1. Open `mockups.html`
2. Add a new card with appropriate `data-category` (evening, street, or editorial)
3. Add the corresponding image

### Changing Page Colors

Each section can have different background colors. Edit the page-specific CSS files in `css/pages/` to customize.

### Adding or Modifying Translations

To edit translations or add new languages:

1. Open `js/translations.js`
2. The translations object contains two language sections: `en` (English) and `it` (Italian)
3. To modify existing translations, update the text values
4. To add a new language (e.g., French):
```javascript
fr: {
    'nav-home': 'Accueil',
    'nav-inspirations': 'Inspirations',
    // ... add all translation keys
}
```
5. Update the `toggleLanguage()` function to cycle through your languages
6. Add the new language option to the language toggle button

## Deployment

### Static Hosting (Recommended)
- **Netlify**: Drag and drop the entire folder
- **Vercel**: Connect your Git repository
- **GitHub Pages**: Push to a GitHub repo and enable Pages
- **AWS S3**: Upload files to an S3 bucket configured for static hosting

### Traditional Hosting
Upload all files to your web server via FTP/SFTP, maintaining the directory structure.

## License

This is a custom website design. All rights reserved.

## Support

For questions or issues, refer to the inline code comments or contact the development team.

---

**CHARRONNE** - Contemporary couture. Timeless elegance.
