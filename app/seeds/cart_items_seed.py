from app.models import db, CartItem, environment, SCHEMA
from sqlalchemy.sql import text

def seed_cart_items():

    user3item1 = CartItem(
        cart_id=2,
        product_id = 3,
        quantity = 3,
    )
    user3item4 = CartItem(
        cart_id=2,
        product_id = 2,
        quantity = 1
    )
    user3item5 = CartItem(
        cart_id=2,
        product_id = 13,
        quantity = 2
    )
    user3item6 = CartItem(
        cart_id=2,
        product_id = 19,
        quantity = 1
    )
    user3item2 = CartItem(
        cart_id=3,
        product_id = 4,
        quantity = 1
    )
    user3item3 = CartItem(
        cart_id=3,
        product_id = 16,
        quantity = 2
    )

    db.session.add_all([user3item1, user3item2, user3item3, user3item4, user3item5, user3item6])
    db.session.commit()

def undo_cart_items():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.cart_items RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM cart_items"))

    db.session.commit()
