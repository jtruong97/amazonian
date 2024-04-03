from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, NumberRange, Length
from flask_wtf.file import FileField, FileAllowed
from app.api.aws import ALLOWED_EXTENSIONS

class CreateReviewForm(FlaskForm):
    rating = IntegerField('Rating', validators=[DataRequired(), NumberRange(min=1, max=5, message='Rating must be between 1 and 5')])
    review = StringField('Review', validators=[DataRequired(), Length(min=5)])
    image_url = FileField('Review Image', validators =[FileAllowed(list(ALLOWED_EXTENSIONS))])
