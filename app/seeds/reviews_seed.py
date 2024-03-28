from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text

def seed_reviews():

    alocasia1 = Review(
        user_id= 6,
        product_id = 1,
        rating = 5,
        review = 'Absolutely stunning plant! The Alocasia arrived in perfect condition and instantly became the centerpiece of my living room. The lush, dramatic leaves add a touch of tropical elegance to my home decor. Highly recommend!',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/alocasia1.png'
    )

    alocasia2= Review(
        user_id = 7,
        product_id = 1,
        rating = 3,
        review = "Initially, I was blown away by the Alocasia's stunning foliage and vibrant colors. However, after a few weeks, I noticed some yellowing leaves and struggled to maintain its health despite following care instructions diligently. Disappointing.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/alocasia2.png'
    )

    alocasia3= Review(
        user_id = 8,
        product_id = 1,
        rating = 4,
        review = "I'm in love with the Alocasia plant! Its large, dramatic leaves make a bold statement in my home, and I've received countless compliments on its beauty. While it requires occasional attention, the joy it brings is well worth it.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/alocasia3.png'
    )
    fiddle1= Review(
        user_id = 9,
        product_id = 2,
        rating = 2,
        review = "Mixed feelings about the Fiddle Leaf Fig. While its striking foliage adds an elegant touch to my space, I've struggled to keep it healthy despite following care instructions meticulously. Leaf drooping and browning have been ongoing issues, requiring constant attention and maintenance.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/fiddle1.png'
    )

    fiddle2 = Review(
        user_id = 10,
        product_id = 2,
        rating = 5,
        review = "Absolutely in love with my Fiddle Leaf Fig! Its vibrant, oversized leaves make a bold statement in my home, and caring for it has been a rewarding experience. With ample sunlight and occasional watering, it's flourishing beautifully and brings a sense of tranquility to my living space.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/fiddle2.png'
    )
    tradescantia1= Review(
        user_id = 10,
        product_id = 3,
        rating = 2,
        review ="While its colorful foliage is undeniably stunning, I've encountered some challenges in maintaining its health. Despite my best efforts, a few leaves have yellowed and fallen off, leaving me somewhat disappointed.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/tradescantia1.png'
    )
    tradescantia2= Review(
        user_id= 6,
        product_id = 3,
        rating = 5,
        review = "I'm thoroughly impressed with the Pink Tradescantia! Its vibrant colors and unique foliage patterns make it a standout in any room. Despite being a beginner plant parent, I've found it easy to care for, and it has quickly become the focal point of my plant corner.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/tradescantia2.png'
    )
    tradescantia3= Review(
        user_id= 7,
        product_id = 3,
        rating = 4,
        review = "The Pink Tradescantia is a delightful addition to my plant collection! Its variegated leaves and trailing vines bring a touch of whimsy to my home decor. With proper care, it has thrived, and I love watching it grow and flourish.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/tradescantia3.png'
    )
    albo1 = Review(
        user_id= 8,
        product_id = 4,
        rating = 5,
        review = "The Variegated Monstera Albo is a showstopper! Its eye-catching leaves and unique coloration make it a conversation piece in my home. While its price may seem steep, the plant's rarity and beauty make it a worthwhile addition to any plant enthusiast's collection.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/albo1.png'
    )
    albo2 = Review(
        user_id= 9,
        product_id = 4,
        rating = 4,
        review = "I'm beyond ecstatic with my Variegated Monstera Albo! Its rare and exquisite foliage adds an unparalleled elegance to my home. Despite its initial cost, the plant's beauty is truly priceless, and I couldn't be happier with my investment.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/albo2.png'
    )
    albo3 = Review(
        user_id= 10,
        product_id = 4,
        rating = 1,
        review = 'My Monstera Albo died quickly. For the price point, it was not worth it.',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/albo3.png'
    )
    begonia1= Review(
        user_id= 6,
        product_id = 5,
        rating = 5,
        review = 'Thrilled with my Polka Dot Begonia plant! Its eye-catching leaves and compact growth habit make it a perfect choice for adding greenery to small spaces.',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/begonia1.png'
    )
    begonia2= Review(
        user_id= 7,
        product_id = 5,
        rating = 4,
        review = "Its distinctive silver spots on dark green leaves add a touch of elegance to my home decor. Despite its slightly higher price point, the plant's beauty and resilience make it a worthwhile investment.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/begonia2.png'
    )
    monster1= Review(
        user_id= 8,
        product_id = 6,
        rating = 5,
        review = 'I am absolutely thrilled with my Monstera plant! Its lush, tropical foliage and unique split leaves add a touch of exotic elegance to my home.',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/monstera1.png'
    )
    string1= Review(
        user_id= 9,
        product_id = 7,
        rating = 5,
        review = 'My string of hearts grew so fast! I see new growth everyday! It has quickly become one of my favorite houseplants.',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/string1.png'
    )
    snake1 = Review(
        user_id= 10,
        product_id = 8,
        rating = 3,
        review = 'My snake plant has not grown much since I recieved it. It is also incredibly low-maintenance, which I am happy about.',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/snake1.png'
    )
    cotyledon1= Review(
        user_id= 1,
        product_id = 9,
        rating = 5,
        review = "With its unique charm and low-maintenance nature, it is a wonderful addition to any plant enthusiast's collection.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/cotyledon1.png'
    )
    cotyledon2= Review(
        user_id= 6,
        product_id = 9,
        rating = 4,
        review = 'The plant has proven to be quite resilient, thriving in my care with minimal watering and plenty of sunlight.',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/cotyledon2.png'
    )
    paradise1= Review(
        user_id= 7,
        product_id = 10,
        rating = 5,
        review = "Its bold, tropical foliage and vibrant, bird-like flowers bring a touch of exotic beauty to my home. Despite its majestic appearance, the plant has been surprisingly easy to care for, thriving in bright, indirect light and requiring minimal attention.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/paradise1.png'
    )
    agave1= Review(
        user_id= 8,
        product_id = 11,
        rating = 4,
        review = "I am thoroughly impressed with my Agave plant! Its striking,",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/agave1.png'
    )
    asparagus1= Review(
        user_id= 9,
        product_id = 12,
        rating = 5,
        review = "I am absolutely enchanted by my Asparagus Fern! Its delicate, feathery foliage adds a touch of elegance to my home decor. ",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/asparagus1.png'
    )
    asparagus2= Review(
        user_id= 10,
        product_id = 12,
        rating = 3,
        review = "Mixed feelings about the Asparagus Fern. While its airy foliage and trailing habit create a charming aesthetic, I've encountered some challenges in maintaining its health.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/asparagus2.png'
    )
    money1= Review(
        user_id= 1,
        product_id = 13,
        rating = 5,
        review = "Its unique symbolism and effortless beauty, it's truly a treasure in my indoor garden.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/money1.png'
    )
    money2= Review(
        user_id= 6,
        product_id = 13,
        rating = 5,
        review = "Thrilled with my Money Tree plant! Its lush foliage and charming braided trunk add a touch of elegance to my home decor. With its reputation for bringing good luck and prosperity, the plant has become a beloved symbol of abundance and wealth in my household.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/money2.png'
    )
    lily1= Review(
        user_id= 7,
        product_id = 14,
        rating = 4,
        review = "With its air-purifying qualities and graceful presence, it's the perfect choice for anyone looking to create a peaceful oasis in their living space.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/lily1.png'
    )
    birdfern1= Review(
        user_id= 8,
        product_id = 15,
        rating = 5,
        review = "The Bird's Nest Fern is a true gem in my indoor garden! Its lush foliage and compact size make it a versatile plant for any room.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/birdfern1.png'
    )
    orchid1= Review(
        user_id= 1,
        product_id = 16,
        rating = 2,
        review = "While its beautiful blooms and intricate patterns make it a stunning addition to my space, I've encountered some challenges in maintaining its health.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/orchid1.png'
    )
    orchid2= Review(
        user_id= 10,
        product_id = 16,
        rating = 4,
        review = "Its ability to brighten up any room and its captivating fragrance, it's truly a delight to have in my home.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/orchid2.png'
    )
    dracaena1 = Review(
        user_id= 6,
        product_id = 17,
        rating = 4,
        review = 'Its sleek, upright leaves and striking red-edged foliage add a modern elegance to my home decor.',
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/dracaena1.png'
    )
    dracaena2= Review(
        user_id= 7,
        product_id = 17,
        rating = 2,
        review = "Despite providing adequate light and water, the plant has struggled with leaf yellowing and occasional drooping, leaving me somewhat disappointed.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/dracaena2.png'
    )
    aloe1= Review(
        user_id= 8,
        product_id = 18,
        rating = 5,
        review = "I cannot say enough good things about my Aloe plant! Not only does it bring a touch of natural beauty to my home, but its gel-like substance has worked wonders for my skin.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/aloe1.png'
    )
    calathea1= Review(
        user_id= 1,
        product_id = 19,
        rating = 5,
        review = "The Calathea is a true work of art! Its beautifully patterned leaves and graceful growth habit make it a stunning addition to any room.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/calathea.png'
    )
    calathea2= Review(
        user_id= 9,
        product_id = 19,
        rating = 1,
        review = "Despite my best efforts, the plant has struggled with leaf curling and occasional browning, leaving me somewhat disappointed.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/calathea2.png'
    )
    boston1= Review(
        user_id= 10,
        product_id = 20,
        rating = 5,
        review = "I am absolutely thrilled with my Boston Fern! Its lush, feathery fronds and graceful arching growth habit add a touch of natural elegance to my home.",
        image_url = 'https://amazonian-jt.s3.us-west-1.amazonaws.com/review-images/boston1.png'
    )

    db.session.add_all([
        alocasia1,
        alocasia2,
        alocasia3,
        fiddle1,
        fiddle2,
        tradescantia1,
        tradescantia2,
        tradescantia3,
        albo1,
        albo2,
        albo3,
        begonia1,
        begonia2,
        monster1,
        string1,
        snake1,
        cotyledon1,
        cotyledon2,
        paradise1,
        agave1,
        asparagus1,
        asparagus2,
        money1,
        money2,
        lily1,
        birdfern1,
        orchid1,
        orchid2,
        dracaena1,
        dracaena2,
        aloe1,
        calathea1,
        calathea2,
        boston1
    ])
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()
