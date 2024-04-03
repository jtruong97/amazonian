from flask import Blueprint, jsonify, request
from app.models import db, Product, Review
from flask_login import current_user, login_required
from app.forms.review_form import CreateReviewForm
from app.forms.product_form import CreateProductForm
from app.api.aws import (upload_file_to_s3, get_unique_filename, remove_file_from_s3)

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

# GET ALL PRODUCTS BY CATEGORY
@product_routes.route('/categories/<string:category>')
def getByCategory(category):
    products = Product.query.filter(Product.category == category).all()
    if not products:
        return jsonify({'error': 'No products with this category.'}), 404
    products_lst = [product.to_dict() for product in products]
    return {'Category':products_lst}

# POST A NEW PRODCUT
@product_routes.route('/new', methods=['POST'])
@login_required
def new_product():
    if not current_user:
        return jsonify({'error': 'Unauthorized'}), 403

    form = CreateProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        image = form.data['image_url']
        image.filename = get_unique_filename(image.filename)
        upload = upload_file_to_s3(image)
        print(upload)

        if "url" not in upload:
            return jsonify({'error': 'Not a valid image'}), 400

        url = upload['url']
        new_product = Product(
            user_id = current_user.id,
            name = form.name.data,
            price = form.price.data,
            description = form.description.data,
            category = form.category.data,
            image_url = url
        )
        db.session.add(new_product)
        db.session.commit()
        return new_product.to_dict()
    return form.errors, 400

# UPDATE PRODUCT BY PRODUCT ID
@product_routes.route('/<int:id>/edit', methods=['PUT'])
@login_required
def update_product(id):
    product = Product.query.get(id)
    if not product:
        return jsonify({'error': 'Product not found'}), 404
    if product.user_id != current_user.id:
        return jsonify({'error': 'Unauthorized'}), 403

    form = CreateProductForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        if 'image_url' in request.files:
            new_img = request.files['image_url']
            new_img.filename = get_unique_filename(new_img.filename)
            upload = upload_file_to_s3(new_img)

            if "url" not in upload:
                return jsonify({'error': 'Not a valid image'}), 400

            new_url = upload['url']
            product.image_url = new_url
        else:
            new_url = None

        product.name = form.name.data
        product.price = form.price.data
        product.description = form.description.data
        product.category = form.category.data

        db.session.commit()
        return jsonify({'message': 'Product updated successfully.'})
    return form.errors, 400

# DELETE PRODUCT BY PRODUCT ID
@product_routes.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def delete_product(id):
    product = Product.query.get(id)
    if not product:
        return jsonify({'error': 'Product not found'}), 404
    if product.user_id != current_user.id:
        return jsonify({'error': 'Unauthorized'}), 403

    db.session.delete(product)
    db.session.commit()

    return jsonify({"message": 'Product successfully deleted.'})
