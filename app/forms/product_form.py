from flask_wtf import FlaskForm
from wtforms import StringField, DecimalField, SelectField
from wtforms.validators import DataRequired, Length, ValidationError
from flask_wtf.file import FileField, FileAllowed
from app.api.aws import ALLOWED_EXTENSIONS

product_category =['Fern', 'Flower', 'Shrub', 'Succulent', 'Tree', 'Vine']

def validate_price(form, field):
    if field.data is not None and isinstance(field.data, float):
        decimal_part = str(field.data).split('.')[1]
        if len(decimal_part) > 2:
            raise ValidationError('Price must have at most two decimal places.')

class CreateProductForm(FlaskForm):
    name = StringField('Product Name', validators=[DataRequired()])
    price = DecimalField('Price', places=2, validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired(), Length(min=5)])
    category = SelectField('Category',choices=product_category, validators=[DataRequired()])
    image_url = FileField('Review Image', validators =[FileAllowed(list(ALLOWED_EXTENSIONS))])

# validator needed for price decimals
