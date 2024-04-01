from app.models import db, CartItem, environment, SCHEMA
from sqlalchemy.sql import text

def seed_cart_items():

    user3item1 = CartItem(
        cart_id=2,
        product_id = 3,
        quantity = 3,
    )
    user3item2 = CartItem(
        cart_id=2,
        product_id = 4,
        quantity = 1
    )
    user3item3 = CartItem(
        cart_id=2,
        product_id = 16,
        quantity = 2
    )

    db.session.add_all([user3item1, user3item2])
    db.session.commit()

def undo_cart_items():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.cart_items RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM cart_items"))

    db.session.commit()
