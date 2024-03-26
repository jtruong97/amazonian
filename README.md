# amazonian

# Database Schema
[![amazon-db-ss.png](https://i.postimg.cc/kXKWBgL2/amazon-db-ss.png)](https://postimg.cc/mtZPnBL4)

# User Stories

## Users
### Sign Up
- As an unregistered and unauthorized user, I want to be able to sign up for the website via a sign-up form.
- When I am on the `/signup` page:
    - I would like to be able to enter my username, email, first name, last name, and password on a form.
    - I would like the website to log me in upon successful completion of the sign-up form
    - When I enter invalid data on the sign-up form:
        - I would like the website to inform me of the validations I failed to pass and can repopulate the form with my previous entries, so that I can try again without needing to refill the form again.
    - I would like a button that will redirect me to the sign up page if I am already an exisiting user.

### Log In
- As a registered authorized user, I want to be able to log in to the website via a log-in form.
- When i am in the `/login` page:
    - I would to be able to enter my username and password on the a form
    - When I enter invalid data on the log-in form:
        - I would like the website to inform me of the validations I failed to pass and repopulate the form with my invalid entries so I can try again without needing to refill the form again.

### Demo User
- As an unregistered user, I would like an button on the login `/login` page that allows me to visit the site as a guest without having to sign up or log in.
- The Demo User button will log me in and allow me to access the site as a normal user, so that I can test the site's features and functionality.

### Log Out
- As a logged in user, I want to log out via a log out button in the navigation bar.
- While on any page of the site:
    - I can be logged out of my account and be redirected to the langing page.

## Reviews
### View Reviews
- As a logged in or logged out user, I want to be able to view all reviews on a product.
    - When I am on the `/product/:productId` page:
        - I can view the product information as well as all the product's reviews.

### Create Review
- As a logged in user, I want to be able to create a review on a product.
- When I am on the `/product/:productId`, I want to be able to click on a 'Create Review' button that will bring me to a review form.
    - When I am on the `/product/:productId/review/new`, I should see a form allowing me to put in a review rating as well as a description.

### Update Review
- As a logged in user, I can update my exisiting review by clicking an 'Edit' button associated with the logged in user.
- When I am on the `/product/:productId` page, I can click on an 'Edit' button that will bring me to a form page with my exisiting review information.
    - Clicking on an 'Update' button will make changes to my exisiting review I have previously posted.

### Delete Review
- As a logged in user, I can delete my exisiting review by clicking a 'Delete' button next to the review associated with the logged in user.

## Cart
### Create Cart
- As a logged in user, I want to be able to add products into my cart
    - On the product page `/product/:productId`, I want to be able to access an 'Add to Cart' button.

### View Cart
- In the navigation bar, I should be able to view my cart
    - Clicking on the view cart button should redirect me to `/user/:userId/cart` that will show all the cart items in my cart.

### Update Cart
- As a logged in user I can update my cart item quantity
    - Typing in a number into a text box and clicking update will change the quantity of the cart item and adjust the subtotal accordingly.

### Delete Cart
- As a logged in user, I want to be able to delete products from my cart with a delete button
    - Clicking delete will update your subtotal as well as remove the item from the cart.

# MVP's Feature List
## Reviews
- Logged in users can create, view, edit, and delete their review.
- Logged out users can view all reviews

## Cart
- Logged in users can create, view, edit, and delete items in their cart.

## Order History (bonus feature)
- Logged in user can view their order history if a cart has been checked out.

## Search (bonus feature)
- Logged in and out users can search for specific products

# Wire Frames
## Landing Page `/`
[![amazon-landing-drawio.png](https://i.postimg.cc/D0CwCMC4/amazon-landing-drawio.png)](https://postimg.cc/xNzQ8tV9)

## Product Reviews `/product/:productId`
[![amazon-product-product-Id-drawio.png](https://i.postimg.cc/hGrvzv90/amazon-product-product-Id-drawio.png)](https://postimg.cc/Y4vMTpD4)

## Cart `/user/:userId/cart`
[![amazon-cart-drawio.png](https://i.postimg.cc/ZKB1CQr7/amazon-cart-drawio.png)](https://postimg.cc/4mG80B2V)
