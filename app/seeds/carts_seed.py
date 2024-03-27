from app.models import db, Cart, environment, SCHEMA
from sqlalchemy.sql import text

def seed_carts():

    user3cart1 = Cart(
        user_id = 3,
        is_ordered = True
    )

    db.session.add(user3cart1)
    db.session.commit()


def undo_carts():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.carts RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM carts"))

    db.session.commit()
