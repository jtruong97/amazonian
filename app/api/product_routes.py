from flask import Blueprint, jsonify, request
from app.models import db, Product, Review
from flask_login import current_user, login_required
from app.forms.review_form import CreateReviewForm
from app.api.aws import (upload_file_to_s3, get_unique_filename)

product_routes = Blueprint('products', __name__)

# GET ALL PRODUCTS
@product_routes.route('/')
def all_products():
    products = Product.query.all()
    product_list = [product.to_dict() for product in products]
    return {"Products":product_list}


# GET PRODUCT BY ID
@product_routes.route('/<int:id>')
def one_product(id):
    product = Product.query.get(id)
    if not product:
        return jsonify({'error': 'Product not found'}), 404
    else:
        product = product.to_dict()
        return product

# GET ALL PRODUCTS BY CURRENT USER
@product_routes.route('/current')
@login_required
def users_product():
    if not current_user:
        return jsonify({'error': 'Unauthorized'}), 403
    user_products = Product.query.filter_by(user_id=current_user.id).all()
    user_prod_lst = [product.to_dict() for product in user_products]
    return  {"Products": user_prod_lst}


# GET ALL REVIEWS BY PRODUCT ID
@product_routes.route('/<int:id>/reviews')
def product_reviews(id):
    product = Product.query.get(id)
    if not product:
        return jsonify({'error': 'Product not found'}), 404
    business_reviews = Review.query.filter_by(product_id=id).all()
    bus_rev_lst = [review.to_dict() for review in business_reviews]
    return {"Reviews": bus_rev_lst}

# POST A REVIEW BY PRODUCT ID
@product_routes.route('/<int:id>/reviews/new', methods=['POST'])
@login_required
def new_review(id):
    product = Product.query.get(id)
    if not product:
        return jsonify({'error': 'Product not found'}), 404

    form = CreateReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        image = form.data['image_url']
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        print(upload)

        if "url" not in upload:
            return jsonify({'error': 'Not a valid image'}), 400

        url = upload['url']
        new_review = Review(
            user_id = current_user.id,
            product_id= id,
            rating=form.rating.data,
            review=form.review.data,
            image_url=url
        )
        db.session.add(new_review)
        db.session.commit()
        return new_review.to_dict()
    return form.errors, 400

# UPDATE REVIEW BY REVIEW ID
