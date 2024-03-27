from .db import db, environment, SCHEMA, add_prefix_for_prod
from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from datetime import datetime

class Review(db.Model):
    __tablename__ = 'reviews'

    if environment == "production":
        __table_args__ = {'schema': SCHEMA}

    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey(add_prefix_for_prod('users.id')), nullable=False)
    product_id = Column(Integer, ForeignKey(add_prefix_for_prod('products.id')), nullable=False)
    rating = Column(Integer, nullable=False)
    review = Column(String(2000), nullable=False)
    image_url = Column(String(500), nullable=False)
    createdAt = db.Column(db.DateTime, default=datetime.utcnow)
    updatedAt = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)

    # one user has many reviews
    users = relationship('User', back_populates='reviews')
    # one product has many reviews
    products = relationship('Product', back_populates='reviews')

    def to_dict(self):
        return{
            'id': self.id,
            'user_id': self.user_id,
            'product_id':self.product_id,
            'rating':self.rating,
            'review':self.review,
            'image_url':self.image_url,
            'createdAt':self.createdAt,
            'updatedAt':self.updatedAt
        }
