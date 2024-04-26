from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy import Column, Integer, String, Float, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime

class Product(db.Model):
    __tablename__ = 'products'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    name = Column(String(50), nullable=False)
    price = Column(Float(precision=2), nullable=False)
    description = Column(String(2000), nullable=False)
    category = Column (db.Enum('Fern', 'Flower', 'Shrub', 'Succulent', 'Tree', 'Vine', name='category'), nullable=False)
    # category = Column(String(50), nullable=False)
    image_url = Column(String(500), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.utcnow)
    updatedAt = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # one user has many products
    users = relationship('User', back_populates='products')
    # one product has many reviews
    reviews = relationship('Review', back_populates='products', cascade='all, delete-orphan')
    # one product belongs to many cartItems
    cart_items = relationship('CartItem', back_populates='products', cascade='all, delete-orphan')

    @property
    def product_reviews(self):
        return [review.to_dict() for review in self.reviews]

    def to_dict(self):
        formatted_price = f"{self.price:.2f}"
        return {
            'id': self.id,
            'user_id': self.user_id,
            'name': self.name,
            'price': formatted_price,
            'description': self.description,
            'category':self.category,
            'image_url':self.image_url,
            'reviews': self.product_reviews,
            'createdAt': self.createdAt,
            'updatedAt': self.updatedAt
        }
