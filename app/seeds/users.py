from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    guest = User(
        username='Guest', email='guest@email.com', password='password', first_name="Jasmine's Guest", last_name='User')
    demo = User(
        username='Demo', email='demo@aa.io', password='password', first_name='Demo', last_name='Lition')
    jasmine = User(
        username='Jasmine', email='jasmine@aa.io', password='password', first_name='Jasmine', last_name='Truong')
    marnie = User(
        username='marnie', email='marnie@aa.io', password='password', first_name='Marnie', last_name='Smith')
    bobbie = User(
        username='bobbie', email='bobbie@aa.io', password='password', first_name='Bobbie', last_name='Brown')
    kyle = User(
        username='Kyle', email='kyle@aa.io', password='password', first_name='Kyle', last_name='Chaw')
    stephanie = User(
        username='Step', email ='steph@aa.io', password='password', first_name='Stephanie', last_name='Ngo')
    joanne = User(
        username='Jo', email='joanne@aa.io', password='password', first_name='Joanne', last_name='Kwong')
    josh = User (
        username = 'Josh', email='josh@aa.io', password='password', first_name='Joshua', last_name='Wong')
    clay = User(
        username='Clay', email='clay@aa.io', password='password', first_name='Clayton', last_name='Tran')

    db.session.add(guest)
    db.session.add(demo)
    db.session.add(jasmine)
    db.session.add(marnie)
    db.session.add(bobbie)
    db.session.add(kyle)
    db.session.add(stephanie)
    db.session.add(joanne)
    db.session.add(josh)
    db.session.add(clay)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()
