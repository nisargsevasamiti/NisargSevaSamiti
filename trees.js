const trees = [
    {
        name: "Orchid Tree / Bauhinia",
        marathiName: "कांचन",
        scientific: "Bauhinia variegata",
        geographicRange: "South and Southeast Asia",
        idealEnvironment: "Subtropical and tropical climates, prefers well-drained loamy soil",
        primaryUses: "Ornamental cultivation, traditional medicine, and eco-restoration",
        description: "Features gorgeous purple, pink, or white flowers resembling true orchids. Extensively planted along avenues for aesthetic landscapes.",
        image: "images/kanchan.jpg"
    },
    {
        name: "Blue Jacaranda",
        marathiName: "निळा गुलमोहर",
        scientific: "Jacaranda mimosifolia",
        geographicRange: "Native to South America, widely naturalized across India",
        idealEnvironment: "Warm, frost-free regions with full sunlight access",
        primaryUses: "Ornamental landscaping, urban avenue shade, and light carpentry wood",
        description: "Striking deciduous tree renowned globally for its majestic clusters of lavender-blue bell-shaped flowers.",
        image: "images/nila-gulmohar.jpg"
    },
    {
        name: "Royal Poinciana / Flamboyant",
        marathiName: "गुलमोहर",
        scientific: "Delonix regia",
        geographicRange: "Native to Madagascar, broadly distributed across tropical India",
        idealEnvironment: "Tropical and subtropical regions, drought-tolerant once fully established",
        primaryUses: "Excellent shade production, landscape accentuation, and soil erosion control",
        description: "Famous for its expansive, umbrella-shaped canopy and vivid explosions of fiery red-orange flowers during peak summer.",
        image: "images/gulmohar.jpg"
    },
    {
        name: "African Tulip Tree",
        marathiName: "स्पथोडीया",
        scientific: "Spathodea campanulata",
        geographicRange: "Native to Tropical Africa, widely planted in parks across India",
        idealEnvironment: "Humid tropical climates, requires moist, deep, fertile soils",
        primaryUses: "Ornamental park structures, ecological shade, and attracting native pollinators",
        description: "Bears large crimson or bright orange trumpet-shaped flowers that capture rainwater, serving as drinking hubs for local birds.",
        image: "images/spathodea.jpg"
    },
    {
        name: "Chironji / Almondette",
        marathiName: "चारोळी",
        scientific: "Buchanania lanzan",
        geographicRange: "Hot, dry deciduous forest ecosystems across Central India",
        idealEnvironment: "Arid climates, thrives on rocky, hard terrains with low watering",
        primaryUses: "Edible nut kernels (Chironji), medical tonics, and forest revenue generation",
        description: "An socio-economically vital tree producing highly nutritious seeds commonly toasted and used in traditional Indian confectioneries.",
        image: "images/charoli.jpg"
    },
    {
        name: "Ashoka Tree",
        marathiName: "अशोका",
        scientific: "Saraca asoca",
        geographicRange: "Native to India and Sri Lanka, common across urban centers",
        idealEnvironment: "Tropical regions with full sun, adaptable to compact soils",
        primaryUses: "Urban privacy screens, acoustic noise barriers, and avenue lane lining",
        description: "A tall, slender evergreen tree with unique weeping branches, widely cultivated to filter dust pollution and suppress street noise.",
        image: "images/ashoka.jpg"
    },
    {
        name: "Wood Apple",
        marathiName: "कवठ",
        scientific: "Limonia acidissima",
        geographicRange: "Dry, open plains across India and Sri Lanka",
        idealEnvironment: "Arid and dry deciduous zones, highly adaptive to drought vectors",
        primaryUses: "Edible fruit consumption, classical Ayurveda remedies, and religious rituals",
        description: "Yields large, hard-shelled round fruits with a pungent, aromatic pulp used extensively for native chutneys and digestive preserves.",
        image: "images/kavath.jpg"
    },
    {
        name: "Coromandel Ebony",
        marathiName: "टेंभूर्णी",
        scientific: "Diospyros melanoxylon",
        geographicRange: "Peninsular India, heavily concentrated in dry deciduous zones",
        idealEnvironment: "Rocky outcroppings, low rainfall patterns, and high temperature tolerance",
        primaryUses: "Bidi leaf harvesting, high-grade timber structures, and medicinal bark extractions",
        description: "A slow-growing forest tree known for its highly resilient charcoal-dark ebony heartwood and commercially gathered leaves.",
        image: "images/tembhurni.jpg"
    },
    {
        name: "Jackfruit",
        marathiName: "फणस",
        scientific: "Artocarpus heterophyllus",
        geographicRange: "Western Ghats of India, cultivated globally in wet tropics",
        idealEnvironment: "Humid tropical environments, thrives on deep, moist alluvial soilbeds",
        primaryUses: "Highly nutritious food supply, high-durability furniture timber, and eco-agroforestry",
        description: "Bears the largest tree-borne fruit in the world. The rich golden wood is highly valued for constructing musical instruments.",
        image: "images/fanas.jpg"
    },
    {
        name: "Spider Plant / Spider Tree",
        marathiName: "स्पायडर",
        scientific: "Chlorophytum comosum",
        geographicRange: "Indian subcontinent and parts of Southeast Asia",
        idealEnvironment: "Enjoys semi-aquatic riverbanks, glades, and wetlands",
        primaryUses: "Traditional kidney stone treatments, ornamental gardens, and ceremonial installations",
        description: "Sometimes called the Sacred Garlic Pear. Displays showy white-yellow blooms with long, delicate spider-like stamens.",
        image: "images/spider.jpg"
    },
    {
        name: "Golden Shower Tree",
        marathiName: "बहावा",
        scientific: "Cassia fistula",
        geographicRange: "Native to the Indian Subcontinent, highly integrated into folklore",
        idealEnvironment: "Dry deciduous territories, needs full sun exposure to flower fully",
        primaryUses: "Ornamental design, herbal laxatives, and natural wood dye processing",
        description: "Features hanging clusters of yellow flowers. It serves as the state flower of Kerala and is a key feature of spring festivals.",
        image: "images/bahava.jpg"
    },
    {
        name: "Indian Cork Tree",
        marathiName: "आकाश निम",
        scientific: "Millingtonia hortensis",
        geographicRange: "South and Southeast Asian forest fringes",
        idealEnvironment: "Deep loam, tropical climates, quick adaptation to urban pathways",
        primaryUses: "Commercial cork substitute bark, evening garden scenting, and architectural landscaping",
        description: "A tall, straight tree with deeply furrowed corky bark and drooping clusters of highly fragrant, white, tubular flowers.",
        image: "images/aakash-neem.jpg"
    },
    {
        name: "Bahera / Beleric",
        marathiName: "बेहडा",
        scientific: "Terminalia bellirica",
        geographicRange: "Plains and lower foothills throughout the Indian Subcontinent",
        idealEnvironment: "Moist deciduous forest settings with ample root space",
        primaryUses: "Crucial element of 'Triphala' medicine, leather tanning, and ink formulations",
        description: "A majestic forest giant whose seed kernels are highly valued in Ayurveda for supporting digestive health.",
        image: "images/behada.jpg"
    },
    {
        name: "Burflower Tree / Kadamba",
        marathiName: "कदम",
        scientific: "Neolamarckia cadamba",
        geographicRange: "Warm, wet river valleys across South and Southeast Asia",
        idealEnvironment: "Alluvial river borders, high moisture zones, and fast-draining soils",
        primaryUses: "Paper pulp industry, religious temple yards, and local shade canopies",
        description: "Deeply connected to Indian mythology. Produces unique, perfectly spherical, orange-scented flowers used for premium perfumes.",
        image: "images/kadam.jpg"
    },
    {
        name: "Pride of India",
        marathiName: "जारुळ",
        scientific: "Lagerstroemia speciosa",
        geographicRange: "Tropical moist deciduous forests, highly revered in Western India",
        idealEnvironment: "Wet riverine systems, tropical swamplands, and open marsh edges",
        primaryUses: "State flower of Maharashtra, waterlogging control, and heavy structural timber",
        description: "Produces mauve-purple blossoms. The leaves are traditionally brewed into an herbal tea to help regulate blood sugar levels.",
        image: "images/jarul.jpg"
    },
    {
        name: "Peepal / Sacred Fig",
        marathiName: "पीपल",
        scientific: "Ficus religiosa",
        geographicRange: "Broadly distributed across the entire Indian Subcontinent",
        idealEnvironment: "Highly versatile, grows on old walls, rocky terrain, and deep soils",
        primaryUses: "Continuous 24-hour oxygen release, ecosystem keystone, and spiritual hubs",
        description: "A long-lived sacred tree characterized by heart-shaped leaves with long tips. It provides shelter and food for hundreds of bird species.",
        image: "images/peepal.jpg"
    },
    {
        name: "Ironwood Tree",
        marathiName: "नागचाफा",
        scientific: "Mesua ferrea",
        geographicRange: "Wet evergreen mountain zones of Western Ghats and Northeast India",
        idealEnvironment: "Deep, moist evergreen valleys with high humidity conditions",
        primaryUses: "Fragrant incense flowers, heavy structural building timber, and skin oils",
        description: "Produces exceptionally hard timber. Features striking white flowers with a central mass of golden stamens that release a deep, rich scent.",
        image: "images/nagchafa.jpg"
    },
    {
        name: "Lucky Bean Tree / Child Life Tree",
        marathiName: "पुत्रंजिवा",
        scientific: "Putranjiva roxburghii",
        geographicRange: "Throughout tropical and subtropical regions of mainland India",
        idealEnvironment: "Alluvial soils, shaded evergreen patches, and river valleys",
        primaryUses: "Traditional protective charms, pediatric health tonics, and foliage windbreaks",
        description: "An elegant evergreen tree featuring dropping branchlets. Its hard, gray seeds are traditionally strung into rosaries and necklaces.",
        image: "images/putranjiva.jpg"
    },
    {
        name: "Oval-leaved Ehretia",
        marathiName: "खंडूचक्का",
        scientific: "Ehretia laevis",
        geographicRange: "Deciduous forests and scrublands of Central and Western India",
        idealEnvironment: "Dry, rocky terrains, open brushwood plains, and light soils",
        primaryUses: "Folk bone-healing treatments, cattle fodder, and structural agriculture tools",
        description: "A small, irregular tree celebrated in regional tribal remedies for its potent anti-inflammatory and bone-setting bark pastes.",
        image: "images/khanduchakka.jpg"
    },
    {
        name: "Cluster Fig",
        marathiName: "उंबर",
        scientific: "Ficus racemosa",
        geographicRange: "Widespread along perennial water courses across India",
        idealEnvironment: "Riparian buffer zones, moist groundwater areas, and deep loams",
        primaryUses: "Indicating subterranean water sources, wildlife feeding, and spiritual shrines",
        description: "A sacred tree that produces clusters of red figs directly on its main trunk and primary branches, feeding diverse forest fauna.",
        image: "images/umber.jpg"
    },
    {
        name: "Mango Tree",
        marathiName: "आंबा",
        scientific: "Mangifera indica",
        geographicRange: "Native to India, cultivated across all tropical territories",
        idealEnvironment: "Rich deep well-drained soil with distinct dry seasons to promote fruiting",
        primaryUses: "Fruit cultivation, heavy utility timber, and cultural festive decorations",
        description: "The national fruit tree of India, forming large canopies. It yields mangoes that are central to Indian culture and agriculture.",
        image: "images/aamba.jpg"
    },
    {
        name: "Haritaki / Chebulic Myrobalan",
        marathiName: "हिरडा",
        scientific: "Terminalia chebula",
        geographicRange: "Sub-Himalayan tracts and hill forests of Peninsular India",
        idealEnvironment: "Dry slopes, hillside terraces, and mixed forest soils",
        primaryUses: "Ayurvedic medicines, industrial leather tanning, and dye fixatives",
        description: "Revered in traditional medicine as the 'King of Healing' for its outstanding digestive and systemic cleansing properties.",
        image: "images/hirda.jpg"
    },
    {
        name: "Lemon Tree",
        marathiName: "लिंबू",
        scientific: "Citrus limon",
        geographicRange: "Cultivated comprehensively throughout South Asian home gardens",
        idealEnvironment: "Subtropical sunny spaces, well-drained sandy loams, moderate watering",
        primaryUses: "Culinary applications, Vitamin C sourcing, and food preservation",
        description: "A small, thorny evergreen tree producing bright yellow citrus fruits valued worldwide for juices, culinary zest, and cleaning uses.",
        image: "images/limbu.jpg"
    },
    {
        name: "Guava Tree",
        marathiName: "पेरू",
        scientific: "Psidium guajava",
        geographicRange: "Native to tropical America, fully integrated across rural India",
        idealEnvironment: "Adaptable to diverse soils, highly heat and drought tolerant",
        primaryUses: "Fresh fruit production, rich dietary fiber, and dynamic root stabilization",
        description: "A hardy fruit tree characterized by smooth, peeling bark and sweet, pink or white fleshed fruits loaded with antioxidants.",
        image: "images/peru.jpg"
    },
    {
        name: "Soapnut Tree",
        marathiName: "रिठा",
        scientific: "Sapindus mukorossi",
        geographicRange: "Himalayan foothills and higher rainfall zones of Western Ghats",
        idealEnvironment: "Deep clay loams, moist conditions, sub-temperate mountain valleys",
        primaryUses: "Eco-friendly natural laundry detergent, safe organic cosmetics, and jewelry polish",
        description: "Produces saponin-rich walnut-sized golden fruits used for centuries as an all-natural, biodegradable soap and hair cleanser.",
        image: "images/ritha.jpg"
    },
    {
        name: "Indian Beech",
        marathiName: "करंज",
        scientific: "Millettia pinnata / Pongamia pinnata",
        geographicRange: "Coastal systems, river floodplains, and arid internal India",
        idealEnvironment: "Highly saline conditions, poor soils, dry lands, and heavy downpours",
        primaryUses: "Biodiesel feedstock, treating skin ailments, and soil nitrogen enrichment",
        description: "A sturdy nitrogen-fixing tree whose seed oils are processed into sustainable biofuels and skin remedies.",
        image: "images/karanj.jpg"
    },
    {
        name: "Yellow Elder / Trumpetbush",
        marathiName: "तेकोमा",
        scientific: "Tecoma stans",
        geographicRange: "Native to the Americas, naturalized in urban landscaping throughout India",
        idealEnvironment: "Warm climates with full sun, highly tolerant of rocky soils and drought",
        primaryUses: "Ornamental lane screening, urban garden accents, and supporting honeybees",
        description: "A fast-growing, multi-stemmed large shrub or small tree covered in vibrant clusters of bell-shaped yellow flowers.",
        image: "images/tecoma.jpg"
    },
    {
        name: "Mahogany",
        marathiName: "महोगनी",
        scientific: "Swietenia mahagoni",
        geographicRange: "Introduced from tropical Americas, grown in commercial forestry tracts",
        idealEnvironment: "Deep, well-drained tropical forest soils with moderate moisture profiles",
        primaryUses: "Premium high-end furniture carpentry, cabinetmaking, and carbon storage",
        description: "A grand tree highly sought after for its rich, deep reddish-brown wood, which is durable and resists rot.",
        image: "images/mahagoni.jpg"
    },
    {
        name: "Indian Gooseberry",
        marathiName: "आवळा",
        scientific: "Phyllanthus emblica",
        geographicRange: "Subtropical and tropical dry deciduous forests across India",
        idealEnvironment: "Light to medium soils, thrives in open sunny clearings",
        primaryUses: "Concentrated Vitamin C sourcing, anti-aging tonics, and hair health care",
        description: "Produces translucent green fruits that are a foundation of Ayurvedic health formulations, known for their powerful antioxidant properties.",
        image: "images/aawla.jpg"
    },
    {
        name: "Red Silk Cotton Tree",
        marathiName: "काटसावर",
        scientific: "Bombax ceiba",
        geographicRange: "Tropical and subtropical regions across mainland India",
        idealEnvironment: "Alluvial river flats, moist valleys, requires ample growing space",
        primaryUses: "Insulating cotton fiber harvesting, matchstick wood production, and avenue shade",
        description: "A massive deciduous tree with spiked bark and large, fleshy red flowers that bloom on bare winter branches.",
        image: "images/katesavar.jpg"
    },
    {
        name: "Common Bamboo",
        marathiName: "बांबू",
        scientific: "Bambusa vulgaris",
        geographicRange: "Widespread along river banks and tropical forest areas",
        idealEnvironment: "Moist, loose soils, streamsides, adapts to diverse water conditions",
        primaryUses: "Eco-friendly construction scaffolding, handicraft weaving, and soil bank binding",
        description: "A remarkably fast-growing woody grass essential for sustainable architecture, providing excellent bank stabilization against soil erosion.",
        image: "images/bamboo.jpg"
    },
    {
        name: "Rayan / Ceylon Ironwood",
        marathiName: "खिर्णी",
        scientific: "Manilkara hexandra",
        geographicRange: "Central, Western, and Southern dry evergreen forests of India",
        idealEnvironment: "Dry monsoon climates, rocky inland terrains, sandy soils",
        primaryUses: "Edible summer berries, robust sapling grafting stock, and durable heavy poles",
        description: "A slow-growing evergreen tree yielding sweet, yellow, vitamin-rich berries during the peak summer months.",
        image: "images/khirni.jpg"
    },
    {
        name: "Arjuna Tree",
        marathiName: "अर्जुन",
        scientific: "Terminalia arjuna",
        geographicRange: "Grows naturally along riverbanks and dry riverbeds in Central India",
        idealEnvironment: "Moist, alluvial soils, stable river corridors, high water tables",
        primaryUses: "Traditional cardiovascular health tonics, timber, and riverbank stabilization",
        description: "Recognized by its smooth, flaking pink-gray bark, which is processed into a widely used tonic for heart health.",
        image: "images/arjun.jpg"
    },
    {
        name: "Tamarind",
        marathiName: "चिंच",
        scientific: "Tamarindus indica",
        geographicRange: "Introduced long ago from tropical Africa, naturalized across India",
        idealEnvironment: "Semi-arid tropical plains, highly resistant to heavy wind loads",
        primaryUses: "Culinary fruit pulp, highway shade canopies, and hard wood carvings",
        description: "A large, long-lived shade tree producing tart pods that are an essential flavoring element in South Indian cuisine.",
        image: "images/chinch.jpg"
    },
    {
        name: "True Ashoka",
        marathiName: "सीता अशोक",
        scientific: "Saraca asoca",
        geographicRange: "Central and Western Ghats, damp forest understories",
        idealEnvironment: "Shaded, humid rainforest environments near freshwater streams",
        primaryUses: "Traditional women's health remedies, sacred temple gardens, and ornamental landscaping",
        description: "A beautiful forest tree that produces dense, fragrant clusters of orange-yellow flowers that gradually turn deep crimson red.",
        image: "images/sita-ashok.jpg"
    },
    {
        name: "Bael / Wood Apple",
        marathiName: "बेल",
        scientific: "Aegle marmelos",
        geographicRange: "Dry, open hilly forests throughout the Indian Subcontinent",
        idealEnvironment: "Subtropical climates, highly adaptable to alkaline or degraded soils",
        primaryUses: "Sacred ritual offerings, treating chronic digestive disorders, and cooling summer drinks",
        description: "Dedicated to Lord Shiva. Produces a smooth, hard-shelled fruit containing a sweet, aromatic pulp used for therapeutic stomach juices.",
        image: "images/bel.jpg"
    },
    {
        name: "Marking Nut Tree",
        marathiName: "बिबा",
        scientific: "Semecarpus anacardium",
        geographicRange: "Sub-Himalayan tracts down to the hot plains of Peninsular India",
        idealEnvironment: "Dry deciduous outer forests, sunny open slopes",
        primaryUses: "Traditional fabric marking inks, industrial varnishes, and traditional joint care",
        description: "Produces a unique nut whose dark, resinous juice was historically used across India as an indelible ink for marking textiles.",
        image: "images/biba.jpg"
    },
    {
        name: "Banyan Tree",
        marathiName: "वड",
        scientific: "Ficus benghalensis",
        geographicRange: "Widespread and highly revered across the entire Indian Subcontinent",
        idealEnvironment: "Extremely adaptable, needs vast spatial clearances to branch out safely",
        primaryUses: "Ecosystem foundation, expansive village assembly shade, and bird sanctuaries",
        description: "The National Tree of India, creating massive networks of shade by sending down heavy aerial roots that anchor into the soil as new trunks.",
        image: "images/vad.jpg"
    },
    {
        name: "Neem Tree",
        marathiName: "कडुनिंब",
        scientific: "Azadirachta indica",
        geographicRange: "Dry, arid zones across the Indian Subcontinent",
        idealEnvironment: "Thrives in hot, dry climates, handles poor, rocky, sandy soil types well",
        primaryUses: "Natural organic pest control, antibacterial skin care, and air quality purification",
        description: "An exceptional environmental cleanser known for its bitter leaves, which provide natural antibacterial, antifungal, and pest-repellent benefits.",
        image: "images/neem.jpg"
    },
    {
        name: "Spanish Cherry",
        marathiName: "बकुळ",
        scientific: "Mimusops elengi",
        geographicRange: "Coastal systems and Western Ghat damp forest tracks",
        idealEnvironment: "Humid tropical coastal bands, responds well to partial overhead shade",
        primaryUses: "Fragrant garland preparation, urban shade canopy, and long-lasting perfumes",
        description: "A medium-sized evergreen tree celebrated in classical Indian literature for its small, star-shaped cream flowers that retain their sweet scent long after falling.",
        image: "images/bakul.jpg"
    },
    {
        name: "Areca Palm / Butterfly Palm",
        marathiName: "पाम",
        scientific: "Dypsis lutescens",
        geographicRange: "Introduced from Madagascar, widely grown in urban Indian gardens",
        idealEnvironment: "Warm, humid conditions, bright indirect sunlight, rich porous soil bases",
        primaryUses: "Architectural property design, indoor air filtration, and decorative focal points",
        description: "An elegant, multi-stemmed clustering palm with upward-arching fronds, frequently used to soften urban hardscapes and filter indoor air toxins.",
        image: "images/palm.jpg"
    },
    {
        name: "Bottlebrush Tree",
        marathiName: "बोतल ब्रश",
        scientific: "Callistemon citrinus",
        geographicRange: "Introduced from Australia, widely planted across Indian suburban parks",
        idealEnvironment: "Moist soil conditions, full sun exposure, prefers neutral to acidic soil profiles",
        primaryUses: "Ornamental garden landscapes, lawn specimens, and attracting nectar-feeding birds",
        description: "A small, weeping tree instantly recognizable by its dense crimson flower spikes, which look exactly like kitchen bottle brushes.",
        image: "images/bottle-brush.jpg"
    },
    {
        name: "Flame of the Forest",
        marathiName: "पलाश",
        scientific: "Butea monosperma",
        geographicRange: "Open grasslands and dry plains across India",
        idealEnvironment: "Extremely tough, handles waterlogged clay, saline soils, and hot dry spells well",
        primaryUses: "Natural yellow-orange dyes, organic leaf plates, and restoring degraded wasteland",
        description: "Produces bright orange flowers that bloom in early spring, creating a beautiful 'flame' effect across dry landscapes.",
        image: "images/palash.jpg"
    },
    {
        name: "Red Sandalwood",
        marathiName: "रक्तचंदन",
        scientific: "Pterocarpus santalinus",
        geographicRange: "Endemic to the dry, hilly regions of the Eastern Ghats in India",
        idealEnvironment: "Hot, dry climates, stony, heavily degraded gravelly soils",
        primaryUses: "High-value cosmetics, specialized furniture carvings, and pharmaceutical extracts",
        description: "A highly protected, globally coveted timber tree valued for its dark, heavy, ruby-red heartwood.",
        image: "images/chandan-rakt.jpg"
    },
    {
        name: "Custard Apple",
        marathiName: "सीताफळ",
        scientific: "Annona squamosa",
        geographicRange: "Native to the Americas, completely naturalized in rocky regions of India",
        idealEnvironment: "Hot, dry climates, rocky hillsides, requires very minimal water care",
        primaryUses: "Fresh fruit production, ice-cream flavoring, and organic insecticide leaf sprays",
        description: "A small fruit tree that thrives on neglected rocky slopes, bearing sweet, green, knobby-skinned fruits filled with creamy custard-like flesh.",
        image: "images/sitafal.jpg"
    },
    {
        name: "Axlewood Tree",
        marathiName: "धावडा",
        scientific: "Anogeissus latifolia",
        geographicRange: "Dry deciduous forest tracts throughout India",
        idealEnvironment: "Dry, sun-baked rocky hillsides, shallow drought-prone soils",
        primaryUses: "Commercial industrial Ghatti gum, high-strength tool handles, and silk-worm feeding",
        description: "A valuable hardwood tree that produces 'Gum Ghatti', an important natural binding agent used extensively in pharmaceutical and food industries.",
        image: "images/dhavada.jpg"
    },
    {
        name: "Plumeria / Frangipani",
        marathiName: "चाफा",
        scientific: "Plumeria rubra",
        geographicRange: "Tropical Americas, planted around temples and parks across India",
        idealEnvironment: "Hot, sun-drenched areas, loose, fast-draining soils, highly drought resistant",
        primaryUses: "Devotional temple offerings, aromatherapy perfumes, and ornamental gardening",
        description: "Features thick, fleshy branches and iconic white-and-yellow flowers that release a deep, velvety fragrance, making it a favorite for temple grounds.",
        image: "images/chafa.jpg"
    },
    {
        name: "Bayur Tree / Dinnerplate Tree",
        marathiName: "कनकचंपा",
        scientific: "Pterospermum acerifolium",
        geographicRange: "Sub-Himalayan forest valleys and damp river channels",
        idealEnvironment: "Moist, shaded valley configurations, nutrient-rich soil beds",
        primaryUses: "Large-scale urban shade screens, natural rustic leaf plates, and packaging wrap",
        description: "Features huge, velvet-backed leaves that were traditionally used as rustic dinner plates. Bears beautiful, slender golden-white flowers.",
        image: "images/kanakchampa.jpg"
    },
    {
        name: "Ghost Tree",
        marathiName: "करू",
        scientific: "Sterculia urens",
        geographicRange: "Dry deciduous forest zones across central and western India",
        idealEnvironment: "Arid rocky hillsides, thin gravelly soils, high heat exposures",
        primaryUses: "Commercial gum karaya extraction, medicinal binders, and industrial thickeners",
        description: "Features a smooth, pale-whitish peeling bark that distinctively glows under moonlight.",
        image: "images/karu.jpg"
    },
    {
        name: "Yellow Flame Tree / Copperpod",
        marathiName: "सोनमोहर",
        scientific: "Peltophorum pterocarpum",
        geographicRange: "Native to coastal Southeast Asia, widely grown across inland Indian cities",
        idealEnvironment: "Highly resilient to urban air pollutants, adapts well to poor sandy soils",
        primaryUses: "Avenue canopy shade, landscape decoration, and soil organic matter enrichment",
        description: "A popular, fast-growing street tree that produces clusters of crinkled yellow flowers, carpeting city roads in bright yellow during blooming season.",
        image: "images/sonmohar.jpg"
    },
    {
        name: "Ceylon Oak",
        marathiName: "कुसुम",
        scientific: "Schleichera oleosa",
        geographicRange: "Sub-Himalayan tracts and dry, rocky valleys across Central India",
        idealEnvironment: "Rocky forest floors, dry riverbed margins, high seasonal temperature variations",
        primaryUses: "Host tree for premium lac insects, Macassar hair oils, and heavy structural timber",
        description: "Known for its beautiful bright red young leaves in spring. The seeds are pressed to extract traditional Macassar oil, used for hair and skin care.",
        image: "images/kusum.jpg"
    },
    {
        name: "Rudraksha Tree",
        marathiName: "रुद्राक्ष",
        scientific: "Elaeocarpus ganitrus",
        geographicRange: "Foot-hills of the Himalayas and moist evergreen forest pockets",
        idealEnvironment: "Humid, sub-temperate mountain environments, needs moist, acidic soil patches",
        primaryUses: "Sacred prayer beads, stress-relief therapies, and ecological hill preservation",
        description: "Produces bright blue fruits. The hard, deeply grooved inner stones are collected and used as sacred beads for spiritual practices.",
        image: "images/rudraksh.jpg"
    },
    {
        name: "Mahua Tree",
        marathiName: "मोह",
        scientific: "Madhuca longifolia",
        geographicRange: "Arid plains and dry forest belts of Central and Northern India",
        idealEnvironment: "Arid terrains, rocky or sandy wasteland soils, high heat tolerance",
        primaryUses: "Nutritious edible flowers, country soap oils, and supporting tribal livelihoods",
        description: "An invaluable economic resource for forest communities. The sweet, fleshy flowers are gathered for food, and the seeds yield rich oils for soaps and fuel.",
        image: "images/moha.jpg"
    },
    {
        name: "Indian Coral Tree",
        marathiName: "पांगारा",
        scientific: "Erythrina variegata",
        geographicRange: "Coastal and inland tropical forests across India",
        idealEnvironment: "Humid to semi-arid tropical zones, responds well to coastal sandy soils",
        primaryUses: "Living boundary fences, climbing vine supports (black pepper), and ornamental landscapes",
        description: "A fast-growing tree with protective thorny bark, known for its brilliant clusters of scarlet, pea-like flowers that attract diverse birds.",
        image: "images/pangara.jpg"
    },
    {
        name: "Lebbeck Tree / Siris",
        marathiName: "शिरस",
        scientific: "Albizia lebbeck",
        geographicRange: "Native throughout the Indian Subcontinent, highly adaptable",
        idealEnvironment: "Handles wide climatic variations, thrives in both humid and semi-arid conditions",
        primaryUses: "Fixing atmospheric soil nitrogen, building furniture timber, and nutritious livestock fodder",
        description: "Produces rounded, cream-puff flowers with a sweet scent. Its dry seed pods rattle in the wind, giving it the nickname 'Woman's Tongue' in some cultures.",
        image: "images/siras.jpg"
    },
    {
        name: "Shisham / North Indian Rosewood",
        marathiName: "शिसवी",
        scientific: "Dalbergia sissoo",
        geographicRange: "Sub-Himalayan river valleys and plains of Northern and Central India",
        idealEnvironment: "Porous alluvial soils, gravelly riverbanks, adapts well to sunshine",
        primaryUses: "Premium fine furniture wood, building construction, and land erosion control",
        description: "A valuable indigenous timber tree prized for its beautiful, dark-grained wood, which is exceptionally strong and resistant to warping.",
        image: "images/sisu.jpg"
    }
];