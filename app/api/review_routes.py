from flask import Blueprint, jsonify, request
from app.models import db, Product, Review
from flask_login import current_user, login_required
from app.forms.review_form import CreateReviewForm
from app.api.aws import (upload_file_to_s3, get_unique_filename)

review_routes = Blueprint('reviews', __name__)

# GET ALL REVIEWS OF CURRENT USER
@review_routes.route('/current')
@login_required
def user_reviews():
    if not current_user:
        return jsonify({'error': 'Unauthorized'}), 403
    user_reviews = Review.query.filter_by(user_id=current_user.id).all()
    user_rev_lst = [review.to_dict() for review in user_reviews]
    return {'Reviews': user_rev_lst}

# UPDATE REVIEW BY REVIEW ID
@review_routes.route('/<int:id>/edit', methods=['PUT'])
@login_required
def update_review(id):
    review = Review.query.get(id)
    if not review:
        return jsonify({'error': 'Review not found'}), 404
    if review.user_id != current_user.id:
        return jsonify({'error': 'Unauthorized'}), 403

    form = CreateReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        if 'image_url' in request.files:
            new_img = request.files['image_url']
            new_img.filename = get_unique_filename(new_img.filename)
            upload = upload_file_to_s3(new_img)
            print(upload)

            if "url" not in upload:
                return jsonify({'error': 'Not a valid image'}), 400
            new_url = upload['url']
            review.image_url = new_url
        else:
            new_url = None

        review.rating = form.rating.data
        review.review = form.review.data

        db.session.commit()
        return jsonify({"message": 'Review updated successfully.'})
    return form.errors, 400

# DELETE REVIEW BY ID
@review_routes.route('/<int:id>/delete', methods=['DELETE'])
@login_required
def delete_review(id):
    review = Review.query.get(id)

    if not review:
        return jsonify({'error': 'Review not found'}), 404
    if review.user_id != current_user.id:
        return jsonify({'error': 'Unauthorized'}), 403

    db.session.delete(review)
    db.session.commit()

    return jsonify({"message": 'Review successfully deleted.'})
