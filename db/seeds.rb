# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
Product.destroy_all
Product.connection.execute('ALTER SEQUENCE products_id_seq RESTART WITH 1')
Category.destroy_all
Category.connection.execute('ALTER SEQUENCE categories_id_seq RESTART WITH 1')
Shade.destroy_all
Shade.connection.execute('ALTER SEQUENCE shades_id_seq RESTART WITH 1')


# Users
demouser = User.create!(first_name: 'Demo', last_name: 'User', email: 'demouser@aurabeauty.com', password: '123456')

# Categories
face = Category.create!(name: "Face")
eye = Category.create!(name: "Eye")
lip = Category.create!(name: "Lip")
tools = Category.create!(name: "Tools")

# Products
# face:
foundation = Product.create!(
    name: "Liquid Touch Weightless Foundation",
    description: "Everyday foundation as it's meant to be. Weightless and breathable, with all-day medium to full coverage that melts into skin to look and feel like you.",
    details: "Weightless, smooth-glide formula dries to a natural, skin-like finish in 48 shades. Pure pigments are packed in a serum-like base, making it easier than ever to blend and build your coverage—a little goes a long way. Evens out skin tone and hides the look of pores. No clogging or caking. Lasts all day without drying you out or changing color on you. Convenient, mess-free doe-foot applicator.",
    ingredients: "Isohexadecane, Isododecane, C12-15 Alkyl Benzoate, Hydrogenated Polyisobutene, Isononyl Isononanoate, Synthetic Fluorphlogopite, PEG-10 Dimethicone, Trimethylsiloxysilicate, Disteardimonium Hectorite, Dimethicone, Silica, Propylene Carbonate, Triethoxycaprylylsilane, Helianthus Annuus (Sunflower) Seed Oil, Tocopherol, Gardenia Florida Fruit Extract, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Nymphaea Odorata Root Extract, Phenoxyethanol, Achillea Millefolium Flower/Leaf/Stem Extract, Ascophyllum Nodosum Extract, Panax Ginseng Root Extract, Passiflora Edulis (Passion Fruit) Fruit Extract, Tilia Cordata (Linden) Flower Extract, Tussilago Farfara (Coltsfoot) Leaf Extract, [+/- May Contain/Peut Contenir: Titanium Dioxide (CI 77891), Iron Oxides (CI 77491, CI 77492, CI 77499)].",
    how_to_use: "Be sure to moisturize first, then prep skin with Always an Optimist Illuminating Primer for best results. Shake it up to make sure the pigments are evenly dispersed throughout. Use the convenient doe-foot applicator to dot foundation onto your cheeks, forehead, and chin. Blend with your fingers, our Liquid Touch Foundation Brush, or our Liquid Touch Multi-Tasking Sponge (use wet). Less is more: Add a second layer only where needed.",
    price: 29,
    category_id: face.id
)

concealer = Product.create!(
    name: "Liquid Touch Brightening Concealer",
    description: "A lightweight, hydrating concealer that gives you buildable coverage where you need it while brightening skin with a radiant finish.",
    details: "Instantly hides what you want to hide - blemishes, dark circles, redness, fine lines- with medium buildable coverage and a radiant, skin-like finish. Creamy and hydrating, yet super long-lasting. Sweat-resistant, too. Blends like a dream to even out skin texture. Won't cake or settle into fine lines.",
    ingredients: "Water/Aqua/Eau, Dimethicone, Hydrogenated Didecene, Cetyl PEG/PPG-10/1 Dimethicone, Propanediol, Glycerin, Acrylates/Polytrimethylsiloxymethacrylate Copolymer, Boron Nitride, Polyglyceryl-4 Isostearate, Trimethylsiloxysilicate, Isododecane, Disodium Stearoyl Glutamate, Disteardimonium Hectorite, Hydroxyacetophenone, Oryza Sativa (Rice) Bran Wax, Sodium Chloride, Dimethicone Crosspolymer, Helianthus Annuus (Sunflower) Seed Oil, Caprylyl Glycol, 1,2-Hexanediol, Phenyl Trimethicone, Tocopheryl Acetate, Aluminum Hydroxide, Trisodium Ethylenediamine Disuccinate, Dimethiconol, Decyl Glucoside, Gardenia Florida Fruit Extract, Hexylene Glycol, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Nymphaea Odorata Root Extract, Phenoxyethanol, [+/- MAY CONTAIN / PEUT CONTENIR : Titanium Dioxide (CI 77891), Iron Oxides (CI 77491, CI 77492, CI 77499)].",
    how_to_use: "TIP: Each concealer shade is made to be the perfect match to your Liquid Touch Weightless Foundation shade! Dot concealer anywhere your skin could use a little extra love, like dark circles, blemishes, redness, or discoloration. Then, blend using your fingers or our Liquid Touch Concealer Brush. The unique, oversized applicator has a flat edge to sweep concealer onto larger areas of the face, and a pointed tip for more precise application. For the most seamless, second-skin finish, try blending with our Liquid Touch Multi-tasking Sponge.",
    price: 19,
    category_id: face.id
)

blush = Product.create!(
    name: "Soft Pinch Liquid Blush",
    description: "A weightless, long-lasting liquid blush that blends and builds beautifully for a soft, healthy flush. Available in both matte and dewy finishes.",
    details: "Airy, lightweight liquid formula blends and builds effortlessly for a soft flush of color. Infused with long-lasting color pigments for all-day wear—a little goes a long way. Mistake-proof, it layers beautifully over liquid/powder formulas without disturbing makeup. Available in matte and dewy finishes. Love – terracotta (matte) Faith – deep berry (matte) Happy – cool pink (dewy) Grateful – true red (dewy)",
    ingredients: "SHADES: HAPPY, GRATEFUL Hydrogenated Polyisobutene, Hydrogenated Poly(C6-14 Olefin), Mica, Octyldodecanol, Ethylene/Propylene/Styrene Copolymer, Trimethylsiloxysilicate, Isododecane, 1,2-Hexanediol, Disteardimonium Hectorite, Sorbitan Sesquioleate, Propylene Carbonate, Triethoxycaprylylsilane, Aluminum Hydroxide, Helianthus Annuus (Sunflower) Seed Oil, Gardenia Florida Fruit Extract, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Nymphaea Odorata Root Extract. [+/- May Contain/Peut Contenir: Iron Oxides (CI 77491), Red 7 Lake (CI 15850), Yellow 6 Lake (CI 15985), Titanium Dioxide (CI 77891), Yellow 5 Lake (CI 19140), Red 28 Lake (CI 45410)]. SHADE: LOVE Isododecane, Silica, Dimethicone, Methyl Trimethicone, Diisostearyl Malate, Trimethylsiloxysilicate, Diphenyl Dimethicone, Mica, Cera Microcristallina/Microcrystalline Wax/Cire microcrystalline, Silica Silylate, Disteardimonium Hectorite, C30-45 Alkyl Dimethicone, Dimethicone/Vinyl Dimethicone Crosspolymer, Sorbitan Isostearate, Propylene Carbonate, Phenoxyethanol, Caprylyl Glycol, 1,2-Hexanediol, Propanediol, Helianthus Annuus (Sunflower) Seed Oil, Illicium Verum (Anise) Fruit Extract, Gardenia Florida Fruit Extract, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Nymphaea Odorata Root Extract, [+/- May Contain/Peut Contenir: Titanium Dioxide (CI 77891), Red 28 Lake (CI 45410), Yellow 6 Lake (CI 15985), Iron Oxides (CI 77491), Iron Oxides (CI 77499), Red 7 Lake (CI 15850)]. SHADE: FAITH Isododecane, Methyl Trimethicone, Silica, Dimethicone, Diisostearyl Malate, Trimethylsiloxysilicate, Mica, Diphenyl Dimethicone, Cera Microcristallina/Microcrystalline Wax/Cire microcrystalline, Silica Silylate, Disteardimonium Hectorite, C30-45 Alkyl Dimethicone, Dimethicone/Vinyl Dimethicone Crosspolymer, Sorbitan Isostearate, Propylene Carbonate, Phenoxyethanol, Caprylyl Glycol, 1,2-Hexanediol, Propanediol, Helianthus Annuus (Sunflower) Seed Oil, Illicium Verum (Anise) Fruit Extract, Gardenia Florida Fruit Extract, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Nymphaea Odorata Root Extract, Blue 1 Lake (CI 42090), Iron Oxides (CI 77491), Iron Oxides (CI 77499), Red 7 Lake (CI 15850), Titanium Dioxide (CI 77891), Yellow 6 Lake (CI 15985).",
    how_to_use: "Gently remove excess product from applicator. Use the doe-foot applicator and place 1-2 dots on each cheek. Use fingertips and gently pat into skin for a seamless finish.",
    price: 20,
    category_id: face.id
)

highlight = Product.create!(
    name: "Positive Light Liquid Luminizer",
    description: "A silky, second-skin liquid highlighter that creates an instantly dewy, buildable glow while also nourishing skin so it looks on the bright side all day.",
    details: "Weightless liquid formula blends evenly for an instant wash of light that looks good on all skin tones. Superfine, light-catching pearls make it easy to take your glow from soft sheen to pure pop in seconds. Lasts all day without fading, creasing, or settling into fine lines. Layers well over makeup—liquids, powders, creams—without disturbing what's already there.",
    ingredients: "Isododecane, Mica, Hydrogenated Polyisobutene, Hydrogenated Olive Oil Unsaponifiables, Hydrogenated Styrene/Isoprene Copolymer, Octyldodecanol, Dimethicone, Gardenia Florida Fruit Extract, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Nymphaea Odorata Root Extract, Polyhydroxystearic Acid, Caprylic/Capric Triglyceride, Isostearic Acid, Helianthus Annuus (Sunflower) Seed Oil, Tin Oxide, Lecithin, Polyglyceryl-3 Polyricinoleate, Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate, [+/- May Contain: Titanium Dioxide (CI 77891), Iron Oxides (CI 77491, CI 77499)].",
    how_to_use: "Apply 1-2 dots directly over any areas you want to add a touch of glow—high points of cheeks, brow bone, the bridge of your nose. Blend with fingertips, brush, or our Liquid Touch Multi-tasking Sponge. TIP: For a soft, all-over glow, mix into your foundation or concealer.",
    price: 22,
    category_id: face.id
)

mist = Product.create!(
    name: "Always An Optimist 4-In-1 Mist",
    description: "An ultra-fine, all-in-one face mist packed with skin-loving ingredients to hydrate, prime, set, and refresh for an uplifting glow-boost that lasts.",
    details: "Cloud-like hydrating mist instantly calms and nourishes skin, while making it look and feel more plump, smooth, and ready for makeup. Boosts the life of your foundation—more seamless, less cakey. Just fresh all day. Perks up your skin—and your senses, too, thanks to its soft, uplifting botanical scent. Natural, radiant finish without feeling greasy or sticky.",
    ingredients: "Water/Aqua/Eau, Caprylic/Capric Triglyceride, Glycerin, Dipropylene Glycol, Niacinamide, 1,2-Hexanediol, Butylene Glycol, Panthenol, Allantoin, Betaine, Sodium Chloride, Squalane, Ethylhexylglycerin, Trehalose, Sodium Benzoate, Disodium EDTA, Olea Europaea (Olive) Fruit Oil, Citrus Aurantium Bergamia (Bergamot) Fruit Oil, Lavandula Angustifolia (Lavender) Oil, Sodium Hyaluronate, Gardenia Florida Fruit Extract, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Nymphaea Odorata Root Extract, Cananga Odorata Flower Oil, Citric Acid, Citrus Aurantium Dulcis (Orange) Oil, Cymbopogon Martini Oil, Pelargonium Graveolens Flower Oil, Michelia Alba Flower Oil, Eugenia Caryophyllus (Clove) Leaf Oil, Sodium Citrate, Eucalyptus Globulus Leaf Oil, Jasminum Officinale (Jasmine) Oil, Limonene, Linalool.",
    how_to_use: "Shake well to fully mix. With eyes closed, spritz 2-4 times at least 10 inches away from your face. This one's a true multitasker! Mist it on whenever, wherever: As a pre-makeup step, or in between layers of makeup to help everything meld together, or to set it all in place. And of course—throughout the day for a quick pick-me-up. You can use it without makeup, too!",
    price: 24,
    category_id: face.id
)

primer = Product.create!(
    name: "Always An Optimist Illuminating Primer",
    description: "A cooling, water-based gel primer that smoothes, hydrates, and illuminates skin, prepping you for makeup that looks and feels its best all day.",
    details: "Lightweight, non-sticky gel primer glides on evenly to smooth you out for the perfect base. Makeup applies better, and stays put longer, too. Cooling, water-based formula—no silicone here! Instantly soothes and nourishes skin with all-day hydration, so you stay feeling fresh under makeup. Ultra-fine pearls give skin a soft, lit-from-within glow.",
    ingredients: "Water/Aqua/Eau, Glycerin, Ethylhexyl Palmitate, Isohexadecane, Synthetic Fluorphlogopite, Acrylamide/Sodium Acryloyldimethyltaurate Copolymer, Caprylic/Capric Triglyceride, Helianthus Annuus (Sunflower) Seed Oil, Gardenia Florida Fruit Extract, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Nymphaea Odorata Root Extract, Phenoxyethanol, 1,2-Hexanediol, Polysorbate 80, Sorbitan Oleate, Tin Oxide, Titanium Dioxide (CI 77891), Iron Oxides (CI 77491).",
    how_to_use: "Apply 1-2 pumps to clean, moisturized skin, blending in with fingers. Then, follow with foundation and/or concealer. TIP: Feel like skipping makeup? Try this primer on its own! It's made with ultra-fine pearls that bounce light to create the look of a more even skin tone.",
    price: 26,
    category_id: face.id
)

blot = Product.create!(
    name: "Blot & Glow Touch-Up Kit",
    description: "A refillable 2-in-1 compact that teams up your touch-up essentials—blotting papers and a radiant powder-filled puff—for freshening up on the go.",
    details: "Cut shine—not glow—with these refillable mess-free, stress-free essentials. Unique linen-blend blotting sheets (100ct) gently absorb excess oil while keeping makeup in place. Universal pre-filled powder puff contains a radiant, talc-free powder. Dab it on for extra shine control with a soft blurring effect that never looks flat—and won't flash back.",
    ingredients: "Mica, Synthetic Fluorphlogopite, Silica, Squalane, Lauroyl Lysine, Triethoxycaprylylsilane, 1,2-Hexanediol, Glyceryl Caprylate, Iron Oxides (CI 77491), Iron Oxides (CI 77492), Iron Oxides (CI 77499).",
    how_to_use: "Touching up has never been this easy. Gently press an individual sheet of blotting paper over shiny areas of the face to absorb excess oil. Next, dab the pre-filled powder puff over shine-prone areas for a radiant, soft-focus finish.",
    price: 26,
    category_id: face.id
)

# eye:
liner = Product.create!(
    name: "Perfect Strokes Matte Liquid Liner",
    description: "An easy-glide, waterproof liquid eyeliner with over 1,000 vegan bristles to lay down long-lasting, ultra-black lines with perfect precision every time.",
    details: "Rich matte-black color in one perfect stroke—no skipping or snagging, even over eyeshadow! Easy, precise lines, thanks to the fine, flexible brush tip with over 1,000 soft vegan bristles. Specially made to ensure smooth, fluid ink flow from every angle. Long-lasting, waterproof formula won't fade, feather, or flake on you, so you get that just-applied look all day.",
    ingredients: "Water/Aqua/Eau, Styrene/Acrylates Copolymer, Propylene Glycol, Laureth-21, Pentylene Glycol, PEG-40 Hydrogenated Castor Oil, Phenoxyethanol, Ammonium Acrylates Copolymer, Caprylyl Glycol, PPG-2-Deceth-30, Sodium Dehydroacetate, Sodium Lauryl Sulfate, Disodium Laureth Sulfosuccinate, Black 2 (CI 77266)[NANO].",
    how_to_use: "Shake well to activate. Glide tip along your lash line for instant definition. The flexible brush tip is super versatile: Apply light pressure for thin lines, and add more pressure for thicker lines. Remember to store with the tip down whenever possible so the brush stays wet and ready to go between uses!",
    price: 19,
    category_id: eye.id
)

brow_pencil = Product.create!(
    name: "Brow Harmony Pencil And Gel",
    description: "A triangular-shaped retractable brow pencil with a complementary tinted brow gel to create naturally defined brows.",
    details: "Soft, buildable brow pencil features a triangular tip to help create any brow look you desire from natural and defined to bold and full. Weightless brow gel formula glides effortlessly and provides flexible hold. Natural-looking shades allow you to customize your desired intensity.",
    ingredients: "BROW GEL SHADES: SOFT BLONDE, WARM BROWN, DEEP BROWN Water/Aqua/Eau, Butylene Glycol, Methyl Trimethicone, Acrylates Copolymer, Stearic Acid, Polyglyceryl-2 Triisostearate, Palmitic Acid, Ceresin, Synthetic Beeswax, Synthetic Wax, Hydrogenated Coco-Glycerides, Polysorbate 60, Caprylyl Glycol, Glycerin, 1,2-Hexanediol, Phenoxyethanol, Bentonite, Potassium Sorbate, Hydroxyethylcellulose, PVP, Sodium Benzoate, Tromethamine, Alcohol, Ethylhexylglycerin, Sodium Dehydroacetate, Triethoxycaprylylsilane. [+/- May Contain/Peut Contenir: Iron Oxides (CI 77492, CI 77499, CI 77491), Titanium Dioxide (CI 77891)]. BROW GEL SHADE:SOFT BLACK Water/Aqua/Eau, Butylene Glycol, Methyl Trimethicone, Acrylates Copolymer, Stearic Acid, Polyglyceryl-2 Triisostearate, Palmitic Acid, Ceresin, Synthetic Beeswax, Synthetic Wax, Hydrogenated Coco-Glycerides, Polysorbate 60, Caprylyl Glycol, Glycerin, 1,2-Hexanediol, Phenoxyethanol, Bentonite, Potassium Sorbate, Hydroxyethylcellulose, PVP, Sodium Benzoate, Tromethamine, Alcohol, Ethylhexylglycerin, Sodium Dehydroacetate. [+/- May Contain/Peut Contenir: Iron Oxides (CI 77499, CI 77491), Titanium Dioxide (CI 77891)]. BROW PENCIL C12-15 Alkyl Ethylhexanoate, Methyl Trimethicone, Polyethylene, Trimethylsiloxysilicate, Synthetic Wax, Ceresin, Polyisobutene, Synthetic Beeswax, Stearic Acid. [+/- May Contain/Peut Contenir: Iron Oxides (CI 77491, CI 77492, CI 77499), Titanium Dioxide (CI 77891)].",
    how_to_use: "To create definition: Twist pencil to reveal product (but don't twist too high—the pencil could break due to the creamy nature of the formula)! Hold the pencil so it's angled against the skin and then use small, short strokes to mimic the look of natural hairs. To create volume and set: Comb brow gel through brow hairs to set and hold.",
    price: 22,
    category_id: eye.id
)

# lip:
lip_balm = Product.create!(
    name: "With Gratitude Dewy Lip Balm",
    description: "A hydrating lip balm with a kiss of dewy, buildable color that looks and feels so good your lips will thank you.",
    details: "Sheer color, soft shine. The kind of tinted lip balm you can throw on without a mirror and still get right. Glides on with a smooth, satisfying slip. Feels comfy and cushiony, never greasy or sticky. Weightless hydration that lasts all day so lips feel nourished and nurtured. Lips look fuller and healthier, with buildable color that blurs the look of fine lines without settling.",
    ingredients: "SHADES: EMPATHY, APPRECIATE, COMPLIMENT C12-15 Alkyl Ethylhexanoate, Diisostearyl Malate, Tridecyl Trimellitate, Ceresin, Bis-Diglyceryl Polyacyladipate-2, Butyrospermum Parkii (Shea) Butter, Vinyl Dimethicone/Methicone Silsesquioxane Crosspolymer, Hydrogenated Polyisobutene, Sorbitan Sesquioleate, 1,2-Hexanediol, Fragrance/Parfum, Helianthus Annuus (Sunflower) Seed Oil, Gardenia Florida Fruit Extract, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Nymphaea Odorata Root Extract, Linalool [+/- May Contain/Peut Contenir: Titanium Dioxide (CI 77891), Iron Oxides (CI 77491, CI 77492, CI 77499), Red 7 Lake (CI 15850), Blue 1 Lake (CI 42090)]. SHADE: BLESSED C12-15 Alkyl Ethylhexanoate, Diisostearyl Malate, Tridecyl Trimellitate, Ceresin, Bis-Diglyceryl Polyacyladipate-2, Butyrospermum Parkii (Shea) Butter, Vinyl Dimethicone/Methicone Silsesquioxane Crosspolymer, Hydrogenated Polyisobutene, Sorbitan Sesquioleate, 1,2-Hexanediol, Fragrance/Parfum, Triethoxycaprylylsilane, Helianthus Annuus (Sunflower) Seed Oil, Gardenia Florida Fruit Extract, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Nymphaea Odorata Root Extract, Linalool, Titanium Dioxide (CI 77891), Red 28 Lake (CI 45410), Yellow 5 Lake (CI 19140), Iron Oxides (CI 77492). SHADE: HONOR C12-15 Alkyl Ethylhexanoate, Diisostearyl Malate, Tridecyl Trimellitate, Ceresin, Bis-Diglyceryl Polyacyladipate-2, Dimethicone, Trimethylsiloxysilicate, Mica, Butyrospermum Parkii (Shea) Butter, Vinyl Dimethicone/Methicone Silsesquioxane Crosspolymer, Hydrogenated Polyisobutene, Sorbitan Sesquioleate, 1,2-Hexanediol, Fragrance/Parfum, Helianthus Annuus (Sunflower) Seed Oil, Gardenia Florida Fruit Extract, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Nymphaea Odorata Root Extract, Linalool, Iron Oxides (CI 77491).",
    how_to_use: "Swipe it on whenever, wherever. Repeat for more color.",
    price: 16,
    category_id: lip.id
)

lip_cream = Product.create!(
    name: "Lip Soufflé Matte Lip Cream",
    description: "An air-whipped lip cream that hugs lips with rich, melted-in color and nourishing hydration that won’t weigh you down.",
    details: "Airy, whipped cream formula glides on easy for full-on color with a featherweight feel. Velvety matte finish with a soft blurring effect—lips look fuller, smoother, and more plump. Hydrates, softens, and stays put. Lips feel comfortable all day—no drying or caking here! Precise applicator tip makes it easy to apply.",
    ingredients: "SHADES: FEARLESS, THRILLING, MOTIVATE, INSPIRE, DARING Dimethicone, Methyl Trimethicone, Dimethicone Crosspolymer, Dimethicone/Vinyl Dimethicone Crosspolymer, Polyglyceryl-2 Triisostearate, Isododecane, 1,2-Hexanediol, Disteardimonium Hectorite, Phenoxyethanol, PEG-10 Dimethicone, Tocopheryl Acetate, Propylene Carbonate, Fragrance/Parfum, Linalool, Helianthus Annuus (Sunflower) Seed Oil, Gardenia Florida Fruit Extract, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Nymphaea Odorata Root Extract, [+/- May Contain/Peut Contenir: Titanium Dioxide (CI 77891), Iron Oxides (CI 77491), Iron Oxides (CI 77499), Red 28 Lake (CI 45410), Red 27 (CI 45410), Red 7 Lake (CI 15850), Iron Oxides (CI 77492), Yellow 6 Lake (CI 15985), Yellow 5 Lake (CI 19140), Blue 1 Lake (CI 42090)]. SHADES: ASCEND, STRENGTHEN, HEROIC Dimethicone, Methyl Trimethicone, Polyglyceryl-2 Triisostearate, Dimethicone Crosspolymer, Dimethicone/Vinyl Dimethicone Crosspolymer, Isododecane, 1,2-Hexanediol, Disteardimonium Hectorite, Phenoxyethanol, PEG-10 Dimethicone, Tocopheryl Acetate, Propylene Carbonate, Fragrance/Parfum, Linalool, Helianthus Annuus (Sunflower) Seed Oil, Gardenia Florida Fruit Extract, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Nymphaea Odorata Root Extract, [+/- May Contain/Peut Contenir: Red 27 (CI 45410), Red 28 Lake (CI 45410), Red 7 Lake (CI 15850), Titanium Dioxide (CI 77891), Blue 1 Lake (CI 42090), Iron Oxides (CI 77491).",
    how_to_use: "Apply directly onto clean, dry lips. Lay it all down in one bold swipe, or go in light and build it up—totally up to you!",
    price: 20,
    category_id: lip.id
)

# tools:
foundation_brush = Product.create!(
    name: "Liquid Touch Foundation Brush",
    description: "A foundation brush packed with soft, silky bristles that build, blend, and buff.",
    details: "Custom design combines patent-pending vegan fiber technology and a marquis brush shape for seamless blending and streak-free application. Marquis brush shape mimics the shape and bounce of your fingertips, allowing for intuitive, controlled, finger-like application. Densely-packed bristles blur and diffuse liquids, creams, and powders with ease.",
    ingredients: "N/A",
    how_to_use: "Liquid Touch Foundation Brush can be used with all liquid, cream, and powder formulas. Use a sweeping motion for sheer coverage. Use a circular motion for medium coverage. Use a stippling motion for maximum coverage. To clean brush, use gentle soap and warm water.",
    price: 28,
    category_id: tools.id
)

concealer_brush = Product.create!(
    name: "Liquid Touch Concealer Brush",
    description: "A concealer brush with uniquely sculpted bristles and a pointed tip for precise coverage.",
    details: "Custom-design brush combines patent-pending vegan fiber technology and a marquis brush shape for seamless blending and streak-free application. Mimics the shape and bounce of your fingertips for easy, controlled application over hard-to-reach areas. Densely-packed bristles for precise under-eye application while blurring and diffusing liquids, creams, and powders with ease.",
    ingredients: "N/A",
    how_to_use: "Liquid Touch Concealer Brush can be used with all liquid, cream and powder formulas. Use brush to gently press and and blend concealer under the eye and other areas of the face. Use a sweeping motion to gently blend and blur product into skin. Use a stippling motion to intensify coverage. Use the pointed tip of the brush to soften edges To clean brush, use gentle soap and warm water.",
    price: 16,
    category_id: tools.id
)

sponge = Product.create!(
    name: "Liquid Touch Multi-Tasking Sponge",
    description: "A plush sponge with a diamond-shaped tip for precise application and customizable coverage.",
    details: "Multifaceted, diamond-shaped sponge is the ultimate multitasker. Diamond-shaped tip for precise application: Use under eyes, around the nose, and around corners of the mouth. Large, flat side blends quickly and seamlessly. Round bottom edge helps buff, blend, bake, and soften harsh edges. Ultra-soft, warm-activated sponge - use wet for an airbrushed finish.",
    ingredients: "N/A",
    how_to_use: "Wet sponge with water before use. Gently squeeze out excess water (wrap in towel if necessary). This multi-tasking sponge can be used in a variety of ways: Diamond-shaped tip is perfect for strategic placement and detailing around the eye. Flat edges are perfect for sweeping and diffusing across the skin. Round edge is perfect for blending and softening edges. To Clean Sponge: Use gentle soap and water, and roll sponge between hands. Gently squeeze out excess water and air dry. Due to the unique porous texture of the sponge, do not squeeze sponge with nails. Use your fingertips to gently squeeze out excess water.",
    price: 14,
    category_id: tools.id
)

# Shades
# foundation:
f_100W = Shade.create!(name: "100W", product_id: foundation.id)
f_140C = Shade.create!(name: "140C", product_id: foundation.id)
f_180W = Shade.create!(name: "180W", product_id: foundation.id)
f_220C = Shade.create!(name: "220C", product_id: foundation.id)
f_260N = Shade.create!(name: "260N", product_id: foundation.id)
f_300C = Shade.create!(name: "300C", product_id: foundation.id)
f_340C = Shade.create!(name: "340C", product_id: foundation.id)
f_380W = Shade.create!(name: "380W", product_id: foundation.id)
f_420N = Shade.create!(name: "420N", product_id: foundation.id)
f_460W = Shade.create!(name: "460W", product_id: foundation.id)
f_500N = Shade.create!(name: "500N", product_id: foundation.id)
f_540C = Shade.create!(name: "540C", product_id: foundation.id)
f_570N = Shade.create!(name: "570N", product_id: foundation.id)

# concealer:
c_100W = Shade.create!(name: "100W", product_id: concealer.id)
c_140C = Shade.create!(name: "140C", product_id: concealer.id)
c_180W = Shade.create!(name: "180W", product_id: concealer.id)
c_220C = Shade.create!(name: "220C", product_id: concealer.id)
c_260N = Shade.create!(name: "260N", product_id: concealer.id)
c_300C = Shade.create!(name: "300C", product_id: concealer.id)
c_340C = Shade.create!(name: "340C", product_id: concealer.id)
c_380W = Shade.create!(name: "380W", product_id: concealer.id)
c_420N = Shade.create!(name: "420N", product_id: concealer.id)
c_460W = Shade.create!(name: "460W", product_id: concealer.id)
c_500N = Shade.create!(name: "500N", product_id: concealer.id)
c_540C = Shade.create!(name: "540C", product_id: concealer.id)
c_570N = Shade.create!(name: "570N", product_id: concealer.id)

# blush:
love = Shade.create!(name: "Love", product_id: blush.id)
faith = Shade.create!(name: "Faith", product_id: blush.id)
grateful = Shade.create!(name: "Grateful", product_id: blush.id)
happy = Shade.create!(name: "Happy", product_id: blush.id)

# highlight:
enlighten = Shade.create!(name: "Enlighten", product_id: highlight.id)
enchant = Shade.create!(name: "Enchant", product_id: highlight.id)
outshine = Shade.create!(name: "Outshine", product_id: highlight.id)
captivate = Shade.create!(name: "Captivate", product_id: highlight.id)

# lip_balm:
honor = Shade.create!(name: "Honor", product_id: lip_balm.id)
blessed = Shade.create!(name: "Blessed", product_id: lip_balm.id)
empathy = Shade.create!(name: "Empathy", product_id: lip_balm.id)
appreciate = Shade.create!(name: "Appreciate", product_id: lip_balm.id)
compliment = Shade.create!(name: "Compliment", product_id: lip_balm.id)

# lip_cream: 
daring = Shade.create!(name: "Daring", product_id: lip_cream.id)
heroic = Shade.create!(name: "Heroic", product_id: lip_cream.id)
strengthen = Shade.create!(name: "Strengthen", product_id: lip_cream.id)
ascend = Shade.create!(name: "Ascend", product_id: lip_cream.id)
inspire = Shade.create!(name: "Inspire", product_id: lip_cream.id)
motivate = Shade.create!(name: "Motivate", product_id: lip_cream.id)
thrilling = Shade.create!(name: "Thrilling", product_id: lip_cream.id)
fearless = Shade.create!(name: "Fearless", product_id: lip_cream.id)

# brow_pencil:
soft_black = Shade.create!(name: "Soft Black", product_id: brow_pencil.id)
deep_brown = Shade.create!(name: "Deep Brown", product_id: brow_pencil.id)
warm_brown = Shade.create!(name: "Warm Brown", product_id: brow_pencil.id)
soft_blonde = Shade.create!(name: "Soft Blonde", product_id: brow_pencil.id)
