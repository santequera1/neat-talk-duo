// Detailed content for each service page (/services/$slug), keyed by service slug.
export type DetailItem = string | { t: string; d?: string; sub?: string[] };
export type DetailBlock = {
  title?: string;
  lead?: string;
  text?: string[];
  lists?: { title?: string; items: DetailItem[] }[];
  after?: string[];
};
export type ServiceDetail = {
  intro: string[];
  highlights?: string[];
  blocks: DetailBlock[];
};

const upholsteryIntroFr =
  "Solution d’entretien JR10 nettoie les tissus de recouvrement des meubles (fauteuils, canapés, coussins, etc.) selon les meilleures pratiques. Nos produits et techniques de nettoyage respectent les indications du fabricant et aident à préserver la couleur des tissus de recouvrement. Le temps de séchage dépend d’un ensemble de paramètres : le taux d’humidité ambiant, la température, la circulation de l’air dans la pièce concernée, le type de fibre, l’épaisseur du tissu, les types de matériaux de rembourrage des meubles, ainsi que la quantité d’eau nécessaire pour obtenir un nettoyage de qualité.";
const upholsteryIntroEn =
  "Solution d’entretien JR10 cleans furniture upholstery (armchairs, sofas, cushions, etc.) according to best practices. Our cleaning products and techniques follow the manufacturer’s instructions and help preserve the colour of the fabric. Drying time depends on several factors: ambient humidity, temperature, air circulation in the room, fibre type, fabric thickness, the padding materials used in the furniture, and the amount of water needed for a quality clean.";

const upholsteryExtrasFr: DetailItem[] = [
  {
    t: "Détachage ciblé",
    d: "traitement des taches de nourriture, de boissons et d’autres salissures.",
  },
  {
    t: "Traitement des odeurs",
    d: "réduction des odeurs désagréables lorsque le tissu et la source de l’odeur le permettent.",
  },
  {
    t: "Désinfection ou assainissement",
    d: "uniquement lorsque le matériau, le produit et la méthode utilisés le permettent.",
  },
  {
    t: "Protection des tissus",
    d: "application facultative d’un produit protecteur compatible avec le revêtement.",
  },
];
const upholsteryExtrasEn: DetailItem[] = [
  { t: "Targeted spot cleaning", d: "treatment of food, beverage and other stains." },
  {
    t: "Odour treatment",
    d: "reduction of unpleasant odours when the fabric and the source of the odour allow it.",
  },
  {
    t: "Disinfection or sanitizing",
    d: "only when the material, product and method used allow it.",
  },
  {
    t: "Fabric protection",
    d: "optional application of a protective product compatible with the upholstery.",
  },
];

export const serviceDetails: Record<string, { fr: ServiceDetail; en: ServiceDetail }> = {
  "entretien-commercial": {
    fr: {
      intro: [
        "Forts de 7 ans d’expérience et d’une réputation fondée sur l’excellence et notre main-d’œuvre qualifiée, nous sommes un partenaire de confiance dans le domaine des services d’entretien ménager aux installations à Drummondville et dans les alentours.",
        "Notre engagement envers la qualité et la satisfaction de la clientèle desservie nous vaut la fidélité de nos clients. Des petites aux moyennes entreprises, directement ou comme sous-traitant, nous assurons des espaces sains et impeccables.",
      ],
      blocks: [
        {
          title: "Toilettes et services sanitaires",
          text: [
            "Notre objectif : des sanitaires propres, hygiéniques et accueillants en tout temps. Chez Solution d’entretien JR10, nous assurons le nettoyage, la désinfection et l’entretien régulier de vos installations sanitaires. Nos équipes portent une attention particulière au nettoyage régulier et minutieux des toilettes, lavabos, surfaces et points de contact, ainsi qu’à la désinfection des zones fréquemment touchées.",
            "Grâce à des produits professionnels et à des méthodes de travail rigoureuses, nous contribuons à maintenir des espaces sanitaires propres, désinfectés, accueillants et conformes à vos exigences d’hygiène.",
          ],
        },
        {
          title: "Entretien et maintenance des sols durs",
          text: [
            "Préservez la propreté, l’éclat et la durée de vie de vos sols grâce à nos méthodes d’entretien adaptées à chaque type de revêtement : nettoyage mécanique, décapage, cirage, polissage et application de protections.",
          ],
        },
        {
          title: "Nettoyage de tapis et de tissus d’ameublement",
          text: [
            "Favorisez un air intérieur plus sain et des espaces plus propres grâce au nettoyage en profondeur des tapis, moquettes et tissus d’ameublement. Chez Solution d’entretien JR10, nos méthodes professionnelles permettent d’éliminer efficacement la poussière, les saletés et les taches accumulées, tout en contribuant à améliorer la qualité de l’air intérieur et à préserver l’apparence et la durée de vie de vos revêtements.",
          ],
        },
      ],
    },
    en: {
      intro: [
        "With 7 years of experience and a reputation built on excellence and a skilled workforce, we are a trusted partner for facility janitorial services in Drummondville and the surrounding area.",
        "Our commitment to quality and to the satisfaction of the clients we serve has earned us their loyalty. From small to medium-sized businesses, directly or as a subcontractor, we keep spaces healthy and spotless.",
      ],
      blocks: [
        {
          title: "Washrooms and sanitary facilities",
          text: [
            "Our goal: clean, hygienic and welcoming washrooms at all times. At Solution d’entretien JR10, we clean, disinfect and regularly maintain your sanitary facilities. Our teams pay close attention to the regular, thorough cleaning of toilets, sinks, surfaces and contact points, as well as the disinfection of frequently touched areas.",
            "Using professional products and rigorous work methods, we help keep your washrooms clean, disinfected, welcoming and in line with your hygiene requirements.",
          ],
        },
        {
          title: "Hard floor care and maintenance",
          text: [
            "Preserve the cleanliness, shine and lifespan of your floors with maintenance methods suited to each type of surface: machine cleaning, stripping, waxing, polishing and protective coatings.",
          ],
        },
        {
          title: "Carpet and upholstery cleaning",
          text: [
            "Promote healthier indoor air and cleaner spaces with deep cleaning of carpets, rugs and upholstery. At Solution d’entretien JR10, our professional methods effectively remove accumulated dust, dirt and stains, while helping improve indoor air quality and preserve the appearance and lifespan of your surfaces.",
          ],
        },
      ],
    },
  },
  "apres-construction": {
    fr: {
      intro: [
        "Après des travaux de construction ou de rénovation, nous redonnons à votre espace toute sa propreté et son éclat. Notre équipe prend en charge le nettoyage en profondeur des résidus de chantier, notamment la poussière, les traces de peinture, les résidus de matériaux et les saletés accumulées pendant les travaux. Nous accordons une attention particulière aux planchers, fenêtres, surfaces, armoires et autres éléments afin de vous livrer un espace propre, impeccable et prêt à être habité. Avec Solution d’entretien JR10, chaque détail compte pour créer une ambiance véritablement impeccable.",
      ],
      blocks: [
        {
          title: "Nettoyage après-construction",
          lists: [
            {
              items: [
                "Élimination des résidus de poussière",
                "Époussetage des surfaces",
                "Lavage des vitres intérieures et extérieures",
                "Aspiration des tapis",
                "Récurage des planchers",
              ],
            },
          ],
        },
        {
          title: "Nettoyage et désinfection de roulottes de chantier",
          lead: "Un environnement propre et sain pour vos équipes de chantier !",
          text: [
            "Confiez à Solution d’entretien JR10 le nettoyage et la désinfection de vos roulottes de chantier, bureaux temporaires et blocs sanitaires.",
            "Nous offrons un service d’entretien minutieux et adapté aux besoins des entrepreneurs en construction, afin de maintenir des espaces de travail propres, accueillants et hygiéniques pour vos employés.",
          ],
          lists: [
            {
              title: "Nos services",
              items: [
                "Roulottes de chantier",
                "Bureaux temporaires de chantier",
                "Blocs sanitaires",
              ],
            },
            {
              title: "Notre service comprend",
              items: [
                "Ramassage des déchets visibles sur les tables et dans les espaces de travail",
                "Vidage et nettoyage des poubelles",
                "Nettoyage des surfaces fréquemment touchées : poignées de porte, interrupteurs, thermostats et autres points de contact",
                "Nettoyage des équipements et accessoires : réfrigérateurs, micro-ondes, machines à café, fontaines d’eau, imprimantes et écrans d’ordinateur",
                "Nettoyage des tables, bureaux et chaises",
                "Nettoyage et désinfection des salles de bain",
                "Nettoyage des portes et des cadrages de fenêtres",
                "Nettoyage des vitres intérieures accessibles",
                "Passage de l’aspirateur",
                "Lavage des planchers",
                "Application d’un désinfectant adapté aux surfaces, selon les directives du fabricant",
              ],
            },
          ],
        },
      ],
    },
    en: {
      intro: [
        "After construction or renovation work, we restore your space to its full cleanliness and shine. Our team takes care of deep cleaning construction residue, including dust, paint marks, material debris and dirt accumulated during the work. We pay special attention to floors, windows, surfaces, cabinets and other elements so we can hand over a clean, spotless space that is ready to move into. With Solution d’entretien JR10, every detail counts in creating a truly impeccable atmosphere.",
      ],
      blocks: [
        {
          title: "Post-construction cleaning",
          lists: [
            {
              items: [
                "Removal of dust residue",
                "Surface dusting",
                "Interior and exterior window washing",
                "Carpet vacuuming",
                "Floor scrubbing",
              ],
            },
          ],
        },
        {
          title: "Construction site trailer cleaning and disinfection",
          lead: "A clean, healthy environment for your site crews!",
          text: [
            "Trust Solution d’entretien JR10 to clean and disinfect your site trailers, temporary offices and sanitary units.",
            "We offer thorough cleaning tailored to the needs of construction contractors, keeping workspaces clean, welcoming and hygienic for your employees.",
          ],
          lists: [
            {
              title: "Our services",
              items: ["Site trailers", "Temporary site offices", "Sanitary units"],
            },
            {
              title: "Our service includes",
              items: [
                "Picking up visible waste on tables and in work areas",
                "Emptying and cleaning garbage bins",
                "Cleaning frequently touched surfaces: door handles, light switches, thermostats and other contact points",
                "Cleaning equipment and accessories: refrigerators, microwaves, coffee machines, water fountains, printers and computer screens",
                "Cleaning tables, desks and chairs",
                "Cleaning and disinfecting washrooms",
                "Cleaning doors and window frames",
                "Cleaning accessible interior windows",
                "Vacuuming",
                "Floor washing",
                "Applying a disinfectant suited to the surfaces, according to the manufacturer’s instructions",
              ],
            },
          ],
        },
      ],
    },
  },
  vitres: {
    fr: {
      intro: [
        "Solution d’entretien JR10 apporte à vos espaces une transparence et une propreté remarquables. Nous prenons soin avec minutie de vos vitres intérieures et de vos fenêtres extérieures accessibles, résidentielles et commerciales, afin de leur redonner tout leur éclat, que ce soit pour un entretien ponctuel ou saisonnier.",
      ],
      blocks: [
        {
          title: "Notre service comprend",
          lists: [
            {
              items: [
                "Nettoyage intérieur et extérieur des vitres",
                {
                  t: "Nettoyage des moustiquaires",
                  d: "lavage complet à l’eau, brossage et séchage.",
                },
                {
                  t: "Nettoyage des rails et rebords",
                  d: "aspiration des débris et essuyage humide des contours de fenêtres.",
                },
              ],
            },
          ],
        },
      ],
    },
    en: {
      intro: [
        "Solution d’entretien JR10 brings remarkable clarity and cleanliness to your spaces. We carefully clean your interior windows and accessible exterior windows, residential and commercial, to restore their full shine, whether for one-time or seasonal maintenance.",
      ],
      blocks: [
        {
          title: "Our service includes",
          lists: [
            {
              items: [
                "Interior and exterior window cleaning",
                { t: "Screen cleaning", d: "full water wash, brushing and drying." },
                {
                  t: "Track and sill cleaning",
                  d: "vacuuming of debris and damp wiping around window frames.",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  "tapis-carpettes": {
    fr: {
      intro: [
        "Avec le temps, les tapis accumulent poussière, saletés et odeurs. Notre service de nettoyage en profondeur permet de prolonger la durée de vie du tapis, de raviver les fibres et de redonner fraîcheur et propreté à vos espaces. Notre équipe, soigneusement formée et équipée, vous garantit un résultat impeccable et l’amélioration de la qualité de l’air intérieur.",
      ],
      blocks: [
        {
          title: "Nos traitements",
          lists: [
            {
              items: [
                {
                  t: "Nettoyage en profondeur",
                  d: "chez Solution d’entretien JR10, notre méthode d’extraction permet de déloger efficacement les saletés incrustées, les résidus secs et les dépôts huileux. Idéale pour les tapis très sollicités, elle redonne fraîcheur, propreté et éclat aux fibres.",
                },
                {
                  t: "Protection anti-taches",
                  d: "en option, Solution d’entretien JR10 offre un traitement protecteur spécialement conçu pour les fibres du tapis. Il aide à limiter la pénétration des liquides et à faciliter l’élimination des taches, tout en préservant l’apparence du tapis. Le traitement est évalué selon l’état et le type de tapis.",
                },
                {
                  t: "Traitement désinfectant et désodorisant",
                  d: "nous appliquons des traitements professionnels adaptés aux fibres du tapis afin de réduire les micro-organismes indésirables et de neutraliser les mauvaises odeurs à la source. Un traitement efficace pour retrouver des tapis plus frais, propres et agréables.",
                },
              ],
            },
          ],
        },
      ],
    },
    en: {
      intro: [
        "Over time, carpets build up dust, dirt and odours. Our deep cleaning service extends the life of your carpet, revives its fibres and brings freshness and cleanliness back to your spaces. Our carefully trained and fully equipped team guarantees spotless results and better indoor air quality.",
      ],
      blocks: [
        {
          title: "Our treatments",
          lists: [
            {
              items: [
                {
                  t: "Deep cleaning",
                  d: "at Solution d’entretien JR10, our extraction method effectively loosens embedded dirt, dry residue and oily deposits. Ideal for heavily used carpets, it restores freshness, cleanliness and brightness to the fibres.",
                },
                {
                  t: "Stain protection",
                  d: "as an option, Solution d’entretien JR10 offers a protective treatment designed for carpet fibres. It helps limit liquid penetration and makes stains easier to remove, while preserving the carpet’s appearance. The treatment is assessed according to the carpet’s condition and type.",
                },
                {
                  t: "Disinfecting and deodorizing treatment",
                  d: "we apply professional treatments suited to carpet fibres to reduce unwanted micro-organisms and neutralize bad odours at the source. An effective treatment for fresher, cleaner and more pleasant carpets.",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  "tissus-ameublement": {
    fr: {
      intro: [
        "Avec Solution d’entretien JR10, redonnez fraîcheur et propreté à vos sofas, fauteuils, chaises rembourrées et mobilier commercial. Nous éliminons les saletés, traitons les taches courantes et aidons à réduire les odeurs désagréables. Nos produits et techniques sont adaptés aux tissus afin de préserver leur couleur et leur apparence. JR10 : des meubles propres et frais pour un intérieur accueillant !",
        upholsteryIntroFr,
      ],
      blocks: [
        {
          title: "Nos services",
          lists: [
            {
              items: [
                {
                  t: "Nettoyage de sofas et divans",
                  d: "nettoyage en profondeur des tissus, élimination des saletés accumulées et traitement des taches courantes.",
                },
                {
                  t: "Nettoyage de fauteuils et de chaises rembourrées",
                  d: "nettoyage des assises, dossiers, accoudoirs et autres surfaces en tissu.",
                },
                {
                  t: "Nettoyage de mobilier commercial",
                  d: "entretien des fauteuils, chaises de bureau, banquettes et meubles rembourrés dans les commerces et bureaux.",
                },
              ],
            },
          ],
        },
        {
          title: "Autres services complémentaires",
          lists: [{ items: upholsteryExtrasFr }],
        },
      ],
    },
    en: {
      intro: [
        "With Solution d’entretien JR10, bring freshness and cleanliness back to your sofas, armchairs, upholstered chairs and commercial furniture. We remove dirt, treat common stains and help reduce unpleasant odours. Our products and techniques are suited to each fabric to preserve its colour and appearance. JR10: clean, fresh furniture for a welcoming interior!",
        upholsteryIntroEn,
      ],
      blocks: [
        {
          title: "Our services",
          lists: [
            {
              items: [
                {
                  t: "Sofa and couch cleaning",
                  d: "deep fabric cleaning, removal of accumulated dirt and treatment of common stains.",
                },
                {
                  t: "Armchair and upholstered chair cleaning",
                  d: "cleaning of seats, backrests, armrests and other fabric surfaces.",
                },
                {
                  t: "Commercial furniture cleaning",
                  d: "care for armchairs, office chairs, booths and upholstered furniture in stores and offices.",
                },
              ],
            },
          ],
        },
        {
          title: "Additional services",
          lists: [{ items: upholsteryExtrasEn }],
        },
      ],
    },
  },
  planchers: {
    fr: {
      intro: [
        "Les halls d’entrée, les corridors et les espaces de travail à fort achalandage sont quotidiennement exposés à la poussière, aux saletés, aux intempéries et à l’usure causée par les déplacements fréquents.",
        "Chez Solution d’entretien JR10, nous mettons notre expertise au service de l’entretien et de la préservation de vos sols commerciaux. Grâce à des méthodes de nettoyage adaptées à chaque type de revêtement, à des produits professionnels et à une attention particulière portée aux détails, nous contribuons à maintenir vos planchers propres, sécuritaires et impeccables.",
        "Notre approche permet non seulement d’améliorer l’apparence de vos espaces, mais également de préserver vos revêtements et de prolonger leur durée de vie. Nous adaptons nos services à vos besoins et à la fréquence d’utilisation de vos installations afin de vous offrir un entretien fiable, constant et professionnel.",
      ],
      highlights: ["Nettoyage en profondeur", "Équipements de pointe"],
      blocks: [],
    },
    en: {
      intro: [
        "Entrance halls, corridors and high-traffic workspaces are exposed every day to dust, dirt, weather and the wear caused by constant foot traffic.",
        "At Solution d’entretien JR10, we put our expertise to work maintaining and preserving your commercial floors. With cleaning methods suited to each type of surface, professional products and close attention to detail, we help keep your floors clean, safe and spotless.",
        "Our approach not only improves the look of your spaces, it also preserves your floor coverings and extends their lifespan. We tailor our services to your needs and to how often your facilities are used, for reliable, consistent and professional maintenance.",
      ],
      highlights: ["Deep cleaning", "State-of-the-art equipment"],
      blocks: [],
    },
  },
  "renovation-planchers": {
    fr: {
      intro: [
        "Pour rehausser l’esthétique de vos locaux, Solution d’entretien JR10 vous propose de rénover vos sols par le décapage, le cirage ou le polissage de vos parquets, carrelages, marbres ou même sols stratifiés. En plus de redonner brillance et douceur, notre équipe de nettoyage de sols professionnelle prolonge leur durée de vie en réduisant l’usure, pour tous types de sols. Les résultats sont exceptionnels et durables.",
      ],
      blocks: [
        {
          title: "Notre démarche",
          lists: [
            {
              items: [
                "Évaluation du type de revêtement de sol",
                {
                  t: "Application de la méthode de rénovation la plus adaptée selon :",
                  sub: [
                    "Une surface souple : décapage et nouvelle application de finition",
                    "Une surface de sol dure : ponçage et scellement de la pierre naturelle",
                  ],
                },
                "Application de revêtements protecteurs pour contrer l’usure, imperméabiliser et faciliter l’entretien",
                "Application de traitements antidérapants pour prévenir les risques de glissade et de chute",
              ],
            },
          ],
        },
      ],
    },
    en: {
      intro: [
        "To enhance the look of your premises, Solution d’entretien JR10 offers floor restoration by stripping, waxing or polishing your hardwood, tile, marble or even laminate floors. Beyond restoring shine and smoothness, our professional floor cleaning team extends their lifespan by reducing wear, on every type of floor. The results are exceptional and long-lasting.",
      ],
      blocks: [
        {
          title: "Our approach",
          lists: [
            {
              items: [
                "Assessment of the floor covering",
                {
                  t: "The most suitable restoration method, depending on:",
                  sub: [
                    "A resilient surface: stripping and a new finish",
                    "A hard floor surface: sanding and sealing of natural stone",
                  ],
                },
                "Protective coatings to resist wear, waterproof and make maintenance easier",
                "Anti-slip treatments to prevent slips and falls",
              ],
            },
          ],
        },
      ],
    },
  },
  "grand-menage": {
    fr: {
      intro: ["Un grand ménage où le travail minutieux crée une ambiance impeccable."],
      blocks: [
        {
          title: "Les avantages d’un grand ménage",
          lists: [
            {
              items: [
                "Pour profiter d’un service de qualité supérieure",
                "Pour jouir du résultat d’un travail de haute qualité",
                "Pour éviter les risques de blessures",
                "Pour éviter toutes sortes de dégâts pour lesquels vos assurances ne vous couvrent pas",
                "Pour profiter pleinement de votre temps libre !",
              ],
            },
          ],
          after: [
            "Pour un grand ménage complet, efficace et méticuleux, confiez-nous votre espace en toute confiance dès aujourd’hui.",
          ],
        },
        {
          title: "L’avantage d’un service professionnel",
          text: [
            "Faire appel à des professionnels pour un grand ménage, c’est choisir la tranquillité d’esprit. Avec la diversité des matériaux, des finis et des décorations, chaque surface mérite une attention particulière. Chez Solution d’entretien JR10, nous utilisons des outils et des produits adaptés afin de nettoyer vos surfaces efficacement, tout en respectant leur nature et leur finition. Qu’il s’agisse de meubles en bois, d’objets décoratifs délicats ou de murs aux finis particuliers, chaque élément est traité avec soin et minutie. Confiez-nous votre grand ménage et profitez d’un résultat impeccable, en toute confiance !",
          ],
        },
        {
          title: "Un grand ménage pour créer une ambiance impeccable",
          text: [
            "Que ce soit pour accueillir une nouvelle saison ou redonner un coup de fraîcheur à votre demeure, un grand ménage demande du temps et de l’énergie. Avec nos services personnalisés et nos forfaits à la carte, nous prenons soin de votre intérieur jusque dans les moindres détails. Retrouvez une maison propre, fraîche et accueillante, et profitez pleinement de votre espace de vie !",
          ],
        },
        {
          title: "Nettoyage de tapis et carpettes",
          text: [
            "Le nettoyage des tapis et des carpettes est effectué avec soin, minutie et selon les meilleures pratiques. Nos produits et techniques de nettoyage respectent les indications du fabricant et aident à conserver l’apparence d’origine de vos tapis et carpettes. Le temps de séchage dépend d’un grand nombre de paramètres : le taux d’humidité ambiant, la température, la circulation de l’air, le type de fibre, l’épaisseur du tapis, le type et l’épaisseur du sous-tapis, et la quantité d’eau nécessaire pour obtenir un nettoyage de qualité.",
          ],
        },
        {
          title: "Nettoyage des murs et/ou plafonds",
          text: [
            "Nous adaptons nos techniques de nettoyage à chaque type de mur et de plafond afin d’en préserver la beauté et de raviver leur éclat. Un travail soigné et attentionné pour une maison propre et rafraîchie jusque dans les moindres détails.",
          ],
          lists: [
            {
              items: [
                {
                  t: "Nettoyage « humide »",
                  d: "les surfaces sont lavées avec un nettoyant-dégraisseur performant, puis rincées, si besoin, avec un agent de rinçage rééquilibrant le pH.",
                },
                {
                  t: "Nettoyage « à sec »",
                  d: "les surfaces sont nettoyées et époussetées avec des chiffons spécialement traités. Ce type de nettoyage s’appelle également « époussetage à l’huile neutre sèche ».",
                },
              ],
            },
          ],
        },
        {
          title: "Nettoyage des sols",
          text: [
            "Le lavage des sols s’effectue à la serpillière avec une solution composée d’eau froide et d’un nettoyant spécial, choisi en fonction de votre type de revêtement de sol.",
          ],
        },
        {
          title: "Lavage des fenêtres",
          text: ["Options pour le nettoyage de vos fenêtres :"],
          lists: [
            {
              items: [
                {
                  t: "Fenêtres intérieures et extérieures",
                  d: "les vitres et les cadres de fenêtres donnant sur l’intérieur de la résidence ainsi que les surfaces vitrées extérieures sont lavés.",
                },
                {
                  t: "Fenêtres intérieures seulement",
                  d: "les vitres et les cadres de fenêtres donnant sur l’intérieur de la résidence sont lavés.",
                },
                {
                  t: "Fenêtres extérieures seulement",
                  d: "les surfaces vitrées extérieures sont lavées.",
                },
              ],
            },
          ],
          after: [
            "Nous nettoyons avec soin, en portant une attention particulière aux moustiquaires, aux rails et aux rebords.",
          ],
        },
        {
          title: "Nettoyage des tissus de recouvrement des meubles",
          text: [upholsteryIntroFr],
          lists: [
            {
              items: [
                {
                  t: "Nettoyage de sofas et divans",
                  d: "nettoyage en profondeur des tissus, élimination des saletés accumulées et traitement des taches courantes.",
                },
                {
                  t: "Nettoyage de fauteuils et de chaises rembourrées",
                  d: "nettoyage des assises, dossiers, accoudoirs et autres surfaces en tissu.",
                },
                {
                  t: "Nettoyage de chaises de salle à manger",
                  d: "entretien des tissus des sièges et dossiers pour rafraîchir leur apparence.",
                },
              ],
            },
            {
              title: "Autres services complémentaires",
              items: [
                ...upholsteryExtrasFr.slice(0, 2),
                {
                  t: "Nettoyage des poils d’animaux",
                  d: "retrait des poils et des résidus en surface.",
                },
                ...upholsteryExtrasFr.slice(2),
              ],
            },
          ],
        },
        {
          title: "Vos autres besoins de nettoyage",
          text: [
            "Nettoyage en profondeur du four, nettoyage de l’intérieur du réfrigérateur, nettoyage des armoires ainsi que de leur contenu… Nous répondrons à toutes vos demandes spéciales !",
          ],
        },
      ],
    },
    en: {
      intro: ["A deep clean where meticulous work creates an impeccable atmosphere."],
      blocks: [
        {
          title: "The benefits of a deep clean",
          lists: [
            {
              items: [
                "Enjoy superior-quality service",
                "Enjoy the results of high-quality work",
                "Avoid the risk of injury",
                "Avoid all kinds of damage your insurance may not cover",
                "Make the most of your free time!",
              ],
            },
          ],
          after: [
            "For a complete, efficient and meticulous deep clean, trust us with your space today.",
          ],
        },
        {
          title: "The advantage of a professional service",
          text: [
            "Hiring professionals for a deep clean means choosing peace of mind. With so many different materials, finishes and decorations, every surface deserves special attention. At Solution d’entretien JR10, we use suitable tools and products to clean your surfaces effectively while respecting their nature and finish. Whether it is wooden furniture, delicate decorative objects or walls with special finishes, every item is handled with care and precision. Trust us with your deep clean and enjoy spotless results with complete confidence!",
          ],
        },
        {
          title: "A deep clean for an impeccable atmosphere",
          text: [
            "Whether to welcome a new season or give your home a fresh start, a deep clean takes time and energy. With our personalized services and à la carte packages, we take care of your home down to the smallest detail. Come home to a clean, fresh and welcoming house and enjoy your living space to the fullest!",
          ],
        },
        {
          title: "Carpet and rug cleaning",
          text: [
            "Carpets and rugs are cleaned with care, precision and according to best practices. Our cleaning products and techniques follow the manufacturer’s instructions and help preserve the original appearance of your carpets and rugs. Drying time depends on many factors: ambient humidity, temperature, air circulation, fibre type, carpet thickness, the type and thickness of the underlay, and the amount of water needed for a quality clean.",
          ],
        },
        {
          title: "Wall and/or ceiling cleaning",
          text: [
            "We adapt our cleaning techniques to each type of wall and ceiling to preserve their beauty and revive their brightness. Careful, attentive work for a home that is clean and refreshed down to the smallest detail.",
          ],
          lists: [
            {
              items: [
                {
                  t: "“Wet” cleaning",
                  d: "surfaces are washed with a high-performance cleaner-degreaser, then rinsed if needed with a pH-balancing rinse agent.",
                },
                {
                  t: "“Dry” cleaning",
                  d: "surfaces are cleaned and dusted with specially treated cloths. This method is also known as “dry neutral oil dusting”.",
                },
              ],
            },
          ],
        },
        {
          title: "Floor cleaning",
          text: [
            "Floors are mopped with a solution of cold water and a special cleaner chosen for your type of floor covering.",
          ],
        },
        {
          title: "Window washing",
          text: ["Options for cleaning your windows:"],
          lists: [
            {
              items: [
                {
                  t: "Interior and exterior windows",
                  d: "the glass and window frames facing the inside of the home, as well as the exterior glass surfaces, are washed.",
                },
                {
                  t: "Interior windows only",
                  d: "the glass and window frames facing the inside of the home are washed.",
                },
                { t: "Exterior windows only", d: "the exterior glass surfaces are washed." },
              ],
            },
          ],
          after: ["We clean with care, paying special attention to screens, tracks and sills."],
        },
        {
          title: "Upholstery cleaning",
          text: [upholsteryIntroEn],
          lists: [
            {
              items: [
                {
                  t: "Sofa and couch cleaning",
                  d: "deep fabric cleaning, removal of accumulated dirt and treatment of common stains.",
                },
                {
                  t: "Armchair and upholstered chair cleaning",
                  d: "cleaning of seats, backrests, armrests and other fabric surfaces.",
                },
                {
                  t: "Dining chair cleaning",
                  d: "care for seat and backrest fabrics to refresh their appearance.",
                },
              ],
            },
            {
              title: "Additional services",
              items: [
                ...upholsteryExtrasEn.slice(0, 2),
                { t: "Pet hair removal", d: "removal of hair and surface residue." },
                ...upholsteryExtrasEn.slice(2),
              ],
            },
          ],
        },
        {
          title: "Your other cleaning needs",
          text: [
            "Deep oven cleaning, refrigerator interior cleaning, cleaning of cupboards and their contents… We will handle all your special requests!",
          ],
        },
      ],
    },
  },
};
