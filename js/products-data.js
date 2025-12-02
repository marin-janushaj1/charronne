/**
 * CHARRONNE Product Catalog
 * Real products mapped to existing images
 */

const productEntries = [
  // === SHOES (15) ===
  {
    id: 'shoe-01',
    name: 'Velvet Ribbon Heel',
    category: 'shoes',
    price: 2850,
    image: 'assets/images/shoes/WhatsApp Image 2025-12-02 at 02.46.00 (1).jpeg',
    description: 'Runway heel with a velvet bow strap and sculpted gold-tone heel.',
    materials: ['Calfskin Leather', 'Velvet', 'Gold Hardware'],
    details: '11cm heel, ankle strap closure.'
  },
  {
    id: 'shoe-02',
    name: 'Crescent Heel Pump',
    category: 'shoes',
    price: 3200,
    image: 'assets/images/shoes/WhatsApp Image 2025-12-02 at 02.46.00 (2).jpeg',
    description: 'Glossy pump with a curved crescent heel and sleek slingback.',
    materials: ['Patent Leather', 'Gilded Metal'],
    details: '10cm crescent heel, slingback strap.'
  },
  {
    id: 'shoe-03',
    name: 'Pleated Tulle Heel',
    category: 'shoes',
    price: 2950,
    image: 'assets/images/shoes/WhatsApp Image 2025-12-02 at 02.46.00 (3).jpeg',
    description: 'Elegant stiletto wrapped with pleated tulle and satin piping.',
    materials: ['Leather', 'Silk Tulle'],
    details: '11cm stiletto, pleated upper.'
  },
  {
    id: 'shoe-04',
    name: 'Gold Mask Mule',
    category: 'shoes',
    price: 2400,
    image: 'assets/images/shoes/WhatsApp Image 2025-12-02 at 02.46.00.jpeg',
    description: 'Slip-on mule with mask-inspired vamp and metallic sheen.',
    materials: ['Gold Leather', 'Velvet'],
    details: '7cm heel, mask cutout strap.'
  },
  {
    id: 'shoe-05',
    name: 'Baroque Platform Sandal',
    category: 'shoes',
    price: 3500,
    image: 'assets/images/shoes/WhatsApp Image 2025-12-02 at 02.46.01 (1).jpeg',
    description: 'Statement platform with baroque heel and red velvet detailing.',
    materials: ['Leather', 'Velvet', 'Gilded Metal'],
    details: '12cm heel, platform base.'
  },
  {
    id: 'shoe-06',
    name: 'Draped Curtain Pump',
    category: 'shoes',
    price: 2650,
    image: 'assets/images/shoes/WhatsApp Image 2025-12-02 at 02.46.01 (2).jpeg',
    description: 'Pointed pump with flowing velvet drape and gold buckle.',
    materials: ['Leather', 'Velvet', 'Gold Hardware'],
    details: '10cm heel, draped back detail.'
  },
  {
    id: 'shoe-07',
    name: 'Velvet Cutout Pump',
    category: 'shoes',
    price: 2750,
    image: 'assets/images/shoes/WhatsApp Image 2025-12-02 at 02.46.01 (3).jpeg',
    description: 'Velvet pump featuring geometric cutouts and polished heel.',
    materials: ['Velvet', 'Leather'],
    details: '9cm heel, cutout upper.'
  },
  {
    id: 'shoe-08',
    name: 'Crescent Moon Pump',
    category: 'shoes',
    price: 3400,
    image: 'assets/images/shoes/WhatsApp Image 2025-12-02 at 02.46.01 (4).jpeg',
    description: 'Black pump perched on a sculptural gold crescent heel.',
    materials: ['Leather', 'Gilded Metal'],
    details: '10cm crescent heel, pointed toe.'
  },
  {
    id: 'shoe-09',
    name: 'Sculpted Column Boot',
    category: 'shoes',
    price: 3900,
    image: 'assets/images/shoes/WhatsApp Image 2025-12-02 at 02.46.01 (5).jpeg',
    description: 'Knee-high boot with architectural column heel and soft gloss finish.',
    materials: ['Leather', 'Metal'],
    details: '9cm column heel, knee height.'
  },
  {
    id: 'shoe-10',
    name: 'Mask Slingback',
    category: 'shoes',
    price: 2550,
    image: 'assets/images/shoes/WhatsApp Image 2025-12-02 at 02.46.01 (6).jpeg',
    description: 'Mask-inspired slingback with velvet straps and slim heel.',
    materials: ['Leather', 'Velvet'],
    details: '8cm heel, slingback strap.'
  },
  {
    id: 'shoe-11',
    name: 'Velvet Curtain Flat',
    category: 'shoes',
    price: 1650,
    image: 'assets/images/shoes/WhatsApp Image 2025-12-02 at 02.46.01 (7).jpeg',
    description: 'Flat silhouette with pleated velvet curtain accent and gold trim.',
    materials: ['Velvet', 'Leather', 'Gold Hardware'],
    details: 'Pointed toe, cushioned footbed.'
  },
  {
    id: 'shoe-12',
    name: 'Draped Velvet Boot',
    category: 'shoes',
    price: 3100,
    image: 'assets/images/shoes/WhatsApp Image 2025-12-02 at 02.46.01.jpeg',
    description: 'Tall boot with cascading velvet drape and structured base.',
    materials: ['Leather', 'Velvet'],
    details: '8cm heel, knee height.'
  },
  {
    id: 'shoe-13',
    name: 'Pleated Bow Heel',
    category: 'shoes',
    price: 2780,
    image: 'assets/images/shoes/WhatsApp Image 2025-12-02 at 02.46.02 (1).jpeg',
    description: 'Pleated bow detail on a sleek stiletto for evening drama.',
    materials: ['Leather', 'Silk'],
    details: '10cm heel, pleated bow front.'
  },
  {
    id: 'shoe-14',
    name: 'Opera Curve Sandal',
    category: 'shoes',
    price: 2735,
    image: 'assets/images/shoes/WhatsApp Image 2025-12-02 at 02.46.02 (2).jpeg',
    description: 'Minimal sandal with curved heel and slender straps.',
    materials: ['Leather', 'Metal'],
    details: '9cm curved heel, adjustable strap.'
  },
  {
    id: 'shoe-15',
    name: 'Velvet Pearl Mule',
    category: 'shoes',
    price: 2250,
    image: 'assets/images/shoes/WhatsApp Image 2025-12-02 at 02.46.02.jpeg',
    description: 'Gold mule trimmed with velvet and a pearl-accented buckle.',
    materials: ['Gold Leather', 'Velvet', 'Pearl Accent'],
    details: '7cm heel, slip-on fit.'
  },

  // === BAGS (15) ===
  {
    id: 'bag-01',
    name: 'Crescent Clutch',
    category: 'bags',
    price: 1850,
    image: 'assets/images/bags/WhatsApp Image 2025-12-02 at 02.45.22.jpeg',
    description: 'Sculpted crescent clutch with zip closure and chain strap.',
    materials: ['Gilded Metal', 'Leather Lining'],
    details: 'Hard shell, detachable chain.'
  },
  {
    id: 'bag-02',
    name: 'Draped Velvet Mini',
    category: 'bags',
    price: 2200,
    image: 'assets/images/bags/WhatsApp Image 2025-12-02 at 02.45.23 (1).jpeg',
    description: 'Mini bag wrapped in draped velvet with gold belt accent.',
    materials: ['Velvet', 'Leather', 'Gold Hardware'],
    details: 'Magnetic closure, top handle.'
  },
  {
    id: 'bag-03',
    name: 'Tulle Bow Tote',
    category: 'bags',
    price: 2450,
    image: 'assets/images/bags/WhatsApp Image 2025-12-02 at 02.45.23 (2).jpeg',
    description: 'Structured tote with oversized tulle bow and circular handles.',
    materials: ['Leather', 'Silk Tulle'],
    details: 'Open top, rigid body.'
  },
  {
    id: 'bag-04',
    name: 'Baroque Handle Bag',
    category: 'bags',
    price: 3200,
    image: 'assets/images/bags/WhatsApp Image 2025-12-02 at 02.45.23 (3).jpeg',
    description: 'Leather bag topped with ornate baroque scroll handles.',
    materials: ['Leather', 'Gilded Metal'],
    details: 'Flap closure, gold clasp.'
  },
  {
    id: 'bag-05',
    name: 'Pleated Dome Bag',
    category: 'bags',
    price: 2800,
    image: 'assets/images/bags/WhatsApp Image 2025-12-02 at 02.45.23 (4).jpeg',
    description: 'Dome silhouette with pleated leather panels and top handle.',
    materials: ['Leather', 'Brass'],
    details: 'Fold-over flap, compact size.'
  },
  {
    id: 'bag-06',
    name: 'Gold Pleated Clutch',
    category: 'bags',
    price: 1650,
    image: 'assets/images/bags/WhatsApp Image 2025-12-02 at 02.45.23 (5).jpeg',
    description: 'Metallic pleated clutch with tonal flap and clasp closure.',
    materials: ['Gold Leather', 'Brown Leather'],
    details: 'Evening size, interior slip pocket.'
  },
  {
    id: 'bag-07',
    name: 'Scroll Handle Bag',
    category: 'bags',
    price: 3400,
    image: 'assets/images/bags/WhatsApp Image 2025-12-02 at 02.45.23.jpeg',
    description: 'Structured silhouette with dramatic double scroll handles.',
    materials: ['Leather', 'Gilded Metal'],
    details: 'Flap top, gold clasp.'
  },
  {
    id: 'bag-08',
    name: 'Curtain Shoulder Bag',
    category: 'bags',
    price: 3600,
    image: 'assets/images/bags/WhatsApp Image 2025-12-02 at 02.45.24 (1).jpeg',
    description: 'Gold and velvet shoulder bag with asymmetric curtain drape.',
    materials: ['Gold Leather', 'Red Velvet'],
    details: 'Adjustable strap, magnetic closure.'
  },
  {
    id: 'bag-09',
    name: 'Spiral Handle Bag',
    category: 'bags',
    price: 2900,
    image: 'assets/images/bags/WhatsApp Image 2025-12-02 at 02.45.24 (2).jpeg',
    description: 'Compact bag with a single sculpted spiral handle.',
    materials: ['Leather', 'Gilded Metal'],
    details: 'Top handle, clasp fastening.'
  },
  {
    id: 'bag-10',
    name: 'Velvet Drape Tote',
    category: 'bags',
    price: 3100,
    image: 'assets/images/bags/WhatsApp Image 2025-12-02 at 02.45.24 (3).jpeg',
    description: 'Oversized tote with flowing velvet drape and belt detail.',
    materials: ['Velvet', 'Leather', 'Gold Hardware'],
    details: 'Roomy interior, double handles.'
  },
  {
    id: 'bag-11',
    name: 'Yin Yang Circle Bag',
    category: 'bags',
    price: 2400,
    image: 'assets/images/bags/WhatsApp Image 2025-12-02 at 02.45.24 (4).jpeg',
    description: 'Circular two-tone bag with balanced gold and black panels.',
    materials: ['Gold Leather', 'Black Leather'],
    details: 'Top handle, zip closure.'
  },
  {
    id: 'bag-12',
    name: 'Sculpted Sphere Bag',
    category: 'bags',
    price: 2550,
    image: 'assets/images/bags/WhatsApp Image 2025-12-02 at 02.45.24 (5).jpeg',
    description: 'Spherical hard-shell bag with integrated curved handle.',
    materials: ['Gilded Metal', 'Leather Interior'],
    details: 'Zipper opening, structured shell.'
  },
  {
    id: 'bag-13',
    name: 'Pleated Shoulder Bag',
    category: 'bags',
    price: 2350,
    image: 'assets/images/bags/WhatsApp Image 2025-12-02 at 02.45.24 (6).jpeg',
    description: 'Pleated leather shoulder bag with sculptural form.',
    materials: ['Leather', 'Silk Tulle'],
    details: 'Shoulder strap, magnetic flap.'
  },
  {
    id: 'bag-14',
    name: 'Red Velvet Belt Bag',
    category: 'bags',
    price: 3100,
    image: 'assets/images/bags/WhatsApp Image 2025-12-02 at 02.45.24 (7).jpeg',
    description: 'Red velvet bag cinched with a gold belt accent and black trim.',
    materials: ['Velvet', 'Leather', 'Gold Hardware'],
    details: 'Shoulder carry, structured base.'
  },
  {
    id: 'bag-15',
    name: 'Classic Curve Bag',
    category: 'bags',
    price: 1750,
    image: 'assets/images/bags/WhatsApp Image 2025-12-02 at 02.45.24.jpeg',
    description: 'Curved flap bag with smooth leather finish and gold clasp.',
    materials: ['Leather', 'Gold Hardware'],
    details: 'Adjustable strap, interior pocket.'
  },

  // === ACCESSORIES (8) ===
  {
    id: 'accessory-01',
    name: 'Velvet Mask Choker',
    category: 'accessories',
    price: 406,
    image: 'assets/images/accessories/WhatsApp Image 2025-12-02 at 02.46.41 (1).jpeg',
    description: 'Velvet choker with mask-inspired centerpiece and gold detail.',
    materials: ['Velvet', 'Gold Hardware'],
    details: 'Adjustable length, snap closure.'
  },
  {
    id: 'accessory-02',
    name: 'Pearl Chain Belt',
    category: 'accessories',
    price: 607,
    image: 'assets/images/accessories/WhatsApp Image 2025-12-02 at 02.46.41 (2).jpeg',
    description: 'Gold chain belt dotted with luminous pearl accents.',
    materials: ['Gold Plated Metal', 'Glass Pearls'],
    details: 'One size, hook fastening.'
  },
  {
    id: 'accessory-03',
    name: 'Satin Opera Gloves',
    category: 'accessories',
    price: 845,
    image: 'assets/images/accessories/WhatsApp Image 2025-12-02 at 02.46.41 (3).jpeg',
    description: 'Elbow-length satin gloves with minimalist sheen.',
    materials: ['Satin'],
    details: 'One size, slip-on.'
  },
  {
    id: 'accessory-04',
    name: 'Baroque Cuff',
    category: 'accessories',
    price: 1216,
    image: 'assets/images/accessories/WhatsApp Image 2025-12-02 at 02.46.41 (4).jpeg',
    description: 'Gilded cuff engraved with baroque scrollwork.',
    materials: ['Gilded Brass'],
    details: 'Slip-on fit, polished finish.'
  },
  {
    id: 'accessory-05',
    name: 'Velvet Knot Headband',
    category: 'accessories',
    price: 206,
    image: 'assets/images/accessories/WhatsApp Image 2025-12-02 at 02.46.41.jpeg',
    description: 'Soft velvet headband with twisted knot profile.',
    materials: ['Velvet'],
    details: 'One size, cushioned base.'
  },
  {
    id: 'accessory-06',
    name: 'Gilded Hairpin Set',
    category: 'accessories',
    price: 462,
    image: 'assets/images/accessories/WhatsApp Image 2025-12-02 at 02.46.42 (1).jpeg',
    description: 'Set of sculptural gold-tone hairpins inspired by theater arches.',
    materials: ['Gold Plated Metal'],
    details: 'Pack of two, slide-in fastening.'
  },
  {
    id: 'accessory-07',
    name: 'Silk Tulle Collar',
    category: 'accessories',
    price: 525,
    image: 'assets/images/accessories/WhatsApp Image 2025-12-02 at 02.46.42 (2).jpeg',
    description: 'Layered silk tulle collar for dramatic neck framing.',
    materials: ['Silk Tulle'],
    details: 'Tie closure, lightweight layers.'
  },
  {
    id: 'accessory-08',
    name: 'Velvet Bow Brooch',
    category: 'accessories',
    price: 338,
    image: 'assets/images/accessories/WhatsApp Image 2025-12-02 at 02.46.42.jpeg',
    description: 'Velvet bow brooch with faceted jewel centerpiece.',
    materials: ['Velvet', 'Glass Crystal'],
    details: 'Pin backing, statement size.'
  }
];

var PRODUCTS = Object.fromEntries(productEntries.map(product => [product.id, product]));

// Get product by ID
function getProduct(id) {
  return PRODUCTS[id] || null;
}

// Get products by category
function getProductsByCategory(category) {
  return Object.values(PRODUCTS).filter(p => p.category === category);
}

// Get related products (same category, exclude current)
function getRelatedProducts(productId, limit = 4) {
  const product = PRODUCTS[productId];
  if (!product) return [];

  return Object.values(PRODUCTS)
    .filter(p => p.category === product.category && p.id !== productId)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
}

// Get recommended products (mix from both categories)
function getRecommendedProducts(productId, limit = 4) {
  const product = PRODUCTS[productId];
  if (!product) return [];

  const sameCategory = Object.values(PRODUCTS)
    .filter(p => p.category === product.category && p.id !== productId)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  const otherCategory = Object.values(PRODUCTS)
    .filter(p => p.category !== product.category)
    .sort(() => Math.random() - 0.5)
    .slice(0, limit - sameCategory.length);

  return [...sameCategory, ...otherCategory];
}

// Format price
function formatPrice(price) {
  return `€${price.toLocaleString()}`;
}

// Expose catalog helpers globally for other scripts
if (typeof window !== 'undefined') {
  window.PRODUCTS = PRODUCTS;
  window.getProduct = getProduct;
  window.getProductsByCategory = getProductsByCategory;
  window.getRelatedProducts = getRelatedProducts;
  window.getRecommendedProducts = getRecommendedProducts;
  window.formatPrice = formatPrice;
}
