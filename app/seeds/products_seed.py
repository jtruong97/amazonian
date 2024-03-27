from app.models import db, Product, environment, SCHEMA
from sqlalchemy.sql import text

def seed_products():

    alocasia = Product(
        user_id = 1,
        name ='Alocasia',
        price = 29.95,
        description ='Alocasia is a genus of tropical plants known for their large, dramatic leaves and striking foliage patterns. These plants, commonly called elephant ears, thrive in warm, humid environments and are popular as ornamental houseplants or outdoor garden additions in subtropical regions.',
        category = 'Shrub',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/product-images/alocasia.png'
    )

    fiddle_Leaf_fig = Product(
        user_id = 1,
        name ='Fiddle Leaf Fig',
        price = 162.99,
        description = 'Fiddle Leaf Figs thrive in bright, indirect light and prefer well-draining soil. They are a favorite choice for interior decoration, adding a touch of elegance and greenery to homes and offices. In addition to its aesthetic appeal, the Fiddle Leaf Fig is also valued for its air-purifying qualities, making it a popular choice for indoor environments. ',
        category = 'Tree',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/product-images/fiddle-leaf-fig.png'
    )

    pink_tradescantia = Product(
        user_id = 1,
        name ='Pink Tradescantia',
        price = 19.95,
        description = 'Pink Tradescantia thrives in bright, indirect light and well-draining soil, and it benefits from regular watering to maintain its lush appearance. It is an easy-to-grow plant that adds a touch of beauty and whimsy to indoor spaces.  Its lance-shaped leaves feature shades of pink, green, and cream, creating a striking variegated pattern.',
        category = 'Vine',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/product-images/tradescantia-nanouk.png'
    )

    monstera_albo = Product(
        user_id = 1,
        name ='Monstera Albo ',
        price = 550.55,
        description ='The variegated Monstera albo is a striking tropical plant renowned for its unique foliage. Its large, glossy leaves are characterized by creamy-white variegation, creating a stunning contrast against the deep green background. This rare and coveted plant adds an exotic touch to indoor spaces, thriving in bright, indirect light and humid conditions.',
        category = 'Vine',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/product-images/variegated-monstera-albo.png'
    )

    polka_dot_begonia = Product(
        user_id = 1,
        name ='Polka Dot Begonia',
        price = 97.99,
        description ='The Polka Dot Begonia (Begonia maculata) is a charming houseplant known for its striking foliage. Its elongated leaves feature contrasting silver spots or "polka dots" on a dark green background, reminiscent of the patterns seen on certain species of wild animals. It thrives in bright, indirect light and prefers consistently moist but well-draining soil.',
        category = 'Shrub',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/product-images/polka-dot-begonia.png'
    )

    monstera = Product(
        user_id = 2,
        name = 'Monstera',
        price = 33.33,
        description = 'The Monstera deliciosa, commonly known as the Swiss cheese plant or split-leaf philodendron, is a tropical vine native to the rainforests of Central and South America. The plant starts as a compact, bushy form but matures into a climbing vine with aerial roots that attach to supports.  It adds a touch of tropical elegance to interior spaces and is a favorite among plant enthusiasts and interior decorators alike.',
        category = 'Vine',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/product-images/monstera.png'
    )

    string_of_hearts = Product(
        user_id = 2,
        name ='String of Hearts',
        price = 26.99,
        description ="Its distinctive heart-shaped leaves, which are small and delicate, grow along long, slender stems that can cascade gracefully over the edges of pots or hanging baskets. The leaves are typically variegated with shades of green, silver, and purple, adding to the plant's visual appeal. String of Hearts produces small tubular flowers that are shaped like miniature lanterns and can appear intermittently throughout the growing season.",
        category = 'Vine',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/product-images/string-of-hearts.png'
    )

    snake_plant = Product(
        user_id = 2,
        name = 'Snake Plant',
        price = 48.99,
        description ="The Snake Plant (Sansevieria spp.), also known as Mother-in-Law's Tongue, is a popular and resilient houseplant prized for its architectural form and low maintenance requirements. he plant features long, upright leaves that are often variegated with shades of green, yellow, or white, and they grow in a rosette formation. They thrive in a wide range of light conditions, from low to bright indirect light, and require infrequent watering, making them suitable for busy or novice plant owners.",
        category = 'Succulent',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/product-images/snake-plant.png'
    )

    cotyledon_orbiculata = Product(
        user_id = 2,
        name = 'Cotyledon Orbiculata',
        price = 18.22,
        description = "Commonly known as Pig's Ear or Round-Leafed Navel-wort, is a succulent plant species native to South Africa. It is characterized by its thick, fleshy leaves that are round or oval-shaped. The leaves are typically gray-green in color and may have red margins. In summer, it produces clusters of tubular, orange-red flowers on tall stalks.",
        category = 'Succulent',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/product-images/cotyledon+orbiculata.png'
    )

    bird_of_paradise = Product(
        user_id = 2,
        name ='Bird of Paradise',
        price = 68.95,
        description ='Bird of Paradise (Strelitzia reginae) is a striking tropical plant known for its bold foliage and vibrant, bird-like flowers. As a popular ornamental plant, Bird of Paradise adds a touch of exotic beauty to gardens and indoor spaces, thriving in warm climates with plenty of sunlight.',
        category = 'Flower',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/product-images/birds-of-paradise.png'
    )

    agave = Product(
        user_id = 3,
        name ='Agave',
        price = 15.99,
        description = 'The Agave plant is a succulent with thick, fleshy leaves arranged in a rosette pattern, native to arid regions of the Americas. It is used for the production of alcoholic beverages like tequila and mezcal, as well as sweeteners such as agave nectar, and is also grown ornamentally for its striking appearance.',
        category = 'Succulent',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/product-images/agave.png'
    )

    asparagus_fern = Product(
        user_id = 3,
        name = 'Asparagus Fern',
        price = 48.99,
        description ='The Asparagus fern is characterized by delicate, feathery foliage and arching stems that give it a graceful appearance. As a popular houseplant, it thrives in bright, indirect light and is prized for its ornamental value, often used in hanging baskets or as a trailing plant in indoor gardens.',
        category = 'Fern',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/product-images/asparagus-fern.png'
    )

    money_tree = Product(
        user_id = 3,
        name ='Money Tree',
        price = 88.95,
        description ='The Money Tree (Pachira aquatica) is a popular houseplant known for its distinctive braided trunk and lush, palmate leaves. Money Trees are believed to bring good luck and prosperity according to Feng Shui principles, making them a popular choice for home and office décor. They thrive in bright, indirect light and require regular watering to keep the soil evenly moist. ',
        category = 'Tree',
        image_url ='https://amazonian-jt.s3.us-west-1.amazonaws.com/product-images/money-tree.png'
    )

    peace_lily = Product(
        user_id = 4,
        name = 'Peace Lily',
        price = 28.99,
        description ='The Peace Lily (Spathiphyllum spp.) is a popular and elegant houseplant known for its lush, dark green foliage and distinctive white flowers. Peace Lilies are valued for their air-purifying qualities, making them ideal for indoor environments. They thrive in low to moderate light conditions and prefer consistently moist soil.',
        category = 'Flower',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/product-images/peace-lily.png'
    )

    birds_nest_fern = Product(
        user_id = 4,
        name = "Bird's Nest Fern",
        price = 32.55,
        description ="Popular as a houseplant, the Bird's Nest Fern thrives in indirect light and consistently moist, well-draining soil, making it an ideal choice for adding a touch of greenery to indoor spaces. It is characterized by its rosette of broad, glossy, and wavy-edged fronds.",
        category = 'Fern',
        image_url ='https://amazonian-jt.s3.us-west-1.amazonaws.com/product-images/birds-nest-fern.png'
    )

    orchid = Product(
        user_id = 4,
        name ='Orchid',
        price = 132.99,
        description = 'Known for their stunning and often fragrant flowers, orchids come in a wide variety of colors, shapes, and sizes. Their blooms can be single or clustered, and they range from delicate and intricate to bold and showy.  Orchids have a reputation for being exotic and challenging to grow, but with proper care, they can thrive as houseplants or in outdoor gardens.',
        category = 'Flower',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/product-images/orchid.png'
    )

    dracaena_marginata = Product(
        user_id = 5,
        name ='Dracaena Marginata',
        price = 108.99,
        description ='Dracaena marginata, commonly known as the Madagascar dragon tree or red-edged dracaena, is a tropical plant species native to Madagascar and other Indian Ocean islands. Dracaena marginata is a popular choice for indoor decoration due to its easy care requirements and air-purifying qualities. It thrives in bright, indirect light and prefers well-draining soil.',
        category = 'Tree',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/product-images/dracaena-marginata.png'
    )

    aloe = Product(
        user_id = 5,
        name = 'Aloe',
        price = 17.95,
        description = 'Aloe is a genus of succulent plants known for their thick, fleshy leaves that contain a gel-like substance with various medicinal properties. These plants are native to arid regions and are characterized by their rosette growth habit and serrated leaf edges. Aloe vera, one of the most well-known species, is widely cultivated for its uses in skincare, cosmetics, and alternative medicine, including treating sunburns, wounds, and skin conditions.',
        category = 'Succulent',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/product-images/aloe.png'
    )

    calathea = Product(
        user_id = 5,
        name ='Calathea',
        price = 22.95,
        description ='Known for their air-purifying qualities, Calathea plants feature large, broad leaves with unique markings, often in shades of green, purple, or pink. These plants thrive in indirect sunlight and prefer consistently moist soil, making them popular choices for indoor decor. Calatheas are also sometimes called "prayer plants" because their leaves fold up at night, resembling hands in prayer.',
        category = 'Shrub',
        image_url ='https://amazonian-jt.s3.us-west-1.amazonaws.com/product-images/calathea.png'
    )
    boston_fern = Product(
        user_id = 5,
        name ='Boston Fern',
        price = 52.55,
        description ='Boston fern (Nephrolepis exaltata), also known as sword fern, is a popular fern species that grows in many tropical areas around the world. A spot near a window with filtered or dappled sunlight is perfect for this tropical houseplant.',
        category = 'Fern',
        image_url ='https://amazonian-jt.s3.us-west-1.amazonaws.com/product-images/boston-fern.png'
    )

    db.session.add_all([
        alocasia,
        fiddle_Leaf_fig,
        pink_tradescantia,
        monstera_albo,
        polka_dot_begonia,
        monstera,
        string_of_hearts,
        snake_plant,
        cotyledon_orbiculata,
        bird_of_paradise,
        agave,
        asparagus_fern,
        money_tree,
        peace_lily,
        birds_nest_fern,
        orchid,
        dracaena_marginata,
        aloe,
        calathea,
        boston_fern
    ])
    db.session.commit()

def undo_products():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.products RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM products"))

    db.session.commit()
