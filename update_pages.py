#!/usr/bin/env python3
"""
Update all HTML pages with theme and language support
"""

import re

def update_html_file(filename):
    with open(filename, 'r') as f:
        content = f.read()

    # Add themes.css before closing </head>
    if 'css/themes.css' not in content:
        content = content.replace(
            '<link rel="stylesheet" href="css/animations.css">',
            '<link rel="stylesheet" href="css/animations.css">\n    <link rel="stylesheet" href="css/themes.css">'
        )

    # Add navigation controls if not present
    if 'nav-controls' not in content:
        nav_menu_end = '</ul>\n        </div>\n    </nav>'
        nav_with_controls = '''</ul>

            <div class="nav-controls">
                <button id="theme-toggle" class="theme-toggle" aria-label="Toggle theme">🌙</button>
                <button id="language-toggle" class="language-toggle" aria-label="Switch language">IT</button>
            </div>
        </div>
    </nav>'''
        content = content.replace(nav_menu_end, nav_with_controls)

    # Add data-i18n to navigation links
    nav_replacements = [
        ('class="nav-link">Home<', 'class="nav-link" data-i18n="nav-home">Home<'),
        ('class="nav-link active">Home<', 'class="nav-link active" data-i18n="nav-home">Home<'),
        ('class="nav-link">Inspirations<', 'class="nav-link" data-i18n="nav-inspirations">Inspirations<'),
        ('class="nav-link active">Inspirations<', 'class="nav-link active" data-i18n="nav-inspirations">Inspirations<'),
        ('class="nav-link">Mock-ups<', 'class="nav-link" data-i18n="nav-mockups">Mock-ups<'),
        ('class="nav-link active">Mock-ups<', 'class="nav-link active" data-i18n="nav-mockups">Mock-ups<'),
        ('class="nav-link">Products<', 'class="nav-link" data-i18n="nav-products">Products<'),
        ('class="nav-link active">Products<', 'class="nav-link active" data-i18n="nav-products">Products<'),
        ('class="nav-link">Sketches<', 'class="nav-link" data-i18n="nav-sketches">Sketches<'),
        ('class="nav-link active">Sketches<', 'class="nav-link active" data-i18n="nav-sketches">Sketches<'),
        ('class="nav-link">About<', 'class="nav-link" data-i18n="nav-about">About<'),
        ('class="nav-link active">About<', 'class="nav-link active" data-i18n="nav-about">About<'),
    ]

    for old, new in nav_replacements:
        content = content.replace(old, new)

    # Add JavaScript files before closing </body>
    if 'js/theme.js' not in content:
        content = content.replace(
            '    <!-- JavaScript -->\n    <script src="js/navigation.js"></script>',
            '    <!-- JavaScript -->\n    <script src="js/theme.js"></script>\n    <script src="js/translations.js"></script>\n    <script src="js/navigation.js"></script>'
        )

    with open(filename, 'w') as f:
        f.write(content)

    print(f'Updated: {filename}')

# Update all pages
files = [
    'inspirations.html',
    'mockups.html',
    'products.html',
    'sketches.html',
    'about.html'
]

for f in files:
    update_html_file(f)

print('All pages updated successfully!')
