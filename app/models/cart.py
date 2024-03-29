from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy import Column, Integer, Boolean, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime

class Cart(db.Model):
    __tablename__ = 'carts'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    is_ordered = Column(Boolean, default=False)
    createdAt = db.Column(db.DateTime, default=datetime.utcnow)
    updatedAt = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # one user has many carts
    users = relationship('User', back_populates='carts')
    # one cart has many cartItems
    cart_items = relationship('CartItem', back_populates='carts')

    @property
    def cartItems(self):
        return [items.to_dict() for items in self.cart_items]

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'is_ordered': self.is_ordered,
            'cart_items': self.cartItems,
            'createdAt': self.createdAt,
            'updatedAt':self.updatedAt
        }
