from app.models import db, Cart, environment, SCHEMA
from sqlalchemy.sql import text

def seed_carts():

    user1cart1 = Cart(
        user_id = 1,
        is_ordered = False
    )

    user3cart1 = Cart(
        user_id = 3,
        is_ordered = True
    )

    user3cart2 = Cart(
        user_id = 3,
        is_ordered = False
    )

    db.session.add(user1cart1)
    db.session.add(user3cart1)
    db.session.add(user3cart2)
    db.session.commit()


def undo_carts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.carts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM carts"))

    db.session.commit()
