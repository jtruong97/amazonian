# amazonian
Amazonian is inspired by the popular e-commerce platform 'Amazon', that features some of my favorite plants! This site mimics Amazon's layout, functionality, aethestics, and intuitive navigation. Amazonian features 3 full CRUD functionalities for managing products, reviews, and shopping carts. Amazonian also features OAuth which streamlines signup and login process for user convenience and security. Join Amazonian today to feature your favorite plant or to explore our products!

## Live Site
- https://amazonian-blt9.onrender.com/

### Landing Page and login
![landing-gif](react-vite/public/Landingdemo-ezgif.com-video-to-gif-converter.gif)

### Review
![review-gif](react-vite/public/Reviewdemo-ezgif.com-video-to-gif-converter.gif)

### Shopping Cart
![cart-gif](react-vite/public/Cartdemo-ezgif.com-video-to-gif-converter.gif)

### Product
![product-gif](react-vite/public/Productdemo-ezgif.com-video-to-gif-converter.gif)

### Search
![search-gif](react-vite/public/search-ezgif.com-video-to-gif-converter.gif)


## Clone This Project
1. Clone this repository
2. Install your dependencies
    - In root run: `pipenv install -r requirements.txt`
    - In react-vite run: `npm install`
3. Create .env file and include
    - SECRET_KEY
    - DATABASE_URL
    - FLASK_ENV
    - SCHEMA
    - S3_BUCKET
    - S3_KEY
    - S3_SECRET
    - GOOGLE_OAUTH_CLIENT_ID
    - GOOGLE_OAUTH_CLIENT_SECRET
4. Create your local database
    - Enter your virtual environment
        - In root run: `pipenv shell`
    - Create database
        - In virtual environment run: `flask db init`
        - In virtual environment run: `flask db migrate`
        - In virtual environment run: `flask db upgrade`
    - Seed Data
        - In virtual environment run: `flask seed all`
5. Run Local Servers
    - Enter virtual shell
        - In virtual environment run: `flask run`
    - In react-vite run: `npm run dev`

## Featured Technology
### Frameworks and Libraries
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![HML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![AWS](https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)



### Database
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white)


### Hosting
![Render](https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white)

## Database Schema
[![Screenshot-2024-04-22-at-8-40-32-AM.png](https://i.postimg.cc/15Y5vzs0/Screenshot-2024-04-22-at-8-40-32-AM.png)](https://postimg.cc/Vdn86mS5)

## Feature List
1. Reviews
    - View all reviews on a product
    - Create a new review on a product
    - Update user's exisiting review
    - Delete user's exisiting review
2. Cart
    - View all products in cart
    - Add new product into cart
    - Update product quantity in cart
    - Delete product from cart
3. Products
    - View all products
    - Create a new product
    - Update user's exisiting product
    - Delete user's exisiting product
4. Search/Sort Filter
    - User will be able to search for product by category or name

## Future Features
5. Order History
    - Users will be able to view their order history if a cart has been checkout

## Endpoints
### Auth
| Request   | Purpose      | Return Value |
| --------- | ------------ | ------------ |
| GET /api/auth | If a user is logged in, will fetch user's details | {<br>&nbsp;&nbsp;"createdAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;"email": "guest@email.com",<br>&nbsp;&nbsp;"first_name": "Jasmine's Guest",<br>&nbsp;&nbsp;"id": 1,<br>&nbsp;&nbsp;"last_name": "User",<br>&nbsp;&nbsp;"updatedAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;"username": "Guest"<br>}<br>Status Code: 200 |
| POST /api/auth/signup | Creates a new user and logs user in | {<br>&nbsp;&nbsp;"createdAt": "Fri, 26 Apr 2024",<br>&nbsp;&nbsp;"email": "test@test.com",<br>&nbsp;&nbsp;"first_name": "test",<br>&nbsp;&nbsp;"id": 12,<br>&nbsp;&nbsp;"last_name": "test",<br>&nbsp;&nbsp;"updatedAt": "Fri, 26 Apr 2024",<br>&nbsp;&nbsp;"username": "Test"<br>}<br>Status Code: 200 |
| POST /api/auth/login | Logs in a current user with valid credentials and returns the current user's information.  | {<br>&nbsp;&nbsp;"createdAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;"email": "demo@aa.io",<br>&nbsp;&nbsp;"first_name": "Demo",<br>&nbsp;&nbsp;"id": 2,<br>&nbsp;&nbsp;"last_name": "Lition",<br>&nbsp;&nbsp;"updatedAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;"username": "Demo"<br>}<br>Status Code: 200|
| POST /api/auth/logout | Logs out the current user and return a message if successful | {<br>&nbsp;&nbsp;"message": "User logged out"<br>}<br>Status Code: 200|

### Reviews
| Request   | Purpose      | Return Value |
| --------- | ------------ | ------------ |
| GET /api/products/:productId/reviews  | Gets all the reviews by Product's id| {<br>&nbsp;&nbsp;"Reviews" : [<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"createdAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 1,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "https://amazonian/example.png",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"product_id": 1,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"rating": 5,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"review": "Beautiful plant!",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"updatedAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"user_id": 10<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;]<br>&nbsp;&nbsp;} <br>Status Code: 200|
| GET /api/reviews/current | Gets all current user's reviews  | {<br>&nbsp;&nbsp;"UserReviews": [<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"createdAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 17,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "https://amazonian.ex.review.png",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"product_id": 9,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"rating": 5,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"review": "Very happy with my purchase!",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"updatedAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"user_id": 1<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;]<br>&nbsp;&nbsp;} <br>Status Code: 200|
| POST /api/products/:productId/reviews/new | Create a review for a product based on product's id| {<br>&nbsp;&nbsp;"createdAt": "Fri, 26 Apr 2024",<br>&nbsp;&nbsp;"id": 35,<br>&nbsp;&nbsp;"image_url": "http://amazonian.test.png",<br>&nbsp;&nbsp;"product_id": 20,<br>&nbsp;&nbsp;"rating": 3,<br>&nbsp;&nbsp;"review": "New review!",<br>&nbsp;&nbsp;"updatedAt": "Fri, 26 Apr 2024",<br>&nbsp;&nbsp;"user_id": 12<br>}<br>Status Code: 200 |
| PUT /api/reviews/:reviewId/edit | Edit a review based on review's id | {<br>&nbsp;&nbsp;"message": "Review updated successfully."<br>}<br>Status Code: 200 |
| DELETE /api/reviews/:reviewId/delete | Delete a review based on review's id | {<br>&nbsp;&nbsp;"message": "Review successfully deleted."<br>}<br>Status Code: 200|

### Shopping Cart
| Request   | Purpose      | Return Value |
| --------- | ------------ | ------------ |
| GET /api/carts/all | Get all current user's carts | {<br>&nbsp;&nbsp;"Carts": [<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"cart_items": [<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"cart_id": 2,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"createdAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 1,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"product_id": 3,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"quantity": 3,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"updatedAt": "Thu, 25 Apr 2024"<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;]<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;]<br>}<br>Status Code: 200 |
| GET /api/carts/active | Get current user's active cart that has not been checked out yet | {<br>&nbsp;&nbsp;"ActiveCart": {<br>&nbsp;&nbsp;&nbsp;&nbsp;"cart_items": [],<br>&nbsp;&nbsp;&nbsp;&nbsp;"createdAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;&nbsp;&nbsp;"id": 1,<br>&nbsp;&nbsp;&nbsp;&nbsp;"is_ordered": false,<br>&nbsp;&nbsp;&nbsp;&nbsp;"updatedAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;&nbsp;&nbsp;"user_id": 1<br>&nbsp;&nbsp;}<br>}<br>Status Code: 200 |
| POST /api/carts/new | Create a new cart that has not been checked out | {<br>&nbsp;&nbsp;&nbsp;"cart_items": [],<br>&nbsp;&nbsp;&nbsp;"createdAt": "Fri, 26 Apr 2024",<br>&nbsp;&nbsp;&nbsp;"id": 5,<br>&nbsp;&nbsp;&nbsp;"is_ordered": false,<br>&nbsp;&nbsp;&nbsp;"updatedAt": "Fri, 26 Apr 2024",<br>&nbsp;&nbsp;&nbsp;"user_id": 12<br>}<br>Status Code: 200 |



### Shopping Cart Items
| Request   | Purpose      | Return Value |
| --------- | ------------ | ------------ |
| GET /api/carts/:cartId | Get all cart products based on the cart's id | {<br>&nbsp;&nbsp;"CartItems": [<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"cart_id": 5,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"createdAt": "Fri, 26 Apr 2024",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 7,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"product_id": 2,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"quantity": 1,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"updatedAt": "Fri, 26 Apr 2024"<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;]<br>}<br>Status Code: 200 |
| POST /api/carts:cartId/products/new| Add a new product into your cart based on cart's id | {<br>&nbsp;&nbsp;"cart_id": 5,<br>&nbsp;&nbsp;"createdAt": "Fri, 26 Apr 2024",<br>&nbsp;&nbsp;"id": 7,<br>&nbsp;&nbsp;"product_id": 2,<br>&nbsp;&nbsp;"quantity": 1,<br>&nbsp;&nbsp;"updatedAt": "Fri, 26 Apr 2024"<br>}<br>Status Code: 200 |
| PUT /api/carts/active/:cartItemId/ edit | Update product quantity based on cart item's id | {<br>&nbsp;&nbsp;"message": "Cart Item quantity sucessfully updated."<br>}<br>Status Code: 200|
| DELETE /api/carts/active/:cartItemId/delete| Delete product in cart based on cart item's id | {<br>&nbsp;&nbsp;"message": "Cart item successfully deleted."<br>}<br>Status Code: 200|


### Products
| Request   | Purpose      | Return Value |
| --------- | ------------ | ------------ |
| GET /api/products| Get all products | {<br>&nbsp;&nbsp;"Products": [<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"category": "Shrub",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"createdAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"description": "Example description",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 1,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "https://amazonian.example.png",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Plant",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"price": "49.95",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"reviews": [<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"createdAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 1,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "https://amazonian.review.png",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"product_id": 1,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"rating": 5,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"review": "Such a cool plant!",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"updatedAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"user_id": 6<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"updatedAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"user_id": 1<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;]<br>}<br>Status Code: 200 |
| GET /api/products/:productId| Get a specific product by product's id | {<br>&nbsp;&nbsp;"category": "Vine",<br>&nbsp;&nbsp;"createdAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;"description": "Example description",<br>&nbsp;&nbsp;"id": 7,<br>&nbsp;&nbsp;"image_url": "https://amazonian.example.png",<br>&nbsp;&nbsp;"name": "Plant",<br>&nbsp;&nbsp;"price": "26.99",<br>&nbsp;&nbsp;"reviews": [<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"createdAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 15,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "https://amazonian.review.png",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"product_id": 7,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"rating": 5,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"review": "new review!",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"updatedAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"user_id": 9<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;],<br>&nbsp;&nbsp;"updatedAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;"user_id": 2<br>}<br>Status Code: 200 |
| GET /api/products/categories/:categoryName | Get all products by category name | {<br>&nbsp;&nbsp;"Category": [<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"category": "Fern",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"createdAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"description": "Example product description",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 15,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "https://amazonian.example.png",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "Fern plant",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"price": "32.55",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"reviews": [<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"createdAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 26,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "https://amazonian.review.png",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"product_id": 15,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"rating": 5,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"review": "New review!",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"updatedAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"user_id": 8<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"updatedAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"user_id": 4<br>&nbsp;&nbsp;&nbsp;&nbsp;},<br>&nbsp;&nbsp;]<br>}<br>Status Code: 200 |
| GET /api/products/current | Get current user's products | {<br>&nbsp;&nbsp;"myProducts": [<br>&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"category": "Succulent",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"createdAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"description": "My product's description",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 11,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "https://amazonian.example.png",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"name": "My product",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"price": "15.99",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"reviews": [<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"createdAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"id": 20,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"image_url": "https://amazonian.example.png",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"product_id": 11,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"rating": 4,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"review": "review description",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"updatedAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"user_id": 8<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;],<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"updatedAt": "Thu, 25 Apr 2024",<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"user_id": 3<br>&nbsp;&nbsp;&nbsp;&nbsp;},<br>&nbsp;&nbsp;]<br>}<br>Status Code: 200 |
| POST /api/products/new | Create a new product | {<br>&nbsp;&nbsp;"category": "Flower",<br>&nbsp;&nbsp;"createdAt": "Fri, 26 Apr 2024",<br>&nbsp;&nbsp;"description": "new product description",<br>&nbsp;&nbsp;"id": 21,<br>&nbsp;&nbsp;"image_url": "http://amazonian.example.png",<br>&nbsp;&nbsp;"name": "new product name",<br>&nbsp;&nbsp;"price": "100.00",<br>&nbsp;&nbsp;"reviews": [],<br>&nbsp;&nbsp;"updatedAt": "Fri, 26 Apr 2024",<br>&nbsp;&nbsp;"user_id": 3<br>}<br>Status Code: 200 |
| PUT /api/products/:productId/edit | Update product based on product's id | {<br>&nbsp;&nbsp;"message": "Product updated successfully."<br>}<br>Status Code: 200|
| DELETE /api/products/:productId/delete | Delete product based on product's id | {<br>&nbsp;&nbsp;"message": "Product successfully deleted."<br>}<br>Status Code: 200|
