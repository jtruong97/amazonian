from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, SelectField
from wtforms.validators import DataRequired, Length, ValidationError
from flask_wtf.file import FileField, FileAllowed
from app.api.aws import ALLOWED_EXTENSIONS

product_category =['Fern', 'Flower', 'Shrub', 'Succulent', 'Tree', 'Vine']

def val_price(form, field):
    dec = str(field.data).split(".")[1]
    if dec and len(dec) > 2:
        raise ValidationError('Price must be less than 2 decimals')

class CreateProductForm(FlaskForm):
    name = StringField('Product Name', validators=[DataRequired()])
    price = DecimalField('Price', places=2, validators=[DataRequired(), val_price])
    description = StringField('Description', validators=[DataRequired(), Length(min=5)])
    category = SelectField('Category',choices=product_category, validators=[DataRequired()])
    image_url = FileField('Review Image', validators =[FileAllowed(list(ALLOWED_EXTENSIONS))])

# validator needed for price decimals
