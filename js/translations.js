/**
 * Language Switcher
 * Handles English/Italian translation with localStorage persistence
 */

const translations = {
    en: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'About',
        'nav-inspirations': 'Inspirations',
        'nav-products': 'Products',
        'nav-sketches': 'Sketches',
        'nav-mockups': 'Mock-ups',
        'nav-contact': 'Contact Us',

        // Home Page
        'hero-title': 'CHARRONNE',
        'hero-subtitle': 'Contemporary couture. Timeless elegance.',
        'btn-explore': 'Explore Collections',
        'btn-inspirations': 'View Inspirations',
        'featured-title': 'Featured Collection',
        'featured-caption-1': 'Look One',
        'featured-caption-2': 'Look Two',
        'featured-caption-3': 'Look Three',
        'featured-caption-4': 'Look Four',
        'philosophy-text': 'Where modern silhouettes meet timeless craftsmanship. Each piece tells a story of Parisian elegance, meticulously designed for those who appreciate the art of haute couture. CHARRONNE embodies the perfect balance between contemporary innovation and classical refinement.',

        // Inspirations Page
        'inspirations-title': 'INSPIRATIONS',
        'inspirations-heading': 'The Vision',
        'inspirations-p1': 'Our inspiration is drawn from the grand stages of classical ballet and the opulent theatres of Paris. The baroque ornamentations of gilded mirrors, the dramatic sweep of crimson velvet curtains, and the ethereal grace of dancers in motion—these elements weave into every CHARRONNE design.',
        'inspirations-subheading-1': 'Theatrical Grandeur',
        'inspirations-p2': 'The rich burgundy of theatre curtains, the warm glow of stage lights, and the intricate gold detailing of opera house balconies inspire our luxurious color palette. Each garment is designed to make its wearer the star of their own performance, commanding attention with understated drama.',
        'inspirations-subheading-2': 'Ballet\'s Grace',
        'inspirations-p3': 'The fluid movements of ballet dancers—their strength, discipline, and ethereal beauty—inform the way our fabrics drape and flow. Like a tutu\'s perfect layers or a dancer\'s extended line, our silhouettes celebrate both structure and movement, power and delicacy.',
        'inspirations-subheading-3': 'Baroque Artistry',
        'inspirations-p4': 'Ornate frames adorned with golden flourishes, celestial motifs like the crescent moon, and the architectural magnificence of centuries-old theatres—these baroque elements translate into our intricate details, luxurious embellishments, and commitment to timeless craftsmanship.',

        // Mock-ups Page
        'mockups-title': 'MOCK-UPS',
        'filter-all': 'All',
        'filter-evening': 'Evening',
        'filter-street': 'Street',
        'filter-editorial': 'Editorial',
        'mockup-view': 'View Details',
        'mockups-intro': 'Studio explorations, material studies, and digital compositions shaping upcoming pieces.',
        'palette-heading': 'Signature Palette',
        'palette-jet': 'Jet Black',
        'palette-jet-desc': 'Depth and shadow for contrast.',
        'palette-gold': 'Rich Gold',
        'palette-gold-desc': 'Signature gilded accent.',
        'palette-white': 'Bright White',
        'palette-white-desc': 'Clean canvas for clarity.',
        'ads-heading': 'Advertisement',
        'ads-subheading': 'Campaign layouts exploring our signature palette across print and digital placements.',
        'ad1-title': 'Editorial Spread',
        'ad1-copy': 'Full-bleed imagery balancing jet black and bright white with rich gold accents.',
        'ad2-title': 'Street Poster',
        'ad2-copy': 'Bold typography and sculptural silhouettes for high-impact urban placement.',
        'ad3-title': 'Print Layout',
        'ad3-copy': 'Campaign grid showing logo use across Jet Black, Rich Gold, and Bright White.',
        'ad3-link': 'Open PDF',

        // Products Page
        'products-title': 'Signature Pieces',
        'products-intro': 'A carefully curated selection of timeless designs. Each piece represents the pinnacle of craftsmanship and contemporary elegance, designed to elevate your wardrobe with enduring style.',
        'btn-view-piece': 'View Piece',

        // Sketches Page
        'sketches-title': 'SKETCHES',
        'technical-heading': 'Technical Drawings',
        'technical-note': 'Precision drafting and construction notes.',

        // About Page
        'about-heading-1': 'The Atelier',
        'about-p1': 'Founded by a collective of contemporary fashion designers united by a singular vision, CHARRONNE emerged from the storied streets of Paris with a mission to redefine modern luxury. Our atelier brings together decades of combined expertise in haute couture, architectural design, and textile innovation.',
        'about-heading-2': 'Our Mission',
        'about-p2': 'We believe that true elegance transcends trends. CHARRONNE exists at the intersection of contemporary innovation and timeless design, creating pieces that honor the past while boldly embracing the future. Each collection represents a dialogue between modern silhouettes and classical elegance, resulting in garments that feel both of-the-moment and eternal.',
        'about-heading-3': 'Craftsmanship',
        'about-p3': 'Our commitment to sustainability and ethical production is woven into every thread. We partner with master artisans who share our values, using responsibly sourced materials and time-honored techniques. Each piece is crafted to endure, designed not for a season but for a lifetime. This is fashion as it should be: conscious, considered, and extraordinary.',
        'about-heading-4': 'Our Journey',
        'about-audience-heading': 'Our Audience',
        'about-audience-text': 'Charonne speaks to people who choose craftsmanship over excess and intimacy over spectacle. They are culturally attuned, globally minded, and drawn to sculptural pieces that feel personal and endure beyond seasons.',
        'timeline-2019': 'CHARRONNE founded in Paris',
        'timeline-2020': 'Debut collection at Paris Fashion Week',
        'timeline-2022': 'Opened flagship atelier on Rue Saint-Honoré',
        'timeline-2024': 'Launched sustainable couture initiative',
        'timeline-2025': 'International expansion & digital presence',
        'contact-heading': 'Connect With Us',
        'contact-email': 'Email',
        'contact-instagram': 'Instagram',
        'contact-atelier': 'Atelier',
        'contact-location': 'Rue Saint-Honoré, Paris',
        'btn-work': 'Work With Us',
        'business-card-heading': 'Business Card',
    },

    it: {
        // Navigation
        'nav-home': 'Home',
        'nav-about': 'Chi Siamo',
        'nav-inspirations': 'Ispirazioni',
        'nav-products': 'Prodotti',
        'nav-sketches': 'Schizzi',
        'nav-mockups': 'Prototipi',
        'nav-contact': 'Contattaci',

        // Home Page
        'hero-title': 'CHARRONNE',
        'hero-subtitle': 'Alta moda contemporanea. Eleganza senza tempo.',
        'btn-explore': 'Esplora le Collezioni',
        'btn-inspirations': 'Vedi Ispirazioni',
        'featured-title': 'Collezione in Evidenza',
        'featured-caption-1': 'Look Uno',
        'featured-caption-2': 'Look Due',
        'featured-caption-3': 'Look Tre',
        'featured-caption-4': 'Look Quattro',
        'philosophy-text': 'Dove le silhouette moderne incontrano l\'artigianato senza tempo. Ogni pezzo racconta una storia di eleganza parigina, meticolosamente progettato per coloro che apprezzano l\'arte dell\'haute couture. CHARRONNE incarna il perfetto equilibrio tra innovazione contemporanea e raffinatezza classica.',

        // Inspirations Page
        'inspirations-title': 'ISPIRAZIONI',
        'inspirations-heading': 'La Visione',
        'inspirations-p1': 'La nostra ispirazione nasce dai grandi palcoscenici del balletto classico e dai teatri opulenti di Parigi. Gli ornamenti barocchi di specchi dorati, il drappeggio drammatico di tende di velluto cremisi e la grazia eterea dei ballerini in movimento—questi elementi si intrecciano in ogni design CHARRONNE.',
        'inspirations-subheading-1': 'Grandiosità Teatrale',
        'inspirations-p2': 'Il ricco bordeaux delle tende del teatro, il caldo bagliore delle luci del palcoscenico e i dettagli dorati intricati dei balconi dell\'opera ispirano la nostra lussuosa palette di colori. Ogni capo è progettato per rendere chi lo indossa la stella della propria performance, catturando l\'attenzione con un dramma sobrio.',
        'inspirations-subheading-2': 'Grazia del Balletto',
        'inspirations-p3': 'I movimenti fluidi dei ballerini—la loro forza, disciplina e bellezza eterea—informano il modo in cui i nostri tessuti drappano e fluiscono. Come gli strati perfetti di un tutù o la linea estesa di una ballerina, le nostre silhouette celebrano sia la struttura che il movimento, la potenza e la delicatezza.',
        'inspirations-subheading-3': 'Maestria Barocca',
        'inspirations-p4': 'Cornici ornate adornate con fioriture dorate, motivi celesti come la luna crescente e la magnificenza architettonica di teatri secolari—questi elementi barocchi si traducono nei nostri dettagli intricati, negli abbellimenti lussuosi e nell\'impegno per l\'artigianato senza tempo.',

        // Mock-ups Page
        'mockups-title': 'PROTOTIPI',
        'filter-all': 'Tutti',
        'filter-evening': 'Sera',
        'filter-street': 'Strada',
        'filter-editorial': 'Editoriale',
        'mockup-view': 'Vedi Dettagli',
        'mockups-intro': 'Esplorazioni di studio, studi sui materiali e composizioni digitali che definiscono i prossimi pezzi.',
        'palette-heading': 'Palette del Marchio',
        'palette-jet': 'Jet Black',
        'palette-jet-desc': 'Profondità e ombra per il contrasto.',
        'palette-gold': 'Rich Gold',
        'palette-gold-desc': 'Accento dorato distintivo.',
        'palette-white': 'Bright White',
        'palette-white-desc': 'Tela pulita per chiarezza.',
        'ads-heading': 'Pubblicità',
        'ads-subheading': 'Layout di campagna che esplorano la nostra palette su stampa e digitale.',
        'ad1-title': 'Editoriale',
        'ad1-copy': 'Immagini a tutta pagina che bilanciano nero e bianco con accenti oro.',
        'ad2-title': 'Poster Stradale',
        'ad2-copy': 'Tipografia audace e silhouette scultoree per un impatto urbano.',
        'ad3-title': 'Layout Stampa',
        'ad3-copy': 'Griglia di campagna con l’uso del logo in Jet Black, Rich Gold e Bright White.',
        'ad3-link': 'Apri PDF',

        // Products Page
        'products-title': 'Pezzi Distintivi',
        'products-intro': 'Una selezione accuratamente curata di design senza tempo. Ogni pezzo rappresenta il culmine dell\'artigianato e dell\'eleganza contemporanea, progettato per elevare il tuo guardaroba con uno stile duraturo.',
        'btn-view-piece': 'Vedi Pezzo',

        // Sketches Page
        'sketches-title': 'SCHIZZI',
        'technical-heading': 'Disegni Tecnici',
        'technical-note': 'Disegni di precisione e note di costruzione.',

        // About Page
        'about-heading-1': 'L\'Atelier',
        'about-p1': 'Fondata da un collettivo di designer di moda contemporanei uniti da una visione singolare, CHARRONNE è emersa dalle storiche strade di Parigi con la missione di ridefinire il lusso moderno. Il nostro atelier riunisce decenni di esperienza combinata nell\'haute couture, nel design architettonico e nell\'innovazione tessile.',
        'about-heading-2': 'La Nostra Missione',
        'about-p2': 'Crediamo che la vera eleganza trascenda le tendenze. CHARRONNE esiste all\'intersezione tra innovazione contemporanea e design senza tempo, creando pezzi che onorano il passato mentre abbracciano audacemente il futuro. Ogni collezione rappresenta un dialogo tra silhouette moderne ed eleganza classica, risultando in capi che si sentono sia attuali che eterni.',
        'about-heading-3': 'Artigianato',
        'about-p3': 'Il nostro impegno per la sostenibilità e la produzione etica è intessuto in ogni filo. Collaboriamo con maestri artigiani che condividono i nostri valori, utilizzando materiali di provenienza responsabile e tecniche consacrate dal tempo. Ogni pezzo è realizzato per durare, progettato non per una stagione ma per tutta la vita. Questa è la moda come dovrebbe essere: consapevole, ponderata e straordinaria.',
        'about-heading-4': 'Il Nostro Viaggio',
        'about-audience-heading': 'Il Nostro Pubblico',
        'about-audience-text': 'Charonne parla a chi sceglie l’artigianato rispetto all’eccesso e l’intimità rispetto allo spettacolo. Sono attenti alla cultura, connessi al mondo, attratti da pezzi scultorei che durano oltre le stagioni.',
        'timeline-2019': 'CHARRONNE fondata a Parigi',
        'timeline-2020': 'Collezione di debutto alla Paris Fashion Week',
        'timeline-2022': 'Apertura dell\'atelier principale in Rue Saint-Honoré',
        'timeline-2024': 'Lancio dell\'iniziativa di alta moda sostenibile',
        'timeline-2025': 'Espansione internazionale e presenza digitale',
        'contact-heading': 'Contattaci',
        'contact-email': 'Email',
        'contact-instagram': 'Instagram',
        'contact-atelier': 'Atelier',
        'contact-location': 'Rue Saint-Honoré, Parigi',
        'btn-work': 'Lavora Con Noi',
        'business-card-heading': 'Biglietto da Visita',
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');

    // Get saved language or default to English
    const currentLanguage = localStorage.getItem('language') || 'en';

    // Apply language
    function applyLanguage(lang) {
        // Update all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });

        // Update language toggle button
        if (languageToggle) {
            languageToggle.textContent = lang === 'en' ? 'IT' : 'EN';
            languageToggle.setAttribute('aria-label',
                lang === 'en' ? 'Switch to Italian' : 'Switch to English'
            );
        }

        // Update HTML lang attribute
        document.documentElement.setAttribute('lang', lang);
    }

    // Toggle language
    function toggleLanguage() {
        const currentLang = document.documentElement.getAttribute('lang') || 'en';
        const newLang = currentLang === 'en' ? 'it' : 'en';

        applyLanguage(newLang);
        localStorage.setItem('language', newLang);
    }

    // Event listener
    if (languageToggle) {
        languageToggle.addEventListener('click', toggleLanguage);
    }

    // Apply saved language on load
    applyLanguage(currentLanguage);
});
