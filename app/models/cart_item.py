from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy import Column, Integer, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime

class CartItem(db.Model):
    __tablename__ = 'cart_items'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = Column(Integer, primary_key=True)
    cart_id = Column(Integer, ForeignKey(add_prefix_for_prod('carts.id')), nullable=False)
    product_id = Column(Integer, ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    quantity = Column(Integer, nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.utcnow)
    updatedAt = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # one cart has many cart items
    carts = relationship('Cart', back_populates='cart_items')
    # one product has many cart items
    products = relationship('Product', back_populates='cart_items')

    def to_dict(self):
        return{
            'id': self.id,
            'cart_id': self.cart_id,
            'product_id':self.product_id,
            'quantity': self.quantity,
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt
        }
