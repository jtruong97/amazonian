from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

def check_email(form, field):
    # Check if email
    email = field.data
    if '@' not in email:
        raise ValidationError('Invalid email address.')
    email_end = ('.com', '.net','.io', '.org','.co')
    if not any(email.lower().endswith(end) for end in email_end):
        raise ValidationError('Invalid email address.')


class SignUpForm(FlaskForm):
    first_name = StringField('first_name', validators=[DataRequired(), Length(min=1, max= 30)])
    last_name = StringField('last_name', validators=[DataRequired(), Length(min=1, max=30)])
    username = StringField(
        'username', validators=[DataRequired(), username_exists, Length(min=3, max=30)])
    email = StringField('email', validators=[DataRequired(), user_exists, check_email, Length(min=1)])
    password = StringField('password', validators=[DataRequired(), Length(min=8, max=30)])
