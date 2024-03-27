from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, SelectField
from wtforms.validators import DataRequired
from flask_wtf.file import FileField, FileAllowed
from app.api.aws import ALLOWED_EXTENSIONS

product_category =['Fern', 'Flower', 'Shrub', 'Succulent', 'Tree', 'Vine']

class CreateProductForm(FlaskForm):
    name = StringField('Product Name', validators=[DataRequired()])
    price = DecimalField('Price', places=2, validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    category = SelectField('Category',choices=product_category, validators=[DataRequired()])
    image_url = FileField('Review Image', validators =[FileAllowed(list(ALLOWED_EXTENSIONS))])
