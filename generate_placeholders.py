#!/usr/bin/env python3
"""
Generate SVG placeholder images for the CHARRONNE website
"""

import os

# Placeholder configurations
PLACEHOLDERS = {
    # Home page
    'hero-fashion-photo.svg': {'width': 1920, 'height': 1080, 'text': 'HERO FASHION PHOTO\nModel in elegant pose'},
    'featured-look-1.svg': {'width': 800, 'height': 1200, 'text': 'FEATURED\nLOOK 1'},
    'featured-look-2.svg': {'width': 800, 'height': 1200, 'text': 'FEATURED\nLOOK 2'},
    'featured-look-3.svg': {'width': 800, 'height': 1200, 'text': 'FEATURED\nLOOK 3'},
    'featured-look-4.svg': {'width': 800, 'height': 1200, 'text': 'FEATURED\nLOOK 4'},

    # Inspirations
    'mood-paris-lights.svg': {'width': 600, 'height': 600, 'text': 'PARIS\nMIDNIGHT LIGHTS'},
    'mood-golden-hour.svg': {'width': 600, 'height': 600, 'text': 'GOLDEN HOUR\nSILHOUETTES'},
    'mood-fabric-texture.svg': {'width': 600, 'height': 600, 'text': 'FABRIC\nTEXTURE'},
    'mood-architecture.svg': {'width': 600, 'height': 600, 'text': 'ARCHITECTURAL\nDETAILS'},
    'mood-cinema.svg': {'width': 600, 'height': 600, 'text': 'CINEMATIC\nMOOD'},
    'mood-textures.svg': {'width': 600, 'height': 600, 'text': 'TEXTILE\nTEXTURES'},

    # Mockups
    'mockup-evening-1.svg': {'width': 800, 'height': 1000, 'text': 'EVENING WEAR\nMockup 1'},
    'mockup-evening-2.svg': {'width': 800, 'height': 1000, 'text': 'EVENING WEAR\nMockup 2'},
    'mockup-evening-3.svg': {'width': 800, 'height': 1000, 'text': 'EVENING WEAR\nMockup 3'},
    'mockup-street-1.svg': {'width': 800, 'height': 1000, 'text': 'STREET STYLE\nMockup 1'},
    'mockup-street-2.svg': {'width': 800, 'height': 1000, 'text': 'STREET STYLE\nMockup 2'},
    'mockup-street-3.svg': {'width': 800, 'height': 1000, 'text': 'STREET STYLE\nMockup 3'},
    'mockup-editorial-1.svg': {'width': 800, 'height': 1000, 'text': 'EDITORIAL\nMockup 1'},
    'mockup-editorial-2.svg': {'width': 800, 'height': 1000, 'text': 'EDITORIAL\nMockup 2'},
    'mockup-editorial-3.svg': {'width': 800, 'height': 1000, 'text': 'EDITORIAL\nMockup 3'},

    # Products
    **{f'product-{i}.svg': {'width': 800, 'height': 1000, 'text': f'PRODUCT\n{i}'} for i in range(1, 13)},

    # Sketches
    **{f'sketch-{i}.svg': {'width': 600, 'height': 800, 'text': f'SKETCH\n{i}'} for i in range(1, 13)},

    # About
    'designers-portrait.svg': {'width': 1200, 'height': 1200, 'text': 'DESIGNER TEAM\nPORTRAIT'},
}

def create_svg_placeholder(filename, width, height, text):
    """Create an SVG placeholder image"""
    lines = text.split('\n')
    line_height = 40
    start_y = (height / 2) - ((len(lines) - 1) * line_height / 2)

    text_elements = ''
    for i, line in enumerate(lines):
        y = start_y + (i * line_height)
        text_elements += f'    <text x="50%" y="{y}" text-anchor="middle" fill="#C89A3A" font-family="Arial, sans-serif" font-size="28" font-weight="300" letter-spacing="3">{line}</text>\n'

    svg_content = f'''<svg width="{width}" height="{height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1a1a1a;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2d2d2d;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)"/>
{text_elements}</svg>'''

    return svg_content

def main():
    # Create placeholders directory if it doesn't exist
    placeholder_dir = 'assets/images/placeholders'
    os.makedirs(placeholder_dir, exist_ok=True)

    # Generate all placeholders
    for filename, config in PLACEHOLDERS.items():
        svg_content = create_svg_placeholder(
            filename,
            config['width'],
            config['height'],
            config['text']
        )

        filepath = os.path.join(placeholder_dir, filename)
        with open(filepath, 'w') as f:
            f.write(svg_content)

        print(f'Created: {filepath}')

    print(f'\nGenerated {len(PLACEHOLDERS)} placeholder images!')

if __name__ == '__main__':
    main()
