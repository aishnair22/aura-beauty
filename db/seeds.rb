require 'open-uri'

User.destroy_all
User.connection.execute('ALTER SEQUENCE users_id_seq RESTART WITH 1')
Category.destroy_all
Category.connection.execute('ALTER SEQUENCE categories_id_seq RESTART WITH 1')
Product.destroy_all
Product.connection.execute('ALTER SEQUENCE products_id_seq RESTART WITH 1')
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
    quote: "It just melts onto your skin, so you forget you're wearing anything.",
    category_id: face.id
)

foundation_photo1 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/foundation/photos/foundation-doefoot.jpg')
foundation.photos.attach(io: foundation_photo1, filename: 'foundation-doefoot.jpg')
foundation_photo2 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/foundation/photos/foundation-arm-swatch-one.jpg')
foundation.photos.attach(io: foundation_photo2, filename: 'foundation-arm-swatch-one.jpg')
foundation_photo3 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/foundation/photos/foundation-arm-swatch-two.jpg')
foundation.photos.attach(io: foundation_photo3, filename: 'foundation-arm-swatch-two.jpg')

foundation_details = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/foundation/foundation-details.png')
foundation.details_photo.attach(io: foundation_details, filename: 'foundation-details.png')

foundation_howto = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/foundation/foundation-how-to-use.jpg')
foundation.how_to_use_photo.attach(io: foundation_howto, filename: 'foundation-how-to-use.jpg')
####################################################################

concealer = Product.create!(
    name: "Liquid Touch Brightening Concealer",
    description: "A lightweight, hydrating concealer that gives you buildable coverage where you need it while brightening skin with a radiant finish.",
    details: "Instantly hides what you want to hide - blemishes, dark circles, redness, fine lines- with medium buildable coverage and a radiant, skin-like finish. Creamy and hydrating, yet super long-lasting. Sweat-resistant, too. Blends like a dream to even out skin texture. Won't cake or settle into fine lines.",
    ingredients: "Water/Aqua/Eau, Dimethicone, Hydrogenated Didecene, Cetyl PEG/PPG-10/1 Dimethicone, Propanediol, Glycerin, Acrylates/Polytrimethylsiloxymethacrylate Copolymer, Boron Nitride, Polyglyceryl-4 Isostearate, Trimethylsiloxysilicate, Isododecane, Disodium Stearoyl Glutamate, Disteardimonium Hectorite, Hydroxyacetophenone, Oryza Sativa (Rice) Bran Wax, Sodium Chloride, Dimethicone Crosspolymer, Helianthus Annuus (Sunflower) Seed Oil, Caprylyl Glycol, 1,2-Hexanediol, Phenyl Trimethicone, Tocopheryl Acetate, Aluminum Hydroxide, Trisodium Ethylenediamine Disuccinate, Dimethiconol, Decyl Glucoside, Gardenia Florida Fruit Extract, Hexylene Glycol, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Nymphaea Odorata Root Extract, Phenoxyethanol, [+/- MAY CONTAIN / PEUT CONTENIR : Titanium Dioxide (CI 77891), Iron Oxides (CI 77491, CI 77492, CI 77499)].",
    how_to_use: "TIP: Each concealer shade is made to be the perfect match to your Liquid Touch Weightless Foundation shade! Dot concealer anywhere your skin could use a little extra love, like dark circles, blemishes, redness, or discoloration. Then, blend using your fingers or our Liquid Touch Concealer Brush. The unique, oversized applicator has a flat edge to sweep concealer onto larger areas of the face, and a pointed tip for more precise application. For the most seamless, second-skin finish, try blending with our Liquid Touch Multi-tasking Sponge.",
    price: 19,
    quote: "It's a quick and easy way to brighten dark areas or hide blemishes.",
    category_id: face.id
)

concealer_photo1 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/concealer/photos/concealer-doefoot.jpg')
concealer.photos.attach(io: concealer_photo1, filename: 'concealer-doefoot.jpg')
concealer_photo2 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/concealer/photos/concealer-arm-swatch-one.jpg')
concealer.photos.attach(io: concealer_photo2, filename: 'concealer-arm-swatch-one.jpg')
concealer_photo3 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/concealer/photos/concealer-arm-swatch-two.jpg')
concealer.photos.attach(io: concealer_photo3, filename: 'concealer-arm-swatch-two.jpg')

concealer_details = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/concealer/concealer-details.png')
concealer.details_photo.attach(io: concealer_details, filename: 'concealer-details.png')

concealer_howto = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/concealer/concealer-how-to-use.jpg')
concealer.how_to_use_photo.attach(io: concealer_howto, filename: 'concealer-how-to-use.jpg')
####################################################################

blush = Product.create!(
    name: "Soft Pinch Liquid Blush",
    description: "A weightless, long-lasting liquid blush that blends and builds beautifully for a soft, healthy flush. Available in both matte and dewy finishes.",
    details: "Airy, lightweight liquid formula blends and builds effortlessly for a soft flush of color. Infused with long-lasting color pigments for all-day wear—a little goes a long way. Mistake-proof, it layers beautifully over liquid/powder formulas without disturbing makeup. Available in matte and dewy finishes. Love – terracotta (matte) Faith – deep berry (matte) Happy – cool pink (dewy) Grateful – true red (dewy)",
    ingredients: "Hydrogenated Polyisobutene, Hydrogenated Poly(C6-14 Olefin), Mica, Octyldodecanol, Ethylene/Propylene/Styrene Copolymer, Trimethylsiloxysilicate, Isododecane, 1,2-Hexanediol, Disteardimonium Hectorite, Sorbitan Sesquioleate, Propylene Carbonate, Triethoxycaprylylsilane, Aluminum Hydroxide, Helianthus Annuus (Sunflower) Seed Oil, Gardenia Florida Fruit Extract, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Nymphaea Odorata Root Extract. [+/- May Contain/Peut Contenir: Iron Oxides (CI 77491), Red 7 Lake (CI 15850), Yellow 6 Lake (CI 15985), Titanium Dioxide (CI 77891), Yellow 5 Lake (CI 19140), Red 28 Lake (CI 45410)].",
    how_to_use: "Gently remove excess product from applicator. Use the doe-foot applicator and place 1-2 dots on each cheek. Use fingertips and gently pat into skin for a seamless finish.",
    price: 20,
    quote: "There’s nothing like a soft hint of blush to add dimension and color to your look.",
    category_id: face.id
)

blush_photo1 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/blush/photos/blush-doefoot.jpg')
blush.photos.attach(io: blush_photo1, filename: 'blush-doefoot.jpg')

blush_details = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/blush/blush-details.png')
blush.details_photo.attach(io: blush_details, filename: 'blush-details.png')

blush_howto = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/blush/blush-how-to-use.jpg')
blush.how_to_use_photo.attach(io: blush_howto, filename: 'blush-how-to-use.jpg')
####################################################################

highlight = Product.create!(
    name: "Positive Light Liquid Luminizer",
    description: "A silky, second-skin liquid highlighter that creates an instantly dewy, buildable glow while also nourishing skin so it looks on the bright side all day.",
    details: "Weightless liquid formula blends evenly for an instant wash of light that looks good on all skin tones. Superfine, light-catching pearls make it easy to take your glow from soft sheen to pure pop in seconds. Lasts all day without fading, creasing, or settling into fine lines. Layers well over makeup—liquids, powders, creams—without disturbing what's already there.",
    ingredients: "Isododecane, Mica, Hydrogenated Polyisobutene, Hydrogenated Olive Oil Unsaponifiables, Hydrogenated Styrene/Isoprene Copolymer, Octyldodecanol, Dimethicone, Gardenia Florida Fruit Extract, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Nymphaea Odorata Root Extract, Polyhydroxystearic Acid, Caprylic/Capric Triglyceride, Isostearic Acid, Helianthus Annuus (Sunflower) Seed Oil, Tin Oxide, Lecithin, Polyglyceryl-3 Polyricinoleate, Pentaerythrityl Tetra-di-t-butyl Hydroxyhydrocinnamate, [+/- May Contain: Titanium Dioxide (CI 77891), Iron Oxides (CI 77491, CI 77499)].",
    how_to_use: "Apply 1-2 dots directly over any areas you want to add a touch of glow—high points of cheeks, brow bone, the bridge of your nose. Blend with fingertips, brush, or our Liquid Touch Multi-tasking Sponge. TIP: For a soft, all-over glow, mix into your foundation or concealer.",
    price: 22,
    quote: "It layers well with all formulas – liquid, powder, or cream. It's so versatile!",
    category_id: face.id
)

highlight_photo1 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/highlight/photos/highlight-doefoot.jpg')
highlight.photos.attach(io: highlight_photo1, filename: 'highlight-doefoot.jpg')
highlight_photo2 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/highlight/photos/highlight-arm-swatches.jpg')
highlight.photos.attach(io: highlight_photo2, filename: 'highlight-arm-swatches.jpg')

highlight_details = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/highlight/highlight-details.png')
highlight.details_photo.attach(io: highlight_details, filename: 'highlight-details.png')

highlight_howto = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/highlight/highlight-how-to-use.jpg')
highlight.how_to_use_photo.attach(io: highlight_howto, filename: 'highlight-how-to-use.jpg')
####################################################################

mist = Product.create!(
    name: "Always An Optimist 4-In-1 Mist",
    description: "An ultra-fine, all-in-one face mist packed with skin-loving ingredients to hydrate, prime, set, and refresh for an uplifting glow-boost that lasts.",
    details: "Cloud-like hydrating mist instantly calms and nourishes skin, while making it look and feel more plump, smooth, and ready for makeup. Boosts the life of your foundation—more seamless, less cakey. Just fresh all day. Perks up your skin—and your senses, too, thanks to its soft, uplifting botanical scent. Natural, radiant finish without feeling greasy or sticky.",
    ingredients: "Water/Aqua/Eau, Caprylic/Capric Triglyceride, Glycerin, Dipropylene Glycol, Niacinamide, 1,2-Hexanediol, Butylene Glycol, Panthenol, Allantoin, Betaine, Sodium Chloride, Squalane, Ethylhexylglycerin, Trehalose, Sodium Benzoate, Disodium EDTA, Olea Europaea (Olive) Fruit Oil, Citrus Aurantium Bergamia (Bergamot) Fruit Oil, Lavandula Angustifolia (Lavender) Oil, Sodium Hyaluronate, Gardenia Florida Fruit Extract, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Nymphaea Odorata Root Extract, Cananga Odorata Flower Oil, Citric Acid, Citrus Aurantium Dulcis (Orange) Oil, Cymbopogon Martini Oil, Pelargonium Graveolens Flower Oil, Michelia Alba Flower Oil, Eugenia Caryophyllus (Clove) Leaf Oil, Sodium Citrate, Eucalyptus Globulus Leaf Oil, Jasminum Officinale (Jasmine) Oil, Limonene, Linalool.",
    how_to_use: "Shake well to fully mix. With eyes closed, spritz 2-4 times at least 10 inches away from your face. This one's a true multitasker! Mist it on whenever, wherever: As a pre-makeup step, or in between layers of makeup to help everything meld together, or to set it all in place. And of course—throughout the day for a quick pick-me-up. You can use it without makeup, too!",
    price: 24,
    quote: "I love to keep my skin hydrated, so I always keep this on me. It's so versatile!",
    category_id: face.id
)

mist_photo1 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/mist/photos/mist-one.jpg')
mist.photos.attach(io: mist_photo1, filename: 'mist-one.jpg')
mist_photo2 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/mist/photos/mist-two.jpg')
mist.photos.attach(io: mist_photo2, filename: 'mist-two.jpg')

mist_details = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/mist/mist-details.png')
mist.details_photo.attach(io: mist_details, filename: 'mist-details.png')

mist_howto = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/mist/mist-how-to-use.jpg')
mist.how_to_use_photo.attach(io: mist_howto, filename: 'mist-how-to-use.jpg')
####################################################################

primer = Product.create!(
    name: "Always An Optimist Illuminating Primer",
    description: "A cooling, water-based gel primer that smoothes, hydrates, and illuminates skin, prepping you for makeup that looks and feels its best all day.",
    details: "Lightweight, non-sticky gel primer glides on evenly to smooth you out for the perfect base. Makeup applies better, and stays put longer, too. Cooling, water-based formula—no silicone here! Instantly soothes and nourishes skin with all-day hydration, so you stay feeling fresh under makeup. Ultra-fine pearls give skin a soft, lit-from-within glow.",
    ingredients: "Water/Aqua/Eau, Glycerin, Ethylhexyl Palmitate, Isohexadecane, Synthetic Fluorphlogopite, Acrylamide/Sodium Acryloyldimethyltaurate Copolymer, Caprylic/Capric Triglyceride, Helianthus Annuus (Sunflower) Seed Oil, Gardenia Florida Fruit Extract, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Nymphaea Odorata Root Extract, Phenoxyethanol, 1,2-Hexanediol, Polysorbate 80, Sorbitan Oleate, Tin Oxide, Titanium Dioxide (CI 77891), Iron Oxides (CI 77491).",
    how_to_use: "Apply 1-2 pumps to clean, moisturized skin, blending in with fingers. Then, follow with foundation and/or concealer. TIP: Feel like skipping makeup? Try this primer on its own! It's made with ultra-fine pearls that bounce light to create the look of a more even skin tone.",
    price: 26,
    quote: "It's essential for a long-lasting look and proper prep for your makeup.",
    category_id: face.id
)

primer_photo1 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/primer/photos/primer-one.jpg')
primer.photos.attach(io: primer_photo1, filename: 'primer-one.jpg')
primer_photo2 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/primer/photos/primer-two.jpg')
primer.photos.attach(io: primer_photo2, filename: 'primer-two.jpg')
primer_photo3 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/primer/photos/primer-swatch.png')
primer.photos.attach(io: primer_photo3, filename: 'primer-swatch.png')

primer_details = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/primer/primer-details.png')
primer.details_photo.attach(io: primer_details, filename: 'primer-details.png')

primer_howto = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/primer/primer-how-to-use.jpg')
primer.how_to_use_photo.attach(io: primer_howto, filename: 'primer-how-to-use.jpg')
####################################################################

blot = Product.create!(
    name: "Blot & Glow Touch-Up Kit",
    description: "A refillable 2-in-1 compact that teams up your touch-up essentials—blotting papers and a radiant powder-filled puff—for freshening up on the go.",
    details: "Cut shine—not glow—with these refillable mess-free, stress-free essentials. Unique linen-blend blotting sheets (100ct) gently absorb excess oil while keeping makeup in place. Universal pre-filled powder puff contains a radiant, talc-free powder. Dab it on for extra shine control with a soft blurring effect that never looks flat—and won't flash back.",
    ingredients: "Mica, Synthetic Fluorphlogopite, Silica, Squalane, Lauroyl Lysine, Triethoxycaprylylsilane, 1,2-Hexanediol, Glyceryl Caprylate, Iron Oxides (CI 77491), Iron Oxides (CI 77492), Iron Oxides (CI 77499).",
    how_to_use: "Touching up has never been this easy. Gently press an individual sheet of blotting paper over shiny areas of the face to absorb excess oil. Next, dab the pre-filled powder puff over shine-prone areas for a radiant, soft-focus finish.",
    price: 26,
    quote: "I had to make this for myself and my friends. It's perfect for touching up!",
    category_id: face.id
)

blot_photo1 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/blot/photos/blot-one.jpg')
blot.photos.attach(io: blot_photo1, filename: 'blot-one.jpg')
blot_photo2 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/blot/photos/blot-two.jpg')
blot.photos.attach(io: blot_photo2, filename: 'blot-two.jpg')
blot_photo3 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/blot/photos/blot-three.jpg')
blot.photos.attach(io: blot_photo3, filename: 'blot-three.jpg')

blot_details = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/blot/blot-details.png')
blot.details_photo.attach(io: blot_details, filename: 'blot-details.png')

blot_howto = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/face/blot/blot-how-to-use.jpg')
blot.how_to_use_photo.attach(io: blot_howto, filename: 'blot-how-to-use.jpg')
####################################################################


# eye:
liner = Product.create!(
    name: "Perfect Strokes Matte Liquid Liner",
    description: "An easy-glide, waterproof liquid eyeliner with over 1,000 vegan bristles to lay down long-lasting, ultra-black lines with perfect precision every time.",
    details: "Rich matte-black color in one perfect stroke—no skipping or snagging, even over eyeshadow! Easy, precise lines, thanks to the fine, flexible brush tip with over 1,000 soft vegan bristles. Specially made to ensure smooth, fluid ink flow from every angle. Long-lasting, waterproof formula won't fade, feather, or flake on you, so you get that just-applied look all day.",
    ingredients: "Water/Aqua/Eau, Styrene/Acrylates Copolymer, Propylene Glycol, Laureth-21, Pentylene Glycol, PEG-40 Hydrogenated Castor Oil, Phenoxyethanol, Ammonium Acrylates Copolymer, Caprylyl Glycol, PPG-2-Deceth-30, Sodium Dehydroacetate, Sodium Lauryl Sulfate, Disodium Laureth Sulfosuccinate, Black 2 (CI 77266)[NANO].",
    how_to_use: "Shake well to activate. Glide tip along your lash line for instant definition. The flexible brush tip is super versatile: Apply light pressure for thin lines, and add more pressure for thicker lines. Remember to store with the tip down whenever possible so the brush stays wet and ready to go between uses!",
    price: 19,
    quote: "I LOVE a bold winged liner look, and this liner makes it so easy to get it precise.",
    category_id: eye.id
)

liner_photo1 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/eye/liner/photos/liner-one.jpg')
liner.photos.attach(io: liner_photo1, filename: 'liner-one.jpg')
liner_photo2 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/eye/liner/photos/liner-two.jpg')
liner.photos.attach(io: liner_photo2, filename: 'liner-two.jpg')
liner_photo3 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/eye/liner/photos/liner-three.jpg')
liner.photos.attach(io: liner_photo3, filename: 'liner-three.jpg')
liner_photo4 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/eye/liner/photos/liner-swatch.png')
liner.photos.attach(io: liner_photo4, filename: 'liner-swatch.png')

liner_details = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/eye/liner/liner-details.png')
liner.details_photo.attach(io: liner_details, filename: 'liner-details.png')

liner_howto = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/eye/liner/liner-how-to-use.jpg')
liner.how_to_use_photo.attach(io: liner_howto, filename: 'liner-how-to-use.jpg')
####################################################################

brow_pencil = Product.create!(
    name: "Brow Harmony Pencil And Gel",
    description: "A triangular-shaped retractable brow pencil with a complementary tinted brow gel to create naturally defined brows.",
    details: "Soft, buildable brow pencil features a triangular tip to help create any brow look you desire from natural and defined to bold and full. Weightless brow gel formula glides effortlessly and provides flexible hold. Natural-looking shades allow you to customize your desired intensity.",
    ingredients: "Water/Aqua/Eau, Butylene Glycol, Methyl Trimethicone, Acrylates Copolymer, Stearic Acid, Polyglyceryl-2 Triisostearate, Palmitic Acid, Ceresin, Synthetic Beeswax, Synthetic Wax, Hydrogenated Coco-Glycerides, Polysorbate 60, Caprylyl Glycol, Glycerin, 1,2-Hexanediol, Phenoxyethanol, Bentonite, Potassium Sorbate, Hydroxyethylcellulose, PVP, Sodium Benzoate, Tromethamine, Alcohol, Ethylhexylglycerin, Sodium Dehydroacetate, Triethoxycaprylylsilane. [+/- May Contain/Peut Contenir: Iron Oxides (CI 77492, CI 77499, CI 77491), Titanium Dioxide (CI 77891)].",
    how_to_use: "To create definition: Twist pencil to reveal product (but don't twist too high—the pencil could break due to the creamy nature of the formula)! Hold the pencil so it's angled against the skin and then use small, short strokes to mimic the look of natural hairs. To create volume and set: Comb brow gel through brow hairs to set and hold.",
    price: 22,
    quote: "I needed a brow pencil and gel that I could carry with me for touch ups on the go.",
    category_id: eye.id
)

brow_pencil_photo1 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/eye/brow/photos/brow-one.jpg')
brow_pencil.photos.attach(io: brow_pencil_photo1, filename: 'brow-one.jpg')
brow_pencil_photo2 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/eye/brow/photos/brow-two.jpg')
brow_pencil.photos.attach(io: brow_pencil_photo2, filename: 'brow-two.jpg')

brow_pencil_details = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/eye/brow/brow-details.png')
brow_pencil.details_photo.attach(io: brow_pencil_details, filename: 'brow-details.png')

brow_pencil_howto = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/eye/brow/brow-how-to-use.jpg')
brow_pencil.how_to_use_photo.attach(io: brow_pencil_howto, filename: 'brow-how-to-use.jpg')
####################################################################


# lip:
lip_balm = Product.create!(
    name: "With Gratitude Dewy Lip Balm",
    description: "A hydrating lip balm with a kiss of dewy, buildable color that looks and feels so good your lips will thank you.",
    details: "Sheer color, soft shine. The kind of tinted lip balm you can throw on without a mirror and still get right. Glides on with a smooth, satisfying slip. Feels comfy and cushiony, never greasy or sticky. Weightless hydration that lasts all day so lips feel nourished and nurtured. Lips look fuller and healthier, with buildable color that blurs the look of fine lines without settling.",
    ingredients: "C12-15 Alkyl Ethylhexanoate, Diisostearyl Malate, Tridecyl Trimellitate, Ceresin, Bis-Diglyceryl Polyacyladipate-2, Butyrospermum Parkii (Shea) Butter, Vinyl Dimethicone/Methicone Silsesquioxane Crosspolymer, Hydrogenated Polyisobutene, Sorbitan Sesquioleate, 1,2-Hexanediol, Fragrance/Parfum, Helianthus Annuus (Sunflower) Seed Oil, Gardenia Florida Fruit Extract, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Nymphaea Odorata Root Extract, Linalool [+/- May Contain/Peut Contenir: Titanium Dioxide (CI 77891), Iron Oxides (CI 77491, CI 77492, CI 77499), Red 7 Lake (CI 15850), Blue 1 Lake (CI 42090)]. SHADE: BLESSED C12-15 Alkyl Ethylhexanoate, Diisostearyl Malate, Tridecyl Trimellitate, Ceresin, Bis-Diglyceryl Polyacyladipate-2, Butyrospermum Parkii (Shea) Butter, Vinyl Dimethicone/Methicone Silsesquioxane Crosspolymer, Hydrogenated Polyisobutene, Sorbitan Sesquioleate, 1,2-Hexanediol, Fragrance/Parfum, Triethoxycaprylylsilane, Helianthus Annuus (Sunflower) Seed Oil, Gardenia Florida Fruit Extract, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Nymphaea Odorata Root Extract, Linalool, Titanium Dioxide (CI 77891), Red 28 Lake (CI 45410), Yellow 5 Lake (CI 19140), Iron Oxides (CI 77492). SHADE: HONOR C12-15 Alkyl Ethylhexanoate, Diisostearyl Malate, Tridecyl Trimellitate, Ceresin, Bis-Diglyceryl Polyacyladipate-2, Dimethicone, Trimethylsiloxysilicate, Mica, Butyrospermum Parkii (Shea) Butter, Vinyl Dimethicone/Methicone Silsesquioxane Crosspolymer, Hydrogenated Polyisobutene, Sorbitan Sesquioleate, 1,2-Hexanediol, Fragrance/Parfum, Helianthus Annuus (Sunflower) Seed Oil, Gardenia Florida Fruit Extract, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Nymphaea Odorata Root Extract, Linalool, Iron Oxides (CI 77491).",
    how_to_use: "Swipe it on whenever, wherever. Repeat for more color.",
    price: 16,
    quote: "It keeps my lips super hydrated with a hint of shine. Honor is my go-to for every day.",
    category_id: lip.id
)

lip_balm_photo1 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/lip/balm/photos/lip-balm-one.jpg')
lip_balm.photos.attach(io: lip_balm_photo1, filename: 'lip-balm-one.jpg')
lip_balm_photo2 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/lip/balm/photos/lip-balm-arm-swatches.jpg')
lip_balm.photos.attach(io: lip_balm_photo2, filename: 'lip-balm-arm-swatches.jpg')

lip_balm_details = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/lip/balm/lip-balm-details.png')
lip_balm.details_photo.attach(io: lip_balm_details, filename: 'lip-balm-details.png')

lip_balm_howto = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/lip/balm/lip-balm-how-to-use.jpg')
lip_balm.how_to_use_photo.attach(io: lip_balm_howto, filename: 'lip-balm-how-to-use.jpg')
####################################################################

lip_cream = Product.create!(
    name: "Lip Soufflé Matte Lip Cream",
    description: "An air-whipped lip cream that hugs lips with rich, melted-in color and nourishing hydration that won’t weigh you down.",
    details: "Airy, whipped cream formula glides on easy for full-on color with a featherweight feel. Velvety matte finish with a soft blurring effect—lips look fuller, smoother, and more plump. Hydrates, softens, and stays put. Lips feel comfortable all day—no drying or caking here! Precise applicator tip makes it easy to apply.",
    ingredients: "Dimethicone, Methyl Trimethicone, Dimethicone Crosspolymer, Dimethicone/Vinyl Dimethicone Crosspolymer, Polyglyceryl-2 Triisostearate, Isododecane, 1,2-Hexanediol, Disteardimonium Hectorite, Phenoxyethanol, PEG-10 Dimethicone, Tocopheryl Acetate, Propylene Carbonate, Fragrance/Parfum, Linalool, Helianthus Annuus (Sunflower) Seed Oil, Gardenia Florida Fruit Extract, Nelumbo Nucifera (Sacred Lotus) Flower Extract, Nymphaea Odorata Root Extract, [+/- May Contain/Peut Contenir: Titanium Dioxide (CI 77891), Iron Oxides (CI 77491), Iron Oxides (CI 77499), Red 28 Lake (CI 45410), Red 27 (CI 45410), Red 7 Lake (CI 15850), Iron Oxides (CI 77492), Yellow 6 Lake (CI 15985), Yellow 5 Lake (CI 19140), Blue 1 Lake (CI 42090)].",
    how_to_use: "Apply directly onto clean, dry lips. Lay it all down in one bold swipe, or go in light and build it up—totally up to you!",
    price: 20,
    quote: "It's so weightless, I forget that I'm wearing it until I look in the mirror!",
    category_id: lip.id
)

lip_cream_photo1 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/lip/liquid/photos/lip-cream-doefoot.jpg')
lip_cream.photos.attach(io: lip_cream_photo1, filename: 'lip-cream-doefoot.jpg')
lip_cream_photo2 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/lip/liquid/photos/lip-cream-arm-swatches.jpg')
lip_cream.photos.attach(io: lip_cream_photo2, filename: 'lip-cream-arm-swatches.jpg')

lip_cream_details = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/lip/liquid/lip-cream-details.png')
lip_cream.details_photo.attach(io: lip_cream_details, filename: 'lip-cream-details.png')

lip_cream_howto = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/lip/liquid/lip-cream-how-to-use.jpg')
lip_cream.how_to_use_photo.attach(io: lip_cream_howto, filename: 'lip-cream-how-to-use.jpg')
####################################################################


# tools:
foundation_brush = Product.create!(
    name: "Liquid Touch Foundation Brush",
    description: "A foundation brush packed with soft, silky bristles that build, blend, and buff.",
    details: "Custom design combines patent-pending vegan fiber technology and a marquis brush shape for seamless blending and streak-free application. Marquis brush shape mimics the shape and bounce of your fingertips, allowing for intuitive, controlled, finger-like application. Densely-packed bristles blur and diffuse liquids, creams, and powders with ease.",
    ingredients: "N/A",
    how_to_use: "Liquid Touch Foundation Brush can be used with all liquid, cream, and powder formulas. Use a sweeping motion for sheer coverage. Use a circular motion for medium coverage. Use a stippling motion for maximum coverage. To clean brush, use gentle soap and warm water.",
    price: 28,
    quote: "Used with our Liquid Touch foundation, it gives you the most beautiful finish.",
    category_id: tools.id
)

foundation_brush_photo1 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/tools/foudation+brush/photos/foundation-brush-one.jpg')
foundation_brush.photos.attach(io: foundation_brush_photo1, filename: 'foundation-brush-one.jpg')
foundation_brush_photo2 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/tools/foudation+brush/photos/foundation-brush-two.jpg')
foundation_brush.photos.attach(io: foundation_brush_photo2, filename: 'foundation-brush-two.jpg')

foundation_brush_details = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/tools/foudation+brush/foundation-brush-details.png')
foundation_brush.details_photo.attach(io: foundation_brush_details, filename: 'foundation-brush-details.png')

foundation_brush_howto = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/tools/foudation+brush/foundation-brush-how-to-use.jpg')
foundation_brush.how_to_use_photo.attach(io: foundation_brush_howto, filename: 'foundation-brush-how-to-use.jpg')
####################################################################

concealer_brush = Product.create!(
    name: "Liquid Touch Concealer Brush",
    description: "A concealer brush with uniquely sculpted bristles and a pointed tip for precise coverage.",
    details: "Custom-design brush combines patent-pending vegan fiber technology and a marquis brush shape for seamless blending and streak-free application. Mimics the shape and bounce of your fingertips for easy, controlled application over hard-to-reach areas. Densely-packed bristles for precise under-eye application while blurring and diffusing liquids, creams, and powders with ease.",
    ingredients: "N/A",
    how_to_use: "Liquid Touch Concealer Brush can be used with all liquid, cream and powder formulas. Use brush to gently press and and blend concealer under the eye and other areas of the face. Use a sweeping motion to gently blend and blur product into skin. Use a stippling motion to intensify coverage. Use the pointed tip of the brush to soften edges To clean brush, use gentle soap and warm water.",
    price: 16,
    quote: "It mimics the shape of your fingertips and gives you so much control.",
    category_id: tools.id
)

concealer_brush_photo1 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/tools/concealer+brush/photos/concealer-brush-one.jpg')
concealer_brush.photos.attach(io: concealer_brush_photo1, filename: 'concealer-brush-one.jpg')
concealer_brush_photo2 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/tools/concealer+brush/photos/concealer-brush-two.jpg')
concealer_brush.photos.attach(io: concealer_brush_photo2, filename: 'concealer-brush-two.jpg')

concealer_brush_details = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/tools/concealer+brush/concealer-brush-details.png')
concealer_brush.details_photo.attach(io: concealer_brush_details, filename: 'concealer-brush-details.png')

concealer_brush_howto = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/tools/concealer+brush/concealer-brush-how-to-use.jpg')
concealer_brush.how_to_use_photo.attach(io: concealer_brush_howto, filename: 'concealer-brush-how-to-use.jpg')
####################################################################

sponge = Product.create!(
    name: "Liquid Touch Multi-Tasking Sponge",
    description: "A plush sponge with a diamond-shaped tip for precise application and customizable coverage.",
    details: "Multifaceted, diamond-shaped sponge is the ultimate multitasker. Diamond-shaped tip for precise application: Use under eyes, around the nose, and around corners of the mouth. Large, flat side blends quickly and seamlessly. Round bottom edge helps buff, blend, bake, and soften harsh edges. Ultra-soft, warm-activated sponge - use wet for an airbrushed finish.",
    ingredients: "N/A",
    how_to_use: "Wet sponge with water before use. Gently squeeze out excess water (wrap in towel if necessary). This multi-tasking sponge can be used in a variety of ways: Diamond-shaped tip is perfect for strategic placement and detailing around the eye. Flat edges are perfect for sweeping and diffusing across the skin. Round edge is perfect for blending and softening edges. To Clean Sponge: Use gentle soap and water, and roll sponge between hands. Gently squeeze out excess water and air dry. Due to the unique porous texture of the sponge, do not squeeze sponge with nails. Use your fingertips to gently squeeze out excess water.",
    price: 14,
    quote: "This is my go-to applicator - I love that I can use it with any formula.",
    category_id: tools.id
)

sponge_photo1 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/tools/sponge/photos/sponge-one.jpg')
sponge.photos.attach(io: sponge_photo1, filename: 'sponge-one.jpg')
sponge_photo2 = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/tools/sponge/photos/sponge-two.jpg')
sponge.photos.attach(io: sponge_photo2, filename: 'sponge-two.jpg')

sponge_details = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/tools/sponge/sponge-details.png')
sponge.details_photo.attach(io: sponge_details, filename: 'sponge-details.png')

sponge_howto = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/product+images/tools/sponge/sponge-how-to-use.jpg')
sponge.how_to_use_photo.attach(io: sponge_howto, filename: 'sponge-how-to-use.jpg')
####################################################################


# Shades
# foundation:
f_100W = Shade.create!(name: "100W", product_id: foundation.id)

f_100W_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/foundation/F-100W-swatch.png')
f_100W.swatch_photo.attach(io: f_100W_swatch, filename: 'F-100W-swatch.png')
f_100W_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/foundation/F-100W-product.jpg')
f_100W.product_photo.attach(io: f_100W_product, filename: 'F-100W-product.jpg')
####################################################################

f_180W = Shade.create!(name: "180W", product_id: foundation.id)

f_180W_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/foundation/F-180W-product.jpg')
f_180W.product_photo.attach(io: f_180W_product, filename: 'F-180W-product.jpg')
f_180W_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/foundation/F-180W-swatch.png')
f_180W.swatch_photo.attach(io: f_180W_swatch, filename: 'F-180W-swatch.png')
####################################################################

f_260N = Shade.create!(name: "260N", product_id: foundation.id)

f_260N_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/foundation/F-260N-product.jpg')
f_260N.product_photo.attach(io: f_260N_product, filename: 'F-260N-product.jpg')
f_260N_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/foundation/F-260N-swatch.png')
f_260N.swatch_photo.attach(io: f_260N_swatch, filename: 'F-260N-swatch.png')
####################################################################

f_340C = Shade.create!(name: "340C", product_id: foundation.id)

f_340C_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/foundation/F-340C-product.jpg')
f_340C.product_photo.attach(io: f_340C_product, filename: 'F-340C-product.jpg')
f_340C_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/foundation/F-340C-swatch.png')
f_340C.swatch_photo.attach(io: f_340C_swatch, filename: 'F-340C-swatch.png')
####################################################################

f_460W = Shade.create!(name: "460W", product_id: foundation.id)

f_460W_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/foundation/F-460W-product.jpg')
f_460W.product_photo.attach(io: f_460W_product, filename: 'F-460W-product.jpg')
f_460W_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/foundation/F-460W-swatch.png')
f_460W.swatch_photo.attach(io: f_460W_swatch, filename: 'F-460W-swatch.png')
####################################################################

f_570N = Shade.create!(name: "570N", product_id: foundation.id)

f_570N_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/foundation/F-570N-product.jpg')
f_570N.product_photo.attach(io: f_570N_product, filename: 'F-570N-product.jpg')
f_570N_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/foundation/F-570N-swatch.png')
f_570N.swatch_photo.attach(io: f_570N_swatch, filename: 'F-570N-swatch.png')
####################################################################


# concealer:
c_100W = Shade.create!(name: "100W", product_id: concealer.id)

c_100W_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/concealer/C-100W-product.jpg')
c_100W.product_photo.attach(io: c_100W_product, filename: 'C-100W-product.jpg')
c_100W_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/concealer/C-100W-swatch.png')
c_100W.swatch_photo.attach(io: c_100W_swatch, filename: 'C-100W-swatch.png')
####################################################################

c_180W = Shade.create!(name: "180W", product_id: concealer.id)

c_180W_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/concealer/C-180W-product.jpg')
c_180W.product_photo.attach(io: c_180W_product, filename: 'C-180W-product.jpg')
c_180W_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/concealer/C-180W-swatch.png')
c_180W.swatch_photo.attach(io: c_180W_swatch, filename: 'C-180W-swatch.png')
####################################################################

c_260N = Shade.create!(name: "260N", product_id: concealer.id)

c_260N_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/concealer/C-260N-product.jpg')
c_260N.product_photo.attach(io: c_260N_product, filename: 'C-260N-product.jpg')
c_260N_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/concealer/C-260N-swatch.png')
c_260N.swatch_photo.attach(io: c_260N_swatch, filename: 'C-260N-swatch.png')
####################################################################

c_340C = Shade.create!(name: "340C", product_id: concealer.id)

c_340C_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/concealer/C-340C-product.jpg')
c_340C.product_photo.attach(io: c_340C_product, filename: 'C-340C-product.jpg')
c_340C_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/concealer/C-340C-swatch.png')
c_340C.swatch_photo.attach(io: c_340C_swatch, filename: 'C-340C-swatch.png')
####################################################################

c_460W = Shade.create!(name: "460W", product_id: concealer.id)

c_460W_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/concealer/C-460W-product.jpg')
c_460W.product_photo.attach(io: c_460W_product, filename: 'C-460W-product.jpg')
c_460W_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/concealer/C-460W-swatch.png')
c_460W.swatch_photo.attach(io: c_460W_swatch, filename: 'C-460W-swatch.png')
####################################################################

c_570N = Shade.create!(name: "570N", product_id: concealer.id)

c_570N_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/concealer/C-570N-product.jpg')
c_570N.product_photo.attach(io: c_570N_product, filename: 'C-570N-product.jpg')
c_570N_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/concealer/C-570N-swatch.png')
c_570N.swatch_photo.attach(io: c_570N_swatch, filename: 'C-570N-swatch.png')
####################################################################


# blush:
bliss = Shade.create!(name: "Bliss", product_id: blush.id)

bliss_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/blush/bliss-product.jpg')
bliss.product_photo.attach(io: bliss_product, filename: 'bliss-product.jpg')
bliss_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/blush/bliss-swatch.png')
bliss.swatch_photo.attach(io: bliss_swatch, filename: 'bliss-swatch.png')
####################################################################

faith = Shade.create!(name: "Faith", product_id: blush.id)

faith_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/blush/faith-product.jpg')
faith.product_photo.attach(io: faith_product, filename: 'faith-product.jpg')
faith_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/blush/faith-swatch.png')
faith.swatch_photo.attach(io: faith_swatch, filename: 'faith-swatch.png')
####################################################################

grateful = Shade.create!(name: "Grateful", product_id: blush.id)

grateful_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/blush/grateful-product.jpg')
grateful.product_photo.attach(io: grateful_product, filename: 'grateful-product.jpg')
grateful_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/blush/grateful-swatch.png')
grateful.swatch_photo.attach(io: grateful_swatch, filename: 'grateful-swatch.png')
####################################################################

happy = Shade.create!(name: "Happy", product_id: blush.id)

happy_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/blush/happy-product.jpg')
happy.product_photo.attach(io: happy_product, filename: 'happy-product.jpg')
happy_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/blush/happy-swatch.png')
happy.swatch_photo.attach(io: happy_swatch, filename: 'happy-swatch.png')
####################################################################


# highlight:
enlighten = Shade.create!(name: "Enlighten", product_id: highlight.id)

enlighten_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/highlight/enlighten-product.jpg')
enlighten.product_photo.attach(io: enlighten_product, filename: 'enlighten-product.jpg')
enlighten_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/highlight/enlighten-swatch.png')
enlighten.swatch_photo.attach(io: enlighten_swatch, filename: 'enlighten-swatch.png')
####################################################################

enchant = Shade.create!(name: "Enchant", product_id: highlight.id)

enchant_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/highlight/enchant-product.jpg')
enchant.product_photo.attach(io: enchant_product, filename: 'enchant-product.jpg')
enchant_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/highlight/enchant-swatch.png')
enchant.swatch_photo.attach(io: enchant_swatch, filename: 'enchant-swatch.png')
####################################################################

outshine = Shade.create!(name: "Outshine", product_id: highlight.id)

outshine_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/highlight/outshine-product.jpg')
outshine.product_photo.attach(io: outshine_product, filename: 'outshine-product.jpg')
outshine_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/highlight/outshine-swatch.png')
outshine.swatch_photo.attach(io: outshine_swatch, filename: 'outshine-swatch.png')
####################################################################

captivate = Shade.create!(name: "Captivate", product_id: highlight.id)

captivate_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/highlight/captivate-product.jpg')
captivate.product_photo.attach(io: captivate_product, filename: 'captivate-product.jpg')
captivate_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/face/highlight/captivate-swatch.png')
captivate.swatch_photo.attach(io: captivate_swatch, filename: 'captivate-swatch.png')
####################################################################


# lip_balm:
honor = Shade.create!(name: "Honor", product_id: lip_balm.id)

honor_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/lip/balm/honor-product.jpg')
honor.product_photo.attach(io: honor_product, filename: 'honor-product.jpg')
honor_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/lip/balm/honor-swatch.png')
honor.swatch_photo.attach(io: honor_swatch, filename: 'honor-swatch.png')
####################################################################

blessed = Shade.create!(name: "Blessed", product_id: lip_balm.id)

blessed_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/lip/balm/blessed-product.jpg')
blessed.product_photo.attach(io: blessed_product, filename: 'blessed-product.jpg')
blessed_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/lip/balm/blessed-swatch.png')
blessed.swatch_photo.attach(io: blessed_swatch, filename: 'blessed-swatch.png')
####################################################################

empathy = Shade.create!(name: "Empathy", product_id: lip_balm.id)

empathy_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/lip/balm/empathy-product.jpg')
empathy.product_photo.attach(io: empathy_product, filename: 'empathy-product.jpg')
empathy_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/lip/balm/empathy-swatch.png')
empathy.swatch_photo.attach(io: empathy_swatch, filename: 'empathy-swatch.png')
####################################################################

appreciate = Shade.create!(name: "Appreciate", product_id: lip_balm.id)

appreciate_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/lip/balm/appreciate-product.jpg')
appreciate.product_photo.attach(io: appreciate_product, filename: 'appreciate-product.jpg')
appreciate_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/lip/balm/appreciate-swatch.png')
appreciate.swatch_photo.attach(io: appreciate_swatch, filename: 'appreciate-swatch.png')
####################################################################

compliment = Shade.create!(name: "Compliment", product_id: lip_balm.id)

compliment_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/lip/balm/compliment-product.jpg')
compliment.product_photo.attach(io: compliment_product, filename: 'compliment-product.jpg')
compliment_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/lip/balm/compliment-swatch.png')
compliment.swatch_photo.attach(io: compliment_swatch, filename: 'compliment-swatch.png')
####################################################################


# lip_cream: 
daring = Shade.create!(name: "Daring", product_id: lip_cream.id)

daring_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/lip/liquid/daring-product.jpg')
daring.product_photo.attach(io: daring_product, filename: 'daring-product.jpg')
daring_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/lip/liquid/daring-swatch.png')
daring.swatch_photo.attach(io: daring_swatch, filename: 'daring-swatch.png')
####################################################################

heroic = Shade.create!(name: "Heroic", product_id: lip_cream.id)

heroic_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/lip/liquid/heroic-product.jpg')
heroic.product_photo.attach(io: heroic_product, filename: 'heroic-product.jpg')
heroic_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/lip/liquid/heroic-swatch.png')
heroic.swatch_photo.attach(io: heroic_swatch, filename: 'heroic-swatch.png')
####################################################################

strengthen = Shade.create!(name: "Strengthen", product_id: lip_cream.id)

strengthen_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/lip/liquid/strengthen-product.jpg')
strengthen.product_photo.attach(io: strengthen_product, filename: 'strengthen-product.jpg')
strengthen_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/lip/liquid/strengthen-swatch.png')
strengthen.swatch_photo.attach(io: strengthen_swatch, filename: 'strengthen-swatch.png')
####################################################################

ascend = Shade.create!(name: "Ascend", product_id: lip_cream.id)

ascend_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/lip/liquid/ascend-product.jpg')
ascend.product_photo.attach(io: ascend_product, filename: 'ascend-product.jpg')
ascend_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/lip/liquid/ascend-swatch.png')
ascend.swatch_photo.attach(io: ascend_swatch, filename: 'ascend-swatch.png')
####################################################################

inspire = Shade.create!(name: "Inspire", product_id: lip_cream.id)

inspire_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/lip/liquid/inspire-product.jpg')
inspire.product_photo.attach(io: inspire_product, filename: 'inspire-product.jpg')
inspire_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/lip/liquid/inspire-swatch.png')
inspire.swatch_photo.attach(io: inspire_swatch, filename: 'inspire-swatch.png')
####################################################################

fearless = Shade.create!(name: "Fearless", product_id: lip_cream.id)

fearless_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/lip/liquid/fearless-product.jpg')
fearless.product_photo.attach(io: fearless_product, filename: 'fearless-product.jpg')
fearless_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/lip/liquid/fearless-swatch.png')
fearless.swatch_photo.attach(io: fearless_swatch, filename: 'fearless-swatch.png')
####################################################################


# brow_pencil:
soft_black = Shade.create!(name: "Soft Black", product_id: brow_pencil.id)

soft_black_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/eye/brow/soft-black-product.jpg')
soft_black.product_photo.attach(io: soft_black_product, filename: 'soft-black-product.jpg')
soft_black_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/eye/brow/soft-black-swatch.png')
soft_black.swatch_photo.attach(io: soft_black_swatch, filename: 'soft-black-swatch.png')
####################################################################

deep_brown = Shade.create!(name: "Deep Brown", product_id: brow_pencil.id)

deep_brown_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/eye/brow/deep-brown-product.jpg')
deep_brown.product_photo.attach(io: deep_brown_product, filename: 'deep-brown-product.jpg')
deep_brown_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/eye/brow/deep-brown-swatch.png')
deep_brown.swatch_photo.attach(io: deep_brown_product, filename: 'deep-brown-swatch.png')
####################################################################

warm_brown = Shade.create!(name: "Warm Brown", product_id: brow_pencil.id)

warm_brown_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/eye/brow/warm-brown-product.jpg')
warm_brown.product_photo.attach(io: warm_brown_product, filename: 'warm-brown-product.jpg')
warm_brown_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/eye/brow/warm-brown-swatch.png')
warm_brown.swatch_photo.attach(io: warm_brown_swatch, filename: 'warm-brown-swatch.png')
####################################################################

soft_blonde = Shade.create!(name: "Soft Blonde", product_id: brow_pencil.id)

soft_blonde_product = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/eye/brow/soft-blonde-product.jpg')
soft_blonde.product_photo.attach(io: soft_blonde_product, filename: 'soft-blonde-product.jpg')
soft_blonde_swatch = open('https://aura-beauty-seeds.s3-us-west-1.amazonaws.com/shade+images/eye/brow/soft-blonde-swatch.png')
soft_blonde.swatch_photo.attach(io: soft_blonde_swatch, filename: 'soft-blonde-swatch.png')
####################################################################